"use client";
import { portfolio_slider_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const images = [
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-2.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-3.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-4.jpg",
];

const PortfolioDetailsThumb = () => {
    return (
        <div className="px-pd-2-slider-ptb pb-120">
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="px-pd-2-slider-wrapper">
                            <div className="px-pd-2-active">
                                <Swiper
                                    modules={[Pagination]}
                                    {...portfolio_slider_params}
                                >
                                    {images.map((src, index) => (
                                        <SwiperSlide key={`${src}-${index}`}>
                                            <div className="px-pd-2-slider-thumb">
                                                <Image className="img-fluid" width={744} height={401} src={src} alt={`portfolio-thumb-${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="px-pd-2-dot text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThumb;