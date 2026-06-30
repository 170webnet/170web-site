"use client";
import { Star } from "lucide-react";
import { text_slider_active } from "@/constant";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    "Brand Identity Design",
    "Infographic and other",
    "Branding & Identity",
    "Web Design & Development",
    "UI / UX Design",
    "Complex brand design",
    "Complex brand design",
    "Brand Identity Design",
    "Brand Identity Design",
    "Infographic and other",
    "Branding & Identity",
    "Web Design & Development",
];

const AboutMeTextSlide = () => {
    return (
        <div className="relative z-[-1] translate-y-0 border-y border-[rgba(30,30,30,0.1)] pb-[15px] pt-[15px] dark:border-white/10 md:translate-y-[-200px] lg:translate-y-[-112px] xl:translate-y-[-300px]">
            <div className="tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...text_slider_active}
                >
                    {SLIDES.map((text, index) => (
                        <SwiperSlide key={`${text}-${index}`}>
                            <div className="flex items-center">
                                <span className="font-sans text-[18px] font-semibold uppercase leading-none tracking-[-0.06em] text-px-black dark:text-white">
                                    {text}
                                </span>
                                <span className="pl-[40px]">
                                    <Star fill="currentColor" />
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutMeTextSlide;
