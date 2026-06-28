import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioTwoItem from "../components/PortfolioTwoItem";

const PortfolioTwoMain = () => {
    // Portfolio 2 projects
    const portfolios = portfolioProjects.slice(41, 46);

    return (
        <div
            id="project"
            className="px-project-4-area px-project-4-style px-orange-style pb-60"
        >
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {portfolios.map((item, index) => (
                        <PortfolioTwoItem
                            key={item.id}
                            {...item}
                            isFirstItem={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoMain;