import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";

const AboutMeAward = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

    return (
        <div className="px-award-area pt-150 pb-120">
            <div className="container-px">
                {/* Title */}
                <div className="px-award-title-wrap mb-45">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-9">
                            <div className="px-award-content">
                                <h3 className="px-section-title ff-thunder fs-130 mb-25">
                                    Awards & <br /> recognitions.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Items */}
                <div className="px-award-wrapper">
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMeAward;