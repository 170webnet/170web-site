import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const ServiceAbout = () => {
    return (
        <div className="pt-[120px] pb-[70px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-10">
                        <div className="mb-[55px]">
                            <h3 className="px-fade-anim font-sans text-[50px] max-md:text-[30px] leading-[1.1] tracking-normal font-semibold uppercase text-px-black dark:text-white">
                                PASSIONATELY PUSHING THE <br className="min-[992px]:max-[1399px]:hidden" />
                                BOUNDARIES OF CREATIVE EXCELLENCE. <br className="min-[992px]:max-[1399px]:hidden" />
                                REDEFINING POSSIBILITIES IN THE <br className="min-[992px]:max-[1399px]:hidden" />
                                REALMS OF DESIGN.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-start-6 xl:col-span-5">
                        <div>
                            <div className="px-fade-anim">
                                <p className="font-normal text-[22px] leading-[1.3] tracking-[-0.04em] text-[#686868] dark:text-white/60">
                                    <span className="text-px-black dark:text-white">Our focus is on creating functional,</span> fast, & <br />
                                    well-structured websites that meet business goals <br />
                                    without unnecessary complexity.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink
                                    className="group inline-flex items-center text-px-black dark:text-white"
                                    href="/about-us"
                                >
                                    <span className="relative overflow-hidden before:content-[''] before:absolute before:block before:bottom-[0.2em] before:left-0 before:w-full before:h-px before:bg-current before:transition-transform before:duration-500 before:ease-[cubic-bezier(.59,.23,.22,.96)] after:content-[''] after:absolute after:block after:bottom-[0.2em] after:left-[-1rem] after:w-full after:h-px after:bg-current after:-translate-x-full after:transition-transform after:duration-500 after:ease-[cubic-bezier(.59,.23,.22,.96)] group-hover:before:translate-x-[calc(100%+1rem)] group-hover:after:translate-x-[1rem]">
                                        Discover more
                                    </span>
                                    <i className="relative overflow-hidden w-[14px] h-[14px] inline-flex ml-[7px] [&>svg]:absolute [&>svg]:transition-all [&>svg]:duration-200 [&>svg]:ease-out [&>svg:first-child]:bottom-[-1px] [&>svg:first-child]:left-[1px] [&>svg:first-child]:-translate-y-[2px] [&>svg:last-child]:left-[-12px] [&>svg:last-child]:bottom-[-12px] [&>svg:last-child]:opacity-0 group-hover:[&>svg:first-child]:translate-x-[16px] group-hover:[&>svg:first-child]:-translate-y-[16px] group-hover:[&>svg:last-child]:opacity-100 group-hover:[&>svg:last-child]:translate-x-[13px] group-hover:[&>svg:last-child]:-translate-y-[13px]">
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
