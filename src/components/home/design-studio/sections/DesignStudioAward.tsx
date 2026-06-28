
import AwardItem from "../components/AwardItem";
import { awardData } from "@/data/award-data";
import { PlusIcon } from "@/svg";

const Award = () => {
    // display award items
    const displayAwardData = awardData.slice(0, 4);
 
    return (
        <div className="px-award-2-area px-award-style-2 pt-120 pb-130">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* title */}
                <div className="px-award-title-wrap mb-35">
                    <div className="grid grid-cols-12 gap-x-6 items-end">
                        <div className="col-span-12 xl:col-span-3">
                            <div className="px-award-subtitle-box">
                                <span className="px-section-subtitle pb-120">
                                    <i>
                                        <PlusIcon />
                                    </i>
                                    Our achievements
                                </span>
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-9">
                            <div className="px-award-content">
                                <h3 className="px-section-title ff-thunder mb-0 text-effect">
                                    Awards.
                                </h3>
                                <span>& Recognitions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table header */}
                <div className="px-award-wrapper">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-start-4 xl:col-span-9">
                            <div className="px-award-item px-fade-anim" data-delay=".2">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-4 xl:col-start-4 xl:col-span-4">
                                        <div className="px-award-label">
                                            <label>Award</label>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4">
                                        <div className="px-award-label">
                                            <label>Nomination</label>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-1">
                                        <div className="px-award-label md:text-right">
                                            <label>Year</label>
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
