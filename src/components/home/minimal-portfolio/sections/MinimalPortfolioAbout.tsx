"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const MinimalPortfolioAbout = () => {
    // Check if current route is a dark-themed page 
    const isDarkTheme = useIsDarkRoute();
    const aboutClasses = {
        // Dynamically set background color based on theme
        sectionBg: isDarkTheme ? "#000" : "#f8f8f9",
    }
    
    return (
        <div className="bf-about-area pt-155 pb-120" style={{ backgroundColor: aboutClasses.sectionBg }}>
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="bf-about-title-wrap">
                            <h2 className="bf-section-title reveal-text mb-50">We&apos;re Creative Digital Studio Turning<br />
                                Ideas into Impactful Experiences<br />
                                Through Strategy into Digital</h2>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <div className="bf-about-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/bfolio/about-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <div className="bf-about-content">
                            <p className="bf-about-dec mb-50">We transform complex digital challenges into elegant,
                                functional solutions by prioritizing clarity and purpose.
                                Exceptional digital experiences start with understanding
                                your unique business objectives audience needs.</p>
                            <div className="grid grid-cols-12 gap-x-[20px]">
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image className="w-full max-w-full h-auto" width={259} height={269} src="/assets/img/update/about/thumb.jpg" alt="About image" />
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image className="w-full max-w-full h-auto" width={259} height={269} src="/assets/img/update/about/thumb-2.jpg" alt="About image 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioAbout;