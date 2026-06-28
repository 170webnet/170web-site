import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioOneItem from "../components/PortfolioOneItem";

const PortfolioOneMain = () => {
    // Portfolio 1 projects
    const portfolios = portfolioProjects.slice(33, 41);

    return (
        <div className="px-project-3-area px-orange-style pt-60 pb-80">
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {portfolios.map((item) => (
                        <PortfolioOneItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioOneMain;