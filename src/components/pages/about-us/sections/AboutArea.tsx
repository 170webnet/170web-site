import { SmartLink } from "@/components/common";

const AboutArea = () => {
    return (
        <div className="border-b border-b-[#1e1e1e0f] dark:border-b-white/10 pt-[120px] pb-[150px]">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="text-center">
                            <h2 className="font-thunder font-semibold uppercase leading-none tracking-[1px] text-px-red dark:text-white text-[80px] min-[576px]:text-[115px] md:text-[155px] min-[992px]:text-[212px] min-[1200px]:text-[255px] min-[1400px]:text-[315px] min-[1600px]:text-[350px] min-[1801px]:text-[410px]">
                                About 170web
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-5">
                        <div>
                            <span className="inline-block font-medium text-[16px] tracking-[-0.03em] pb-[20px] text-px-black dark:text-white">
                                About us
                            </span>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7">
                        <div>
                            <p className="font-sans font-semibold leading-[1.2] tracking-[-2px] text-px-black dark:text-white text-[38px] md:text-[42px] min-[992px]:text-[50px] mb-[30px] min-[992px]:mb-[50px] [&_span]:text-px-red [&_br]:hidden min-[992px]:[&_br]:inline min-[1200px]:[&_br]:hidden min-[1600px]:[&_br]:inline">
                                170web is a creative  studio <br />
                                based in Portugal, Brazil, and London. <br />
                                We think like an  <span>agency</span> and <span>produce</span> <br />
                                like a visuals for brands & agencies.
                            </p>
                            <SmartLink
                                className="inline-block rounded-[50px] px-[36px] py-[17px] text-[15px] font-semibold uppercase tracking-[-0.6px] text-white bg-px-black dark:bg-white dark:text-px-black-2 transition-colors duration-300 hover:bg-px-red hover:text-white dark:hover:bg-px-red dark:hover:text-white"
                                href="/about-us"
                            >
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
