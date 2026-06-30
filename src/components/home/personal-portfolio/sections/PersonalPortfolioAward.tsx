"use client";
import PersonalPortfolioAwardItem from "../components/PersonalPortfolioAwardItem";
import { awardData } from "@/data/award-data";

const PersonalPortfolioAward = () => {
    const displayAwardItems = awardData.slice(4, 8);

    return (
        <div className="pb-[120px]">
            <div className="container-px">
                <div className="mb-[45px]">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-9">
                            <div>
                                <h3 className="font-thunder mb-[25px] font-semibold uppercase tracking-[1px] leading-[0.8] text-[80px] lg:text-[75px] md:text-[60px] xl:text-[130px] text-px-black dark:text-white">
                                    Awards & <br /> recognitions.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    {displayAwardItems.map((item) => (
                        <PersonalPortfolioAwardItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAward;
