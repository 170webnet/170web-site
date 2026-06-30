import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(4, 9);

    return (
        // px-portfolio-area: zero-style marker kept as wrapper hook
        <div className="px-portfolio-area pt-[75px]">
            <div className="w-full px-3">
                {/* px-portfolio-wrap: GSAP endTrigger target — keep class */}
                <div className="px-portfolio-wrap px-[35px] max-[767px]:px-0">
                    {displayPortfolioData.map((item) => (
                        <PortfolioCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
