"use client";
import CAStepItem from "../components/CAStepItem";

const STEPS = [
    {
        number: "01",
        title: "Discover \n And define",
        bg: "#FFCF68",
        desc: `We begin with deep
listening understanding
your vision`,
    },
    {
        number: "02",
        title: "Structure \n and Strategy",
        bg: "#FF6E4D",
        desc: `We analyze insights
and build a clear
strategic roadmap`,
    },
    {
        number: "03",
        title: "Design \n and Refine",
        bg: "#FFBAE3",
        desc: `We craft visuals and
iterate to achieve
perfection`,
    },
    {
        number: "04",
        title: "Deliver \n and Support",
        bg: "#A9E6FF",
        desc: `We launch your product
and provide ongoing
support`,
    },
];

const CreativeAgencyStep = ({ sectionSpacing = "" }) => {
    return (
        <div className={`px-step-area relative max-lg:mb-[100px] ${sectionSpacing}`}>

            {/* TOP SECTION — px-step-item is the GSAP pin hook (stepScrollPinAnimation) */}
            <div className="px-step-item flex h-[920px] flex-col justify-end relative z-[9] bg-[#F7F7F7] dark:bg-[#1C1D20]">
                <div className="absolute top-[11%] left-[9%] max-md:left-[-38%] [&_video]:mix-blend-multiply [&_video]:dark:mix-blend-lighten [&_video]:dark:invert">
                    <video loop muted autoPlay playsInline>
                        <source
                            src="https://html.aqlova.com/videos/170web/step-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div>
                    <div className="absolute top-[120px] left-[40px]">
                        <span className="relative font-thunder text-[160px] max-md:text-[110px] font-bold leading-[1.3] uppercase text-px-black dark:text-white">
                            Step
                        </span>
                    </div>
                </div>

                <div className="w-full px-3">
                    <div
                        className="relative z-10 px-[45px] py-[10px] border-y border-px-black-2 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#1C1D20]"
                    >
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-12 lg:col-span-6 xl:col-span-8">
                                <span className="text-[12px] font-medium leading-none uppercase text-px-black dark:text-white">
                                    How we works
                                </span>
                            </div>
                            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                                <span className="inline-block -ml-[30px] text-[12px] font-medium leading-none uppercase text-px-black dark:text-white">
                                    Crafting unique stories for brands
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STEP CARDS */}
            <div className="mr-[60px] max-xl:mt-[30px] max-xl:mr-0">
                <div className="w-full px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        {STEPS.map((step) => (
                            <CAStepItem key={step.number}  {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyStep;
