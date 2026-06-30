import Link from "next/link";

interface Props {
  project: {
    id: number;
    title: string;
    category: string;
    img: string;
  };
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}

const PersonalPortfolioProjectItem: React.FC<Props> = ({
  project,
  index,
  hoverIndex,
  setHoverIndex,
}) => {
  const isActive = hoverIndex === null || hoverIndex === index;

  // Light: inactive #d3d3d3 → active px-black. Dark: inactive #1C1D20 → active white.
  const activeText = isActive
    ? "text-px-black dark:text-white"
    : "text-[#d3d3d3] dark:text-[#1C1D20]";

  return (
    <div
      className={`px-project-6-item border-b border-dashed border-b-[rgba(30,30,30,0.09)] pt-[70px] pb-[30px] dark:border-b-[rgba(255,255,255,0.09)] ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      data-index-number={index}
    >
      <Link href="/portfolio-details-2">
        <div className="w-full px-3">
          <div className="grid grid-cols-12 gap-x-6 justify-center">
            <div className="col-span-12 xl:col-span-9">
              <div className="grid grid-cols-12 gap-x-6 items-center">
                <div className="col-span-12 lg:col-span-7">
                  <div className="flex">
                    <span
                      className={`pt-[15px] pr-[10px] text-[14px] font-medium leading-none tracking-[-0.01em] uppercase transition-[color] duration-300 ${activeText}`}
                    >
                      ({String(project.id).padStart(2, "0")})
                    </span>
                    <h4
                      className={`mb-0 font-thunder text-[75px] leading-[0.75] font-semibold tracking-[-0.01em] uppercase transition-[color] duration-300 md:text-[100px] 2xl:text-[120px] min-[1600px]:text-[150px] min-[1701px]:text-[180px] ${activeText}`}
                    >
                      {project.title}
                    </h4>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <div className="lg:text-right">
                    <p
                      className={`text-[18px] font-medium leading-none tracking-[-0.01em] transition-[color] duration-300 ${activeText}`}
                    >
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonalPortfolioProjectItem;
