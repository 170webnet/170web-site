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
        <div className="px-text-slider-wrap px-text-slider-mt px-text-slider-style-3 pt-15 pb-15">
            <div className="px-text-slider-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...text_slider_active}
                >
                    {SLIDES.map((text, index) => (
                        <SwiperSlide key={`${text}-${index}`}>
                            <div className="px-text-slider-item flex items-center">
                                <span>{text}</span>
                                <span className="pl-40">
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