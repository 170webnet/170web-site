import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const About = () => {
    return (
        <div>
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="mb-[25px]">
                            <h3 className="text-effect m-0 font-sans text-[130px] font-semibold uppercase leading-[0.92] tracking-[-0.06em] text-white [&_br]:max-[991px]:hidden 2xl:max-[1599px]:text-[100px] xl:max-[1399px]:text-[85px] lg:max-[1199px]:text-[70px] md:max-[991px]:text-[85px] max-[767px]:text-[40px]">
                                Let&apos;s create a <br />brand that defies <br />Gravity
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-start-6 col-span-12 xl:col-span-5">
                        <div>
                            <p className="mb-[15px] font-sans text-[20px] font-medium leading-[1.5] tracking-[-0.02em] text-[#878787] max-[767px]:text-[17px] [&_br]:xl:max-[1399px]:hidden">
                                170web is a creative  studio based in Portugal, <br />
                                Brazil, and London. We think like an  agency and produce <br />
                                like a visuals for brands & agencies.
                            </p>
                            <SmartLink
                                className="px-doubble-effect font-sans text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-white hover:text-white"
                                href="/about-us"
                            >
                                <span>More about us</span>
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
    );
};

export default About;