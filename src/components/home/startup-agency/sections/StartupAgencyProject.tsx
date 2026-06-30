import { Plus } from "lucide-react";

import { portfolioProjects } from "@/data/portfolio-projects";
import ProjectSingleCard from "../components/ProjectSingleCard";


const StartupAgencyProject = () => {
    // display project items
    const displayProjectData = portfolioProjects.slice(0,4);

    return (
        <section className="px-project-area pt-100 pb-130">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                {/* TITLE */}
                <div className="px-project-title-wrap mb-80">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-3">
                            <span className="px-section-subtitle pt-40">
                                <i>
                                    <Plus />
                                </i>
                                Our Projects
                            </span>
                        </div>

                        <div className="col-span-12 xl:col-span-9">
                            <div className="px-project-title-box">
                                <h3 className="mb-25 font-sans font-bold leading-[0.83] tracking-[-0.06em] text-px-black dark:text-white text-[55px] md:text-[100px] lg:text-[110px] xl:text-[125px] 2xl:text-[144px] text-effect">
                                    <span>Recent </span>
                                    <span>Case</span>
                                </h3>
                                <p>
                                    We&apos;ve helped businesses across industries achieve their goals.
                                    <br />
                                    Here are some of our recent projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT LIST */}
                <div className="grid grid-cols-12 gap-x-5">
                    {displayProjectData.map((project) => (
                        <ProjectSingleCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartupAgencyProject;
