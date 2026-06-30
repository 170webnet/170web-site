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
        <div className="pb-[100px] max-md:pb-[50px] px-fade-anim">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    {funfacts.map((item) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" key={item.id}>
                            <div
                                className="mb-[45px] p-[45px] pb-[35px] max-xl:p-[30px] max-sm:p-[30px] shadow-[-1px_0_0_0_#E11010] border border-[#1e1e1e0f] dark:border-white/15 tp_fade_anim"
                                data-delay={item.delay}
                            >
                                <h4 className="mb-0 font-thunder font-medium uppercase leading-[0.76] tracking-normal text-px-black dark:text-white text-[70px] min-[1600px]:text-[100px] [&_i]:not-italic">
                                    <AnimatedCounterTwo min={0} max={item.end} />
                                    {item.suffix}
                                </h4>
                                <span className="block text-[18px] font-normal leading-none tracking-[-0.36px] capitalize text-[#5D5D5D] dark:text-white/50">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsFunfact;
