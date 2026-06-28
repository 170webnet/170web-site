import { SmartLink } from "@/components/common";
import Image from "next/image";

const DigitalStudioHero = () => {
    return (
        <div className="bf-hero-area bf-hero-3-spacing bf-hero-anime-area">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12">
                        <div className="bf-hero-3-wrap">
                            <div className="bf-hero-3-title">
                                <span className="bf-item-anime-md marque inline-block">Craft</span>{" "}
                                <div className="bf-hero-3-title-video hidden xl:inline-block">
                                    <video loop muted autoPlay playsInline>
                                        <source src="https://html.aqlova.com/videos/bfolio/video-4.mp4" type="video/mp4" />
                                    </video>
                                </div>{" "}<span className="bf-item-anime marque inline-block">CREATIVE</span>
                                <div className="spacing pr-140 inline-block p-relative">
                                    <span className="bf-item-anime-md marque inline-block">experien­ce</span>
                                    <Image width={290} height={290} className="bf-hero-3-thumb hidden xl:inline-block img-fluid" src="/assets/img/update/hero/hero-3/thumb-2.jpg" alt="thumb image" />
                                </div>
                                <span className="bf-item-anime marque inline-block">that</span>
                                <div className="spacing pr-35 inline-block p-relative">
                                    <span className="bf-item-anime-md marque inline-block">Shape</span>
                                    <Image width={240} height={160} className="bf-hero-3-thumb-2 hidden xl:inline-block img-fluid" src="/assets/img/update/hero/hero-3/thumb.jpg" alt="thumb" />
                                </div>
                                <span className="bf-item-anime marque inline-block">TOMMOROW.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 lg:col-span-6">
                        <div className="bf-rounded-btn-wrap md:text-right mt-50 mr-185 mb-30">
                            <div className="btn_wrapper inline-block">
                                <SmartLink href="/portfolio-1" className="bf-btn-rounded btn-item">
                                    Discover<br /> Work
                                    <i className="bf-btn-circle-dot"></i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9 lg:col-span-6">
                        <div className="bf-hero-3-dec mb-30">
                            <p>Pixora is a strategic design partner to bold<br />
                                digital brands. We join your team, co-build<br />
                                your thing, and help bring it to the world.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3 max-w-[1860px]">
                <div className="bf-hero-3-video-wrap pt-125">
                    <video loop muted autoPlay playsInline>
                        <source src="https://html.aqlova.com/videos/bfolio/video-3.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioHero;