const services = [
    "UX/UI Design",
    "App Design",
    "Brand Development",
    "Copywriting",
    "Front-end Development",
    "Shopify Development",
];

const PortfolioDetailsAbout = () => {
    return (
        <section className="pt-[160px] pb-[140px]">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="tp_fade_anim" data-delay=".3">
                            <h3 className="uppercase text-[16px] font-medium leading-none text-px-black dark:text-white">
                                About Project
                            </h3>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7">
                        <div>
                            <h3 className="font-sans uppercase text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-px-black dark:text-white mb-[65px]">
                                From 2004, we have earned more than thirty awards,
                                delivering high-quality results and ensuring every
                                project meets the highest standards.
                            </h3>

                            <div className="inline-block">
                                <ul>
                                    {services.map((service, index) => (
                                        <li
                                            key={`${service}-${index}`}
                                            className="relative float-left w-1/2 mb-[14px] pl-[18px] text-[18px] font-medium list-none text-px-black dark:text-white before:content-[''] before:absolute before:top-[10px] before:left-0 before:w-[6px] before:h-[6px] before:rounded-full before:bg-px-black dark:before:bg-white"
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsAbout;
