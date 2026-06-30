import { portfolioProjects } from "@/data/portfolio-projects";
import { GeometricFlowerTwoIcon } from "@/svg/ShapeIcons";
import CAProjectItem from "../components/CAProjectItem";
import { SmartLink } from "@/components/common";

const CreativeAgencyProject = () => {
    //display projects items
    const projectItems = portfolioProjects.slice(18, 26);

    return (
        <div className="pt-[80px] pb-0 md:pt-[150px] md:pb-0 lg:pb-[70px]">
            <div className="mx-auto w-full max-w-[1870px] px-3">

                {/* TITLE */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="relative mb-[65px]">
                            <h2 className="text-center uppercase font-thunder font-bold leading-none text-px-black dark:text-white text-[110px] md:text-[130px] lg:text-[173px] xl:text-[210px] 2xl:text-[260px] min-[1600px]:text-[295px] min-[1701px]:text-[315px] min-[1801px]:text-[335px] min-[1901px]:text-[345px] [&_span]:inline-block [&_span]:font-[inherit] [&_span]:tracking-normal">
                                Recent <span className="text-px-primary">projects</span>
                            </h2>

                            <div className="hidden md:block absolute right-[13%] bottom-[50%] scale-[0.7] xl:bottom-[4%] xl:scale-100">
                                <SmartLink
                                    className="px-btn-zikzak relative text-center inline-block uppercase font-thunder font-bold text-[30px] leading-[0.93] text-white"
                                    href="/portfolio-4"
                                >
                                    <span className="btn-text absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2">
                                        All <br /> project
                                    </span>
                                    <i className="zikzak-bg inline-block">
                                        <GeometricFlowerTwoIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-12 gap-x-6">
                    {projectItems.map((project) => (
                        <CAProjectItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyProject;
