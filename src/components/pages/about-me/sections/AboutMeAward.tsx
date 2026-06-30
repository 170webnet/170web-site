import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";

const AboutMeAward = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

    return (
        <div className="pb-[80px] pt-[80px] xl:pb-[120px] xl:pt-[150px]">
            <div className="container-px">
                {/* Title */}
                <div className="mb-[30px] xl:mb-[45px]">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-9">
                            <h3 className="mb-0 font-thunder text-[80px] font-semibold uppercase leading-[0.8] tracking-[1px] text-px-black dark:text-white md:mb-[25px] md:text-[60px] lg:text-[75px] xl:text-[130px]">
                                Awards & <br /> recognitions.
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Items */}
                <div>
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMeAward;
