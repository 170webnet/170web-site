import MinimalPortfolioItem from "../components/MinimalPortfolioItem";
import { portfolioProjects } from "@/data/portfolio-projects";

const MinimalPortfolio = () => {
    // display project items
    const displayProjectData = portfolioProjects.slice(26, 30);

    return (
        <div className="bf-portfolio-area bf-portfolio-sticky-area pt-140 pb-130">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="bf-portfolio-wrap text-center">
                            <h2 className="bf-portfolio-title bf-portfolio-text-sticky mb-0">
                                recent work
                            </h2>
                            <div className="bf-portfolio-wrapper">
                                <div className="grid">
                                    {displayProjectData.map((item) => (
                                        <MinimalPortfolioItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolio;