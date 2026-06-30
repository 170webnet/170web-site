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
                className="px-project-6-item is-active border-none pt-[40px]"
                data-index-number={index}
            >
                <div className="w-full px-3">
                    <div className="grid grid-cols-12 gap-x-6 justify-center">
                        <div className="col-span-12 xl:col-span-9">
                            <div className="pb-[40px] border-b border-[rgba(30,30,30,0.08)] dark:border-white/[0.08]">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 lg:col-span-7">
                                        <div className="flex">
                                            <h4 className="mb-0 font-thunder text-[100px] font-semibold uppercase leading-[0.75] tracking-[-0.01em] translate-y-0 lg:translate-y-[10px] text-px-black dark:text-white">
                                                {title}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-5">
                                        <div className="flex justify-between [&_span]:text-[18px] [&_span]:font-medium [&_span]:tracking-[-0.4px] [&_span]:text-px-black dark:[&_span]:text-white">
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
