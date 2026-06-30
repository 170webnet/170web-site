import PortfolioDetailsTwoBannerTwo from "../components/PortfolioDetailsTwoBannerTwo";
import PortfolioDetailsWorkReview from "../components/PortfolioDetailsWorkReview";
import PortfolioDetailsTwoBanner from "../components/PortfolioDetailsTwoBanner";
import PortfolioDetailsTwoThumb from "../components/PortfolioDetailsTwoThumb";
import PortfolioDetailsSlider from "../components/PortfolioDetailsSlider";
import PortfolioDetailsAbout from "../components/PortfolioDetailsAbout";
import { portfolioProjects } from "@/data/portfolio-projects";
import { IdProps } from "@/types/custom-dt";
import { TextArrowIcon } from "@/svg";
import Link from "next/link";

const PortfolioDetailsVarientTwo = ({ id }: IdProps) => {
    const portfolio = portfolioProjects.find((item) => item.id === Number(id));

    return (
        <>
            <div className="pt-[190px] pb-[50px]">
                <div className="mx-auto w-full max-w-[1630px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 lg:col-span-12">
                            <div className="mb-[90px] tp_fade_anim" data-delay=".3">
                                <h3 className="font-thunder-med text-[140px] leading-none tracking-[-2px] text-px-black dark:text-white">{portfolio?.title}</h3>
                            </div>
                            <div className="flex justify-between tp_fade_anim" data-delay=".5">
                                <div className="mb-[30px] max-[767px]:pb-[20px]">
                                    <span className="inline-block mb-[10px] text-[16px] font-semibold leading-none text-black/70 dark:text-white/50">Client</span>
                                    <h6 className="text-[20px] font-semibold text-px-black dark:text-white">{portfolio?.client}</h6>
                                </div>
                                <div className="mb-[30px] max-[767px]:pb-[20px]">
                                    <span className="inline-block mb-[10px] text-[16px] font-semibold leading-none text-black/70 dark:text-white/50">Expertise</span>
                                    <h6 className="text-[20px] font-semibold text-px-black dark:text-white">
                                        {portfolio?.categories?.join(", ")}
                                    </h6>
                                </div>
                                <div className="mb-[30px] max-[767px]:pb-[20px]">
                                    <span className="inline-block mb-[10px] text-[16px] font-semibold leading-none text-black/70 dark:text-white/50">Duration</span>
                                    <h6 className="text-[20px] font-semibold text-px-black dark:text-white">{portfolio?.duration}</h6>
                                </div>
                                <div className="mb-[30px] max-[767px]:pb-[20px]">
                                    <span className="inline-block mb-[10px] text-[16px] font-semibold leading-none text-black/70 dark:text-white/50">Designer</span>
                                    <h6 className="text-[20px] font-semibold text-px-black dark:text-white">{portfolio?.designer}</h6>
                                </div>
                                <div className="mb-[30px]">
                                    <Link className="inline-block uppercase text-[16px] font-semibold tracking-[-0.16px] rounded-[24px] pt-[10px] pr-[25px] pb-[9px] pl-[25px] text-px-black border border-px-black hover:text-white hover:bg-px-black dark:bg-[#1C1D20] dark:text-white dark:hover:bg-px-red" href="#">Visit Site <span className="inline-block ml-[15px] -translate-y-[2px]">
                                        <TextArrowIcon />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioDetailsTwoBanner />
            <PortfolioDetailsAbout />
            <PortfolioDetailsTwoBannerTwo />
            <PortfolioDetailsWorkReview />
            <PortfolioDetailsTwoThumb />
            <PortfolioDetailsSlider />

            {/* portfolio details next prv start  */}
            <div className="pt-[40px] pb-[120px]">
                <div className="mx-auto w-full max-w-[1230px] px-3">
                    <div className="grid grid-cols-12 gap-x-6 md:justify-center">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="px-pd-4-np-box hover-reveal-item relative">
                                <Link href="#" className="relative z-[5] text-center">
                                    <span className="block uppercase font-thunder text-[50px] font-medium mb-[30px] text-black/20 dark:text-white/20">next</span>
                                    <h4 className="uppercase font-thunder text-[80px] font-semibold leading-none text-px-black dark:text-white">merit global</h4>
                                    <p className="tracking-[-0.4px] text-[20px] font-medium leading-[30px] text-black/20 dark:text-white/20">Research, UX, UI Design</p>
                                </Link>
                                <div className="tp-award-reveal-img"
                                    style={{ backgroundImage: "url(/assets/img/project/portfolio-details-2/portfolio-details-np.jpg)" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- portfolio details next prv end -- */}
        </>
    );
};

export default PortfolioDetailsVarientTwo;
