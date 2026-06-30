"use client";
import PersonalPortfolioProjectItem from "../components/PersonalPortfolioProjectItem";
import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Netrix", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-6/project-1.jpg" },
  { id: 2, title: "Easy Culi", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-1.jpg" },
  { id: 3, title: "Space Needle", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-2.jpg" },
  { id: 4, title: "Fabric", category: "Design Direction, UX/UI Design", img: "/assets/img/project/project-3.jpg" },
];

const PersonalPortfolioProject = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="pt-[40px] xl:pt-[120px]">
      <div className="px-project-6-wrap relative">

        {/* LIST */}
        <div>
          {projects.map((project, index) => (
            <PersonalPortfolioProjectItem
              key={project.id}
              project={project}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          ))}
        </div>

        {/* IMAGE PREVIEW */}
        <div className="px-project-6-img-wrap pointer-events-none absolute top-0 left-0 z-[3] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0">
          <div className="px-project-6-img-slider flex flex-col">
            {projects.map((project) => (
              <Image
                key={project.id}
                src={project.img}
                alt={project.title}
                width={330}
                height={330}
                className="h-[330px] w-[330px] object-cover object-center"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPortfolioProject;
