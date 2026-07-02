import React from "react";

interface CAStepItemProps {
    bg: string;
    number: string;
    desc: string;
    title: string;
    index: number;
}

// Progressive top offset (xl only) → the four cards read as a descending staircase.
const STAIR = ["xl:mt-0", "xl:mt-[50px]", "xl:mt-[100px]", "xl:mt-[150px]"];

const CAStepItem: React.FC<CAStepItemProps> = ({ bg, number, desc, title, index }) => {
    return (
        <div
            className={`flex min-h-[440px] flex-col rounded-[24px] p-7 transition-transform duration-500 ease-out hover:-translate-y-2.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${STAIR[index] ?? "xl:mt-0"}`}
            style={{ backgroundColor: bg }}
        >
            {/* badge */}
            <span className="inline-flex w-fit items-center rounded-full bg-px-black px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                Step {number}
            </span>

            {/* the number — hero of the card */}
            <span className="mt-7 font-thunder-med text-[clamp(6rem,9vw,9rem)] font-medium leading-[0.7] text-px-black">
                {number}
            </span>

            {/* title + description, anchored to the base.
                pt-[40px]: arbitrary on purpose — the template's spacing.css defines .pt-10 as 10px. */}
            <div className="mt-auto pt-[40px]">
                <h3 className="font-thunder-med text-[clamp(1.9rem,2.6vw,2.4rem)] font-medium uppercase leading-[0.92] whitespace-pre-line text-px-black">
                    {title}
                </h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-px-black/70">{desc}</p>
            </div>
        </div>
    );
};

export default CAStepItem;
