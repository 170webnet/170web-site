import SmartLink from "@/components/common/SmartLink";

const About = () => {
    return (
        <div className="px-about-3-area pt-120 pb-150">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="px-about-3-text px-fade-anim" data-delay=".3">
                            <h2 className="px-about-3-bigtext">About pixora</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-5">
                        <div className="px-about-3-subtitle-box">
                            <span className="px-section-subtitle">About us</span>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7">
                        <div className="px-about-3-content">
                            <div className="px-fade-anim" data-delay=".3">
                                <p>
                                    Pixora is a creative  studio <br />
                                    based in Portugal, Brazil, and London. <br />
                                    We think like an  <i>agency</i> and <i>produce</i> <br />
                                    like a visuals for brands & agencies.
                                </p>
                            </div>
                            <div className="px-fade-anim" data-delay=".5" data-ease="bounce" data-fade-from="top">
                                <SmartLink className="px-btn-border" href="/about-us">
                                    More About Us
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;