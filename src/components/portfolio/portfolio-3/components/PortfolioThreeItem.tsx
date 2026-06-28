import { SmartLink } from "@/components/common";

interface portfolioIDatatem {
    id: number,
    title: string,
    service: string,
    year: string,
}
interface portfolioIDatatemProps extends portfolioIDatatem {
    index: number,
}


const PortfolioThreeItem: React.FC<portfolioIDatatemProps> = ({ id, title, service, year, index }) => {
    return (
        <SmartLink href="/portfolio-details-1">
            <div
                className="px-project-6-item is-active"
                data-index-number={index}
            >
                <div className="w-full px-3">
                    <div className="grid grid-cols-12 gap-x-6 justify-center">
                        <div className="col-span-12 xl:col-span-9">
                            <div className="px-project-inner-wrapper">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 lg:col-span-7">
                                        <div className="px-project-6-content flex">
                                            <h4 className="px-project-6-title">
                                                {title}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-5">
                                        <div className="px-project-inner-wrap-content flex justify-between">
                                            <span>{service}</span>
                                            <span>{year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SmartLink>
    );
};

export default PortfolioThreeItem;