import { SmartLink } from "@/components/common";

const AboutArea = () => {
    return (
        <div className="px-about-3-area px-inner-about-style pt-120 pb-150">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="px-about-3-text text-center">
                            <h2 className="px-about-3-bigtext">About 170web</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-5">
                        <div className="px-about-3-subtitle-box">
                            <span className="px-section-subtitle">About us</span>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7">
                        <div className="px-about-3-content">
                            <p>
                                170web is a creative  studio <br />
                                based in Portugal, Brazil, and London. <br />
                                We think like an  <span>agency</span> and <span>produce</span> <br />
                                like a visuals for brands & agencies.
                            </p>
                            <SmartLink className="px-btn-black" href="/about-us">
                                More About Us
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;