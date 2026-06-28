import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";

const funfacts = [
    {
        id: 1,
        end: 240,
        suffix: "+",
        label: "Clients Across the world",
        delay: ".3",
    },
    {
        id: 2,
        end: 19,
        suffix: "+",
        label: "Years of Experience",
        delay: ".5",
    },
    {
        id: 3,
        end: 236,
        suffix: "+",
        label: "Successfully projects done",
        delay: ".7",
    },
    {
        id: 4,
        end: 98,
        suffix: "%",
        label: "Clients satisfied & retention",
        delay: ".8",
    },
];
const AboutUsFunfact = () => {
    return (
        <div className="ar-funfact-area px-funfact-inner-style pb-100 px-fade-anim">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    {funfacts.map((item) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" key={item.id}>
                            <div className="ar-funfact-item mb-45 tp_fade_anim"
                                data-delay={item.delay}
                            >
                                <h4>
                                    <AnimatedCounterTwo min={0} max={item.end} />
                                    {item.suffix}
                                </h4>
                                <span>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsFunfact;