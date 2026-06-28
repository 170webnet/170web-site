"use client";
import DigitalStudioProjectItem from "../components/DigitalStudioProjectItem";
import { portfolioProjects } from "@/data/portfolio-projects";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const DigitalStudioProject = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(30, 33);

    // Determine if the current route uses dark mode
    const isDarkTheme = useIsDarkRoute();

    // Apply conditional text color based on theme
    const textColor = isDarkTheme ? "text-white" : "";


    return (
        <div className="bf-portfolio-3-area pt-160 pb-75 title-box">
            <div className="w-full mx-auto max-w-[1650px] px-3">
                <div className="bf-portfolio-3-title-wrap mb-120">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-8">
                            <div className="bf-portfolio-3-title-box">
                                <h2 className="bf-portfolio-3-sectitle mb-45">
                                    <span className="tp-text-right-scroll inline-block reveal-text">
                                        recent
                                    </span>{" "}
                                    <br />
                                    <span className="reveal-text">work</span>
                                </h2>
                                <p className={textColor}>
                                    In the creative wilderness,<br />
                                    our work becomes the beacon<br />
                                    clients grow to love.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-4">
                            <div className="bf-portfolio-3-shape mt-20">
                                <Image className="max-w-full h-auto" width={442} height={296} src="/assets/img/update/portfolio/port-3/cat.png" alt="cat" />
                                <div className="bf-portfolio-3-btn pt-90 text-left md:text-right">
                                    <SmartLink
                                        href="/portfolio-1"
                                        className="tp-btn tp-btn-border tp-btn-xl inline-flex items-center"
                                    >
                                        <span>
                                            <span className="text-1">Explore Work</span>
                                            <span className="text-2">Explore Work</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bf-portfolio-3-item-wrap">
                    {displayPortfolioData.map((project) => (
                        <DigitalStudioProjectItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioProject;