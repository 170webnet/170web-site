import { SmartLink } from "@/components/common";

const AboutTwoArea = () => {
    return (
        <div className="pt-[120px] pb-[80px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-9">
                        <div className="mb-[70px] px-fade-anim">
                            <p className="mb-0 font-thunder text-[54px] leading-none tracking-[-1px] uppercase text-px-black md:text-[75px] lg:text-[85px] 2xl:text-[100px] dark:text-white">
                                170web Design Agency delivers{" "}
                                <span className="text-px-red">
                                    creative, innovative, and tailored design solutions.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                        <div>
                            <video
                                loop
                                muted
                                autoPlay
                                playsInline
                                className="relative -z-10 w-full md:-mt-[50px] md:-ml-[55px] md:w-[770px] dark:mix-blend-lighten dark:[filter:invert(1)]"
                            >
                                <source src="https://html.aqlova.com/videos/170web/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-5">
                        <div>
                            <div className="px-fade-anim">
                                <p className="mb-[20px] text-[30px] leading-[40px] font-semibold tracking-[-1.2px] text-px-black dark:text-white">
                                    Our approach is simple: we focus on
                                    functionality, speed, and clarity, ensuring that
                                    every project serves aclear purpose without
                                    unnecessary complexity.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <p className="mb-[40px] text-[18px] leading-[28px] font-normal tracking-[-0.36px] text-[#5d5d5d] dark:text-white/65">
                                    Our approach is all about understanding your needs & bringing
                                    your ideas to life without complexity. We thrive turning imaginative
                                    concepts into user friendly digital solutions. Whether it&apos;s a sleek website,
                                    a user-friendly app or a memorable brand identity, we focus on
                                    creating designs that not only.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink
                                    className="inline-block rounded-[50px] bg-px-black px-[36px] py-[17px] text-[15px] font-semibold tracking-[-0.6px] uppercase text-white transition-colors duration-300 hover:bg-px-red dark:bg-white dark:text-px-black dark:hover:bg-px-red dark:hover:text-white"
                                    href="/portfolio-1"
                                >
                                    Portfolio
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwoArea;
