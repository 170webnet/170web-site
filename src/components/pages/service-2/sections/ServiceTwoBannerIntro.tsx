"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

const ServiceTwoBannerIntro = () => {
    const isDarkTheme = useIsDarkRoute();
    // Apply dark background color for dark theme routes
    const sectionBackground = isDarkTheme ? "#000" : "";

    return (
        <div className="pt-[120px] lg:pt-[60px]" style={{ backgroundColor: sectionBackground }}>
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6 items-center">
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                        <div className="[transform:scaleX(-1)_translateX(16%)] max-md:[transform:scaleX(-1)_scale(0.8)_translateX(-12%)] lg:[transform:scaleX(-1)_translateX(-5%)_scale(0.8)] xl:[transform:scaleX(-1)_translateX(16%)]">
                            <video className="w-[900px] dark:invert" loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/170web/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                        <div>
                            <h4 className="font-thunder text-[80px] max-md:text-[64px] font-semibold leading-[1] mb-[35px] tracking-[0.8px] text-[#1E1E1E] dark:text-white">Stand Out in <br /> The Digital World.</h4>
                            <div>
                                <SmartLink className="relative z-[1] inline-block px-[26px] py-[17px] text-[18px] font-medium tracking-[-0.6px] text-[#1E1E1E] bg-white hover:text-white dark:bg-[#1C1D20] dark:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:-z-[1] before:bg-px-orange before:transition-all before:duration-500 hover:before:w-full [&_span]:inline-block [&_span]:ml-[118px] max-md:[&_span]:ml-[45px]" href="/portfolio-1">Explore Project <span>
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
                        <div className="text-center">
                            <h3 className="font-thunder font-bold leading-[1] mx-auto my-0 uppercase tracking-[-0.64px] md:tracking-[-4.64px] text-px-orange text-[85px] sm:text-[130px] md:text-[195px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] min-[1600px]:text-[400px] min-[1701px]:text-[450px] min-[1801px]:text-[464px]">
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
