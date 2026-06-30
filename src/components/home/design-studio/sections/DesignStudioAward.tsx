import { Plus } from "lucide-react";

import AwardItem from "../components/AwardItem";
import { awardData } from "@/data/award-data";


const Award = () => {
    // display award items
    const displayAwardData = awardData.slice(0, 4);

    return (
        <div className="pt-[40px] pb-[80px] xl:pt-[120px] xl:pb-[130px]">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* title */}
                <div className="mb-[30px] xl:mb-[35px]">
                    <div className="grid grid-cols-12 gap-x-6 items-end">
                        <div className="col-span-12 xl:col-span-3">
                            <div>
                                <span className="inline-block pb-[20px] text-[16px] font-medium leading-none tracking-[-0.03em] text-px-black dark:text-white md:pb-[50px] xl:pb-[120px]">
                                    <i className="mr-[10px] inline-grid h-[20px] w-[20px] place-content-center rounded-full bg-[#E8E9E3] text-center text-px-black dark:bg-white/10 dark:text-white">
                                        <Plus />
                                    </i>
                                    Our achievements
                                </span>
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-9">
                            <div>
                                <h3 className="text-effect mb-0 font-thunder text-[150px] font-bold leading-[0.8] tracking-[1px] text-px-red dark:text-white md:text-[230px] lg:text-[300px] xl:text-[330px] 2xl:text-[350px]">
                                    Awards.
                                </h3>
                                <span className="inline-block -mt-[20px] font-thunder text-[60px] font-semibold leading-none tracking-normal text-px-black dark:text-white">
                                    & Recognitions
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table header */}
                <div>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-start-4 xl:col-span-9">
                            <div
                                className="px-fade-anim border-b border-[rgba(10,10,10,0.08)] py-[27px] dark:border-white/10"
                                data-delay=".2"
                            >
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-4 xl:col-start-4 xl:col-span-4">
                                        <div>
                                            <label className="text-[14px] font-normal leading-none tracking-[-0.01em]">
                                                Award
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4">
                                        <div>
                                            <label className="text-[14px] font-normal leading-none tracking-[-0.01em]">
                                                Nomination
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-1">
                                        <div className="md:text-right">
                                            <label className="text-[14px] font-normal leading-none tracking-[-0.01em]">
                                                Year
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* items */}
                            {displayAwardData.map((award, index) => (
                                <AwardItem
                                    key={award.id}
                                    index={index + 1}
                                    item={award}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;
