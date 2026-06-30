import SmartLink from "@/components/common/SmartLink";

const About = () => {
    return (
        <div className="pt-[120px] pb-[150px]">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="px-fade-anim" data-delay=".3">
                            <h2 className="font-thunder font-semibold uppercase leading-none tracking-[1px] text-[80px] sm:text-[115px] md:text-[155px] lg:text-[212px] xl:text-[255px] 2xl:text-[315px] min-[1600px]:text-[350px] min-[1801px]:text-[410px] text-px-black dark:text-white">
                                About 170web
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-5">
                        <div>
                            <span className="inline-block font-medium text-[16px] tracking-[-0.03em] text-px-black dark:text-white">
                                About us
                            </span>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7">
                        <div>
                            <div className="px-fade-anim" data-delay=".3">
                                <p className="font-thunder-med font-medium leading-none tracking-[-0.01em] mb-[25px] text-[35px] md:text-[60px] lg:text-[75px] xl:text-[57px] 2xl:text-[70px] min-[1600px]:text-[80px] text-px-black dark:text-white">
                                    170web is a creative  studio <br className="hidden md:inline" />
                                    based in Portugal, Brazil, and London. <br className="hidden md:inline" />
                                    We think like an  <i className="not-italic text-px-red">agency</i> and <i className="not-italic text-px-red">produce</i> <br className="hidden md:inline" />
                                    like a visuals for brands & agencies.
                                </p>
                            </div>
                            <div className="px-fade-anim" data-delay=".5" data-ease="bounce" data-fade-from="top">
                                <SmartLink
                                    className="inline-block font-medium text-[17px] leading-none uppercase tracking-[-0.06em] py-[13px] px-[35px] rounded-[70px] border border-[rgba(30,30,30,0.1)] bg-[#FEFFF8] text-px-black transition-colors duration-300 hover:text-white hover:border-px-red hover:bg-px-red"
                                    href="/about-us"
                                >
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
