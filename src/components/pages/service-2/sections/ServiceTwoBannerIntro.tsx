"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

const ServiceTwoBannerIntro = () => {
    const isDarkTheme = useIsDarkRoute();
    // Apply dark background color for dark theme routes
    const sectionBackground = isDarkTheme ? "#000" : "";

    return (
        <div className="px-inner-service-ptb pt-60" style={{ backgroundColor: sectionBackground }}>
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6 items-center">
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                        <div className="px-inner-service-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/170web/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                        <div className="px-inner-service-heading">
                            <h4 className="px-inner-service-title">Stand Out in <br /> The Digital World.</h4>
                            <div className="px-inner-service-btn">
                                <SmartLink className="px-btn-slide" href="/portfolio-1">Explore Project <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                        <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="px-inner-service-bottom text-center">
                            <h3 className="px-inner-service-big-text">
                                Our Services
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoBannerIntro;