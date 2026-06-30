"use client";
import { Star } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_params } from "@/constant";
import { SLIDER_TEXTS } from "@/data/site-data";


const TextMarquee = () => {
    return (
        <div className="bg-[#F11111] pt-[25px] pb-[25px]">
            {/* tp-slider-transtion: linear timing + auto-width slides (Swiper selectors) */}
            <div className="tp-slider-transtion">
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    {...text_slider_params}
                >
                    {SLIDER_TEXTS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-center">
                                <span className="font-semibold text-[18px] leading-none tracking-[-0.06em] uppercase text-white">
                                    {item.text}
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

export default TextMarquee;
