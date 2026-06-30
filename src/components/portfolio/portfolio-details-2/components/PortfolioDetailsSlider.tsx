"use client";
import { portfolio_slider_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const sliderImages = [
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-6.jpg",
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-7.jpg",
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-8.jpg",
];

const headingLines = [
    { text: "stay", className: "tp-text-right-scroll" },
    { text: "longer", className: "tp-text-left-scroll" },
    { text: "with smart", className: "tp-text-right-scroll" },
    { text: "ux.", className: "tp-text-left-scroll" },
];

const PortfolioDetailsSlider = () => {
    return (
        <section className="pb-[110px]">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    <div className="col-span-12 xl:col-span-9">
                        <div className="title-box text-center mb-[120px]">
                            <h4 className="font-thunder uppercase text-[130px] font-semibold leading-[0.83] tracking-[1px] text-px-black dark:text-white max-[1199px]:text-[75px] max-[991px]:text-[60px] max-[767px]:text-[80px]">
                                {headingLines.map((item, index) => (
                                    <span
                                        key={`${item.text}-${index}`}
                                        className={`${item.className} tp_text_invert_2`}
                                    >
                                        {item.text}
                                        <br />
                                    </span>
                                ))}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className="mx-[-220px]">
                <div>
                    <Swiper
                        modules={[Pagination]}
                        {...portfolio_slider_params}
                    >
                        {sliderImages.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`}>
                                <div className="rounded-[10px] overflow-hidden">
                                    <Image width={759} height={409} className="max-w-full h-auto"
                                        src={image}
                                        alt={`Portfolio slider preview ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsSlider;
