import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";

const AboutUsAward = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

    return (
        <div className="pt-[60px] pb-[80px] xl:pt-[80px] xl:pb-[120px] 2xl:pt-[140px]">
            <div className="container-px">
                {/* TITLE */}
                <div className="mb-[50px]">
                    <div className="grid grid-cols-12 gap-x-6 items-center">
                        <div className="col-span-12 xl:col-span-4">
                            <h3 className="inline-block text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white pb-[20px] xl:pb-0">
                                Awards
                            </h3>
                        </div>
                        <div className="col-span-12 xl:col-span-8">
                            <h3 className="font-thunder text-[60px] md:text-[75px] xl:text-[100px] font-semibold leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white">
                                Awards & <br /> recognitions.
                            </h3>
                        </div>
                    </div>
                </div>
                {/* AWARDS LIST */}
                <div>
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsAward;
