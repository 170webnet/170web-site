import { portfolioProjects } from "@/data/portfolio-projects";
import SmartLink from "@/components/common/SmartLink";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
    // Get the last 4 projects from the portfolioProjects array
    const displayProjects = portfolioProjects.slice(9, 13);

    return (
        <div className="pt-[40px] pb-[80px] max-[767px]:pb-0">
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6 items-center mb-[25px]">
                    <div className="col-span-12 lg:col-span-8">
                        <div>
                            <h4 className="font-thunder text-[100px] min-[768px]:max-[991px]:text-[75px] max-[767px]:text-[60px] font-semibold leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white mb-0">
                                Featured Projects
                            </h4>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="lg:text-right">
                            <SmartLink
                                className="inline-block uppercase tracking-[-0.06em] leading-none text-[17px] font-medium text-px-black bg-[#fefff8] border border-px-black-2/[0.10] rounded-[70px] px-[35px] py-[13px] transition-all duration-300 hover:text-white hover:border-px-red hover:bg-px-red"
                                href="/portfolio-6"
                            >
                                View All Projects
                            </SmartLink>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6">
                    {/*  Render the last 4 projects using the CreativeSProjectSingle component */}
                    {displayProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
