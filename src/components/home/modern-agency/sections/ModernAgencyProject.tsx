import { portfolioProjects } from "@/data/portfolio-projects";
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

const Project = () => {
    //display only 5 projects for modern agency portfolio
    const displayProjects = portfolioProjects.slice(13, 18);

    return (
        <div className="pb-[50px]">
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {displayProjects.map((project) => (
                        <div
                            key={project.id}
                            className={project.large ? "col-span-12 xl:col-span-12" : "col-span-12 lg:col-span-6"}
                        >
                            <div
                                className={`max-[991px]:mb-[60px] ${project.large ? "mb-[65px]" : "mb-[75px]"
                                    }`}
                            >
                                <SmartLink href={`/portfolio-details-1/${project.id}`}>
                                    {project.video ? (
                                        <div className="w-full overflow-hidden rounded-[10px] mb-[25px]">
                                            <video
                                                className="w-full"
                                                data-speed="0.1"
                                                loop
                                                muted
                                                autoPlay
                                                playsInline
                                            >
                                                <source
                                                    src={project.video}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="h-[640px] xl:h-[550px] md:h-[550px] lg:h-[500px] max-[767px]:h-[400px] overflow-hidden rounded-[10px] mb-[25px]">
                                            <Image
                                                src={project.image!}
                                                alt={project.title}
                                                width={905}
                                                height={680}
                                                className="w-full h-full object-cover rounded-[10px]"
                                            />
                                        </div>
                                    )}
                                </SmartLink>

                                <div className="flex justify-between items-start max-[767px]:flex-wrap lg:max-[1199px]:flex-wrap">
                                    <div className="max-[1199px]:mb-[15px]">
                                        <h4 className="text-[26px] xl:text-[22px] lg:text-[18px] font-semibold leading-[1.2] mb-0 tracking-[-0.05em] pr-[30px] lg:pr-[20px] max-[767px]:pr-0 max-[767px]:mb-[15px] text-px-black dark:text-white">
                                            <SmartLink
                                                href={`/portfolio-details-1/${project.id}`}
                                                className="hover:text-px-red"
                                            >
                                                <span>{project.title}</span>
                                            </SmartLink>
                                        </h4>
                                        {project.description && (
                                            <p className="text-[16px] lg:text-[14px] font-normal leading-[1.5] mb-0 pr-[20px] tracking-[-0.03em] text-[#6b7280] dark:text-white/60">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex-[0_0_auto]">
                                        {project.categories.map((cat) => (
                                            <span
                                                key={`${project.id}-${cat}`}
                                                className="inline-block text-[12px] lg:text-[11px] font-semibold py-[2px] px-[19px] xl:px-[14px] lg:px-[12px] rounded-[32px] uppercase transition-all duration-300 text-px-black dark:text-white border border-[rgba(30,30,30,0.08)] dark:border-white/10 hover:text-px-white hover:border-px-red hover:bg-px-red [&:not(:first-child)]:ml-[5px] lg:[&:not(:first-child)]:ml-[2px]"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
