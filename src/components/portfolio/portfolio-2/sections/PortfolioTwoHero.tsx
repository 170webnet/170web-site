import { ScrollDownArrowTwoIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "@/components/common";

const PortfolioTwoHero = () => {
    return (
        <div id="top" className="pt-[145px] pb-[80px] xl:pb-0">
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                        <div className="relative z-[3] mb-[40px] lg:mb-0">
                            <p className="mb-[20px] md:mb-[30px] text-[37px] md:text-[40px] font-semibold leading-[1.1] tracking-[-0.07em] text-px-black dark:text-white [&_br]:hidden md:[&_br]:inline">
                                We help leaders take <br />
                                transformational steps toward <br />
                                a <span className="text-px-orange">radically relevant</span> brand.
                            </p>
                            <div className="smooth">
                                <ScrollLink
                                    className="inline-grid h-[50px] w-[50px] place-content-center rounded-full border border-px-black/10 text-center text-px-black transition-all hover:border-px-red hover:bg-px-red hover:text-white dark:border-white/10 dark:text-white"
                                    target="#project"
                                >
                                    <span>
                                        <ScrollDownArrowTwoIcon />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                        <div className="flex justify-end">
                            <div className="w-full leading-[1] max-[991px]:mb-[30px] max-[991px]:inline-table lg:w-auto">
                                <video
                                    className="mb-[15px] h-full w-full object-cover min-[768px]:max-[1199px]:mt-[40px] lg:mb-[10px] lg:h-[195px] lg:w-[300px]"
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                >
                                    <source src="https://html.aqlova.com/videos/170web/banner-4-1.mp4" type="video/mp4" />
                                </video>
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] font-medium uppercase tracking-[-0.04em] text-px-black dark:text-white">(Play Reel)</span>
                                    <span className="text-[15px] font-medium uppercase tracking-[-0.04em] text-px-black dark:text-white">00:00:32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="text-center">
                            <h2 className="-translate-x-0 text-[95px] font-extrabold uppercase leading-[1] tracking-[-0.02em] text-px-black md:-translate-x-[10px] md:text-[190px] lg:-translate-x-[15px] lg:text-[260px] xl:-translate-x-[10px] xl:text-[310px] 2xl:text-[380px] min-[1600px]:text-[440px] min-[1700px]:text-[474px] min-[1801px]:-translate-x-[27px] min-[1801px]:text-[500px] dark:text-white">
                                170web
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoHero;
