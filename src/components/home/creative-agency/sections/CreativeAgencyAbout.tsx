import { SmartLink } from "@/components/common";
import { HeroArrowIcon } from "@/svg/ArrowIcons";

const CreativeAgencyAbout = () => {
    return (
        <div className="pt-[80px] lg:pt-[150px] pb-[70px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-10">
                        <div className="mb-[25px] xl:mb-[55px]">
                            <h3 className="font-thunder font-semibold uppercase tracking-[1px] leading-[0.8] text-[80px] md:text-[60px] lg:text-[75px] xl:text-[130px] text-px-black dark:text-white">
                                Let&apos;s create a <br />brand that defies <br />Gravity
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-start-6 col-span-12 xl:col-span-5">
                        <div>
                            <p className="font-normal text-[22px] leading-[1.3] tracking-[-0.04em] text-[#686868] dark:text-white/60">
                                <span className="text-px-black dark:text-white">Our focus is on creating functional,</span> fast, & <br />
                                well-structured websites that meet business goals <br />
                                without unnecessary complexity.
                            </p>
                            <SmartLink
                                className="px-doubble-effect text-px-black dark:text-white"
                                href="/about-us"
                            >
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
