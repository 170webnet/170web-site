/* eslint-disable @next/next/no-img-element */
"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { brand_slider_two_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const lightBrandLogos = [
    { id: 1, logo: "/assets/img/brand/brand-1-1.png", alt: "Brand 1" },
    { id: 2, logo: "/assets/img/brand/brand-1-2.png", alt: "Brand 2" },
    { id: 3, logo: "/assets/img/brand/brand-1-3.png", alt: "Brand 3" },
    { id: 4, logo: "/assets/img/brand/brand-1-4.png", alt: "Brand 4" },
    { id: 5, logo: "/assets/img/brand/brand-1-5.png", alt: "Brand 5" },
    { id: 6, logo: "/assets/img/brand/brand-1-6.png", alt: "Brand 6" },
    { id: 7, logo: "/assets/img/brand/brand-1-1.png", alt: "Brand 7" },
    { id: 8, logo: "/assets/img/brand/brand-1-2.png", alt: "Brand 8" },
    { id: 9, logo: "/assets/img/brand/brand-1-3.png", alt: "Brand 9" },
    { id: 10, logo: "/assets/img/brand/brand-1-4.png", alt: "Brand 10" },
    { id: 11, logo: "/assets/img/brand/brand-1-5.png", alt: "Brand 11" },
    { id: 12, logo: "/assets/img/brand/brand-1-6.png", alt: "Brand 12" },
];
const darkBrandLogos = [
    { id: 1, logo: "/assets/img/brand/brand-white/brand-1.png", alt: "Brand 1" },
    { id: 2, logo: "/assets/img/brand/brand-white/brand-2.png", alt: "Brand 2" },
    { id: 3, logo: "/assets/img/brand/brand-white/brand-3.png", alt: "Brand 3" },
    { id: 4, logo: "/assets/img/brand/brand-white/brand-4.png", alt: "Brand 4" },
    { id: 5, logo: "/assets/img/brand/brand-white/brand-5.png", alt: "Brand 5" },
    { id: 6, logo: "/assets/img/brand/brand-white/brand-6.png", alt: "Brand 6" },
    { id: 7, logo: "/assets/img/brand/brand-white/brand-4.png", alt: "Brand 7", },
    { id: 8, logo: "/assets/img/brand/brand-white/brand-1.png", alt: "Brand 1" },
    { id: 9, logo: "/assets/img/brand/brand-white/brand-2.png", alt: "Brand 2" },
    { id: 10, logo: "/assets/img/brand/brand-white/brand-3.png", alt: "Brand 3" },
    { id: 11, logo: "/assets/img/brand/brand-white/brand-5.png", alt: "Brand 5" },
    { id: 12, logo: "/assets/img/brand/brand-white/brand-6.png", alt: "Brand 6" },
];

const Brand = () => {
    const isDark = useIsDarkRoute();
    const brands = isDark ? darkBrandLogos : lightBrandLogos;

    return (
        <div className="pb-[110px] pt-0 max-[1199px]:pb-[80px] max-[1199px]:pt-[80px] max-[991px]:pt-[40px] px-fade-anim">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Subtitle */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-3">
                        <div className="mb-[20px] max-[1199px]:mb-0">
                            <span className="inline-block font-sans text-[17px] font-medium uppercase tracking-[-0.03em] text-px-black dark:text-white max-[1199px]:pb-[20px]">
                                Our Clients
                            </span>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className="mb-[10px] bg-[#FEFFF8] dark:bg-transparent">
                    <div className="tp-slider-transtion">
                        <Swiper modules={[FreeMode, Autoplay]} {...brand_slider_two_params}>
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="grid min-h-[180px] w-full min-w-[240px] place-content-center rounded-[14px] border border-black/[0.06] bg-transparent p-[20px] text-center max-[1199px]:mb-[5px] dark:border-white/10">
                                        <img
                                            src={brand.logo}
                                            alt={brand.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
