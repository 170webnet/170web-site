"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const ServiceBanner = () => {
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const sectionBackground = isDarkTheme ? "" : "#FFF5F3";

    return (
        <div id="top" className="px-inner-service-2-ptb pt-200 pb-80" style={{ backgroundColor: sectionBackground }}>
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 lg:col-span-9 xl:col-span-10">
                        <div className="px-inner-service-2-heading">
                            <h3 className="px-inner-service-2-title">
                                Shine in <br /> the <span>digital <br /> world</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3 xl:col-span-2">
                        <div className="px-hero-4-video-wrap flex justify-end">
                            <div className="px-hero-4-video">
                                <div className="text-right hidden xl:block mb-20">
                                    <Image src="/assets/img/shape/shape-1.png" alt="shape" width={171} height={60} />
                                </div>
                                <video loop muted autoPlay playsInline>
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