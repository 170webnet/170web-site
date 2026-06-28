import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const ServiceAbout = () => {
    return (
        <div className="px-about-4-area px-about-5-style px-inner-service-2-style pt-120 pb-70">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-10">
                        <div className="px-about-4-title-box mb-55">
                            <h3 className="px-section-title ff-inter px-fade-anim">
                                PASSIONATELY PUSHING THE <br />
                                BOUNDARIES OF CREATIVE EXCELLENCE. <br />
                                REDEFINING POSSIBILITIES IN THE <br />
                                REALMS OF DESIGN.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-start-6 xl:col-span-5">
                        <div className="px-about-4-content">
                            <div className="px-fade-anim">
                                <p>
                                    <span>Our focus is on creating functional,</span> fast, & <br />
                                    well-structured websites that meet business goals <br />
                                    without unnecessary complexity.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-about-4-link px-doubble-effect" href="/about-us">
                                    <span>Discover more</span>
                                    <i>
                                        <TextArrowIcon />
                                        <TextArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;