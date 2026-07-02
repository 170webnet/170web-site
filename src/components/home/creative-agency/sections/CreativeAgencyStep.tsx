import CAStepItem from "../components/CAStepItem";

const STEPS = [
    {
        number: "01",
        title: "Discover\n& Define",
        bg: "#FFCF68",
        desc: "We start by listening — mapping your vision, goals, and the people you want to reach.",
    },
    {
        number: "02",
        title: "Structure\n& Strategy",
        bg: "#FF6E4D",
        desc: "We turn insights into a clear roadmap, so every decision that follows has a reason.",
    },
    {
        number: "03",
        title: "Design\n& Refine",
        bg: "#FFBAE3",
        desc: "We craft the visuals and iterate with you until every detail feels unmistakably right.",
    },
    {
        number: "04",
        title: "Deliver\n& Support",
        bg: "#A9E6FF",
        desc: "We launch your product and stay on to measure, support, and keep it growing.",
    },
];

const CreativeAgencyStep = ({ sectionSpacing = "" }) => {
    return (
        <section className={`bg-[#F7F7F7] py-[90px] md:py-[130px] dark:bg-[#1C1D20] ${sectionSpacing}`}>
            <div className="mx-auto w-full max-w-[1550px] px-5">
                {/* header */}
                <div className="mb-[60px] flex flex-col gap-6 md:mb-[80px] md:flex-row md:items-end md:justify-between">
                    <div>
                        {/* mb-[20px]: arbitrary on purpose — the template's spacing.css defines .mb-5 as 5px !important. */}
                        <span className="mb-[20px] inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-px-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-px-primary" />
                            Our process
                        </span>
                        <h2 className="font-thunder text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-tight text-px-black dark:text-white">
                            How we work
                        </h2>
                    </div>
                    <p className="max-w-[360px] text-[16px] leading-relaxed text-px-body dark:text-white/65 md:text-right">
                        Crafting unique stories for brands — from the first idea all the way to launch day.
                    </p>
                </div>

                {/* the process — a descending staircase of four steps */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {STEPS.map((step, i) => (
                        <CAStepItem key={step.number} {...step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeAgencyStep;
