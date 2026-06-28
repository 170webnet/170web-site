const steps = [
    {
        title: "01. Development",
    },
    {
        title: "02. Concept Design",
    },
    {
        title: "03. Implementation",
    },
];

const PortfolioDetailsStep = () => {
    return (
        <div className="px-pd-2-step-ptb px-pd-style pb-70">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div
                            className="px-pd-2-step-heading pb-60 tp_fade_anim"
                            data-delay=".3"
                        >
                            <h3 className="px-pd-2-step-title">
                                Out of love for stylish & functional <br />
                                WP themes and for taking pride to <br />
                                support you.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6">
                    {steps.map((step) => (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4" key={step.title}>
                            <div className="px-pd-2-step-item mb-30">
                                <h4 className="px-pd-2-step-item-title">{step.title}</h4>
                                <span>
                                    A wonderful serenity has taken possession <br />
                                    of my entire soul, like these sweet mornings <br />
                                    which I enjoy with my whole heart.
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsStep;