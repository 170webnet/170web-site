import { Plus } from "lucide-react";

import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";


const Award = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

    return (
        <section className="pt-[120px] pb-[130px]">
            <div className="container-px">
                {/* Title Section */}
                <div className="mb-[45px]">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-3">
                            <div>
                                <span className="inline-block pt-[40px] text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white">
                                    <i className="mr-[10px] inline-grid h-5 w-5 place-content-center rounded-full bg-[#E8E9E3] text-px-black [&>svg]:size-3">
                                        <Plus />
                                    </i>
                                    Our Projects
                                </span>
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-9">
                            <div>
                                <h3 className="mb-[25px] font-bold leading-[0.83] tracking-[-0.06em] text-[55px] md:text-[100px] lg:text-[110px] xl:text-[125px] 2xl:text-[144px] text-px-black dark:text-white text-effect words chars splitting">
                                    Awards.
                                </h3>
                                <div className="px-fade-anim" data-delay=".2">
                                    <span className="text-[30px] font-semibold leading-[1] tracking-[-0.07em] text-px-black dark:text-white">
                                        (2016-25©)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Award List */}
                <div>
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Award;
