import { SmartLink } from "@/components/common";
import { HeroArrowIcon } from "@/svg/ArrowIcons";

const CreativeAgencyAbout = () => {
    return (
        <div className="px-about-4-area px-about-5-style pt-150 pb-70">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-10">
                        <div className="px-about-4-title-box mb-55">
                            <h3 className="px-section-title ff-thunder fs-130">
                                Let&apos;s create a <br />brand that defies <br />Gravity
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-start-6 col-span-12 xl:col-span-5">
                        <div className="px-about-4-content">
                            <p>
                                <span>Our focus is on creating functional,</span> fast, & <br />
                                well-structured websites that meet business goals <br />
                                without unnecessary complexity.
                            </p>
                            <SmartLink className="px-about-4-link px-doubble-effect" href="/about-us">
                                <span>Discover more</span>
                                <i>
                                    <HeroArrowIcon/>
                                    <HeroArrowIcon/>
                                </i>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyAbout;