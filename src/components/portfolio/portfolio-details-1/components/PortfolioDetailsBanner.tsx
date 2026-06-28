import Image from "next/image";

const PortfolioDetailsBanner = () => {
    return (
        <div className="px-pd-2-area pb-140">
            <div className="w-full px-3 p-0">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="px-pd-2-banner">
                            <Image className="img-fluid w-auto h-auto" data-speed=".8" src="/assets/img/project/portfolio-details-1/portfolio-details-thumb-1.jpg" alt="portfolio banner" width={1689} height={924} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsBanner;