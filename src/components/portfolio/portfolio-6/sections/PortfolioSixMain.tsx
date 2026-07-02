import PortfolioCard from "@/components/home/design-studio/components/PortfolioCard";
import { portfolioProjects } from "@/data/portfolio-projects";

const PortfolioSixMain = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(4, 9);

    return (
        <div className="pb-80">
            <div className="w-full px-3">
                <div className="px-[35px] max-md:px-0">
                    <div className="flex flex-wrap justify-between items-center pb-40">
                        <div className="mb-[20px]">
                            <span className="text-[18px] font-medium text-px-black dark:text-white">Web & Digital Experiences <br /> Design, Development, Brand Identity</span>
                        </div>
                        <div className="mb-[20px] md:text-right">
                            <span className="text-[18px] font-medium text-px-black dark:text-white">Philadelphia, PA <br /> 2026</span>
                        </div>
                    </div>
                    {/* px-portfolio-wrap: endTrigger for portfolioPanelAnimation's pin —
                        without it the last panel stays pinned over the footer.
                        px-0!: the template CSS styles .px-portfolio-wrap{padding:0 35px},
                        which would double the parent's px-[35px]; we only want the hook. */}
                    <div className="px-portfolio-wrap px-0!">
                        {displayPortfolioData.map((item) => (
                            <PortfolioCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSixMain;