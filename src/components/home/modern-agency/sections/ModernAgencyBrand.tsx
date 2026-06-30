/* eslint-disable @next/next/no-img-element */
"use client";
import { brand_slider_two_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "@/data/brand-data";

const Brand = () => {
    return (
        <section className="pt-[40px] pb-[80px] md:pt-[80px] xl:pt-[90px] xl:pb-0">
            <div className="container-px">
                <div>
                    <div>
                        <Swiper
                            modules={[FreeMode, Autoplay]}
                            {...brand_slider_two_params}
                        >
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id} className="w-auto!">
                                    <div className="grid min-h-[180px] min-w-[240px] place-content-center rounded-[14px] border border-white/[0.09] bg-transparent p-[20px] text-center max-lg:mb-[5px]">
                                        <img
                                            src={brand.image}
                                            alt={brand.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
