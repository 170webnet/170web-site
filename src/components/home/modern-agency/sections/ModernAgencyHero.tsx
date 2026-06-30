import { ScrollDownArrowTwoIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "@/components/common";

const Hero = () => {
    return (
        <div id="hero" className="pt-[145px] max-[1199px]:pb-[80px]">
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                        <div className="relative z-[3] max-[991px]:mb-[40px]">
                            <p className="mb-[30px] font-sans text-[40px] font-semibold leading-[1.1] tracking-[-0.07em] text-px-black dark:text-white max-[767px]:mb-[20px] max-[767px]:text-[37px]">
                                We help leaders take <br className="max-[767px]:hidden" />
                                transformational steps toward <br className="max-[767px]:hidden" />
                                a <span className="text-px-red">radically relevant</span> brand.
                            </p>
                            <div className="smooth">
                                <ScrollLink
                                    className="inline-grid h-[50px] w-[50px] place-content-center rounded-full border border-[#0a0a0a1a] text-center text-px-black transition-colors duration-300 hover:border-px-red hover:bg-px-red hover:text-white dark:border-white/10 dark:text-white"
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
                            <div className="leading-[1] max-[1199px]:mb-0 max-[991px]:mb-[30px] max-[991px]:inline-table max-[991px]:w-full">
                                <video
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="mb-[10px] h-[195px] w-[300px] object-cover max-[1199px]:mt-[40px] max-[1199px]:h-full max-[1199px]:w-full max-[991px]:mb-[15px] max-[767px]:mt-0"
                                >
                                    <source src="https://html.aqlova.com/videos/170web/project-2.mp4" type="video/mp4" />
                                </video>
                                <div className="flex items-center justify-between">
                                    <span className="font-sans text-[15px] font-medium uppercase tracking-[-0.04em] text-px-black dark:text-white">
                                        (Play Reel)
                                    </span>
                                    <span className="font-sans text-[15px] font-medium uppercase tracking-[-0.04em] text-px-black dark:text-white">
                                        00:00:32
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="text-center">
                            <h2 className="translate-x-0 font-sans text-[95px] font-extrabold uppercase leading-[1] tracking-[-0.02em] text-px-black dark:text-white min-[768px]:-translate-x-[10px] min-[768px]:text-[190px] min-[992px]:-translate-x-[15px] min-[992px]:text-[260px] min-[1200px]:-translate-x-[10px] min-[1200px]:text-[310px] min-[1400px]:text-[380px] min-[1600px]:text-[440px] min-[1701px]:-translate-x-[27px] min-[1701px]:text-[474px] min-[1801px]:text-[500px]">
                            170web
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
