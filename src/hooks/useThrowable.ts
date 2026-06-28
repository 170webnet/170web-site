import { useEffect, useRef } from "react";
import type Matter from "matter-js";
import gsap from "gsap";

interface Options {
    scrollGravity?: boolean;
}

export const useThrowable = (options: Options = {}) => {
    const sceneRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        let cancelled = false;
        let cleanup: () => void = () => {};

        // matter-js (~60KB) é carregado sob demanda só quando a seção monta no client.
        (async () => {
            const M = (await import("matter-js")).default;
            if (cancelled || !sceneRef.current) return;

            const {
                Engine,
                Runner,
                Bodies,
                Composite,
                Mouse,
                MouseConstraint,
                Events,
                Body,
            } = M;

            const element = sceneRef.current;

            const engine = Engine.create();
            const runner = Runner.create();

            let width = element.offsetWidth;
            let height = element.offsetHeight;

            engine.gravity.y = 0.8;

            // IntersectionObserver: roda a física só quando visível
            let isVisible = false;
            const observer = new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    Runner.run(runner, engine);
                } else {
                    Runner.stop(runner);
                }
            });
            observer.observe(element);

            // Mouse (scroll safe)
            const mouse = Mouse.create(element);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: 0.15,
                    render: { visible: false },
                },
            });
            Composite.add(engine.world, mouseConstraint);

            // desabilita o hijack do wheel
            const mcMouse = mouseConstraint.mouse as Matter.Mouse;
            type ExtendedMouse = Matter.Mouse & {
                mousewheel?: EventListener;
                mousewheelStart?: EventListener;
                mousewheelMove?: EventListener;
                mousewheelEnd?: EventListener;
            };
            const extendedMouse = mcMouse as ExtendedMouse;
            if (extendedMouse.mousewheel) {
                extendedMouse.element.removeEventListener("wheel", extendedMouse.mousewheel);
            }
            extendedMouse.mousewheel = undefined;
            extendedMouse.mousewheelStart = undefined;
            extendedMouse.mousewheelMove = undefined;
            extendedMouse.mousewheelEnd = undefined;

            // Elements → bodies
            const items = element.querySelectorAll<HTMLElement>("[data-px-throwable-el]");
            const bodies: Matter.Body[] = [];

            items.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const body = Bodies.rectangle(
                    Math.random() * width,
                    Math.random() * -height,
                    rect.width,
                    rect.height,
                    { restitution: 0.4, friction: 0.1 }
                );
                Composite.add(engine.world, body);
                bodies.push(body);
            });

            // rain effect
            bodies.forEach((body, index) => {
                setTimeout(() => {
                    Body.setStatic(body, false);
                }, index * 80);
            });

            // boundaries
            const ground = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
            const leftWall = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
            const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });
            Composite.add(engine.world, [ground, leftWall, rightWall]);

            // quickSetter (performance)
            const setters = Array.from(items).map((el) => ({
                x: gsap.quickSetter(el, "x", "px"),
                y: gsap.quickSetter(el, "y", "px"),
                r: gsap.quickSetter(el, "rotation", "deg"),
            }));

            // tick
            Events.on(runner, "tick", () => {
                if (!isVisible) return;
                bodies.forEach((body, i) => {
                    const set = setters[i];
                    const el = items[i];
                    if (!set || !el) return;
                    const rect = el.getBoundingClientRect();
                    set.x(body.position.x - rect.width / 2);
                    set.y(body.position.y - rect.height / 2);
                    set.r((body.angle * 180) / Math.PI);
                });
            });

            // scroll gravity
            if (options.scrollGravity) {
                let lastScroll = window.scrollY;
                Events.on(runner, "tick", () => {
                    const scrollY = window.scrollY;
                    const diff = scrollY - lastScroll;
                    engine.gravity.y = 0.8 + diff * 0.002;
                    lastScroll = scrollY;
                });
            }

            // resize fix
            const handleResize = () => {
                width = element.offsetWidth;
                height = element.offsetHeight;
                Body.setPosition(ground, { x: width / 2, y: height + 50 });
                Body.setPosition(leftWall, { x: -50, y: height / 2 });
                Body.setPosition(rightWall, { x: width + 50, y: height / 2 });
            };
            window.addEventListener("resize", handleResize);

            cleanup = () => {
                window.removeEventListener("resize", handleResize);
                observer.disconnect();
                Runner.stop(runner);
                Engine.clear(engine);
                Composite.clear(engine.world, false as unknown as boolean);
            };
        })();

        return () => {
            cancelled = true;
            cleanup();
        };
    }, [options.scrollGravity]);

    return sceneRef;
};
