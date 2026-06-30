"use client";
import Image from "next/image";

const ServiceBanner = () => {
    return (
        <div
            id="top"
            className="bg-[#FFF5F3] dark:bg-transparent pt-[200px] pb-[40px] lg:pb-[80px]"
        >
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 lg:col-span-9 xl:col-span-10">
                        <div>
                            <h3 className="uppercase font-thunder font-bold text-[#1e1e1e] dark:text-white text-[85px] sm:text-[100px] md:text-[190px] xl:text-[200px] 2xl:text-[300px] leading-[0.9] md:leading-[0.75] tracking-normal md:tracking-[-3px] mb-[30px] lg:mb-0 [&_br]:hidden md:[&_br]:inline [&_span]:text-px-orange">
                                Shine in <br /> the <span>digital <br /> world</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 xl:col-span-2">
                        <div className="flex justify-end">
                            <div className="leading-[1] w-full lg:w-auto">
                                <div className="text-right hidden xl:block mb-[20px]">
                                    <Image src="/assets/img/shape/shape-1.png" alt="shape" width={171} height={60} className="dark:invert" />
                                </div>
                                <video
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="object-cover w-full h-full lg:w-[300px] lg:h-[195px] mb-[15px] lg:mb-[10px]"
                                >
                                    <source src="https://html.aqlova.com/videos/170web/banner-4-1.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
