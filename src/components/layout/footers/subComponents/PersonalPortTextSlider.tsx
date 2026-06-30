"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { footer_text_slider_params } from "@/constant";

const sliderTexts = ["get in touch", "get in touch", "get in touch", "get in touch"];

const PersonalPortTextSlider = () => {
    return (
        <div className="mb-[100px]">
            <div className="tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...footer_text_slider_params}
                >
                    {sliderTexts.map((text, index) => (
                        <SwiperSlide key={`${text}-${index}`}>
                            <div className="[&_span]:text-[90px] md:[&_span]:text-[140px] lg:[&_span]:text-[150px] xl:[&_span]:text-[190px] 2xl:[&_span]:text-[280px] [&_span]:font-semibold [&_span]:leading-none [&_span]:font-thunder [&_span]:uppercase [&_span]:tracking-[-1.4px] [&_span]:text-white [&_i]:not-italic [&_i]:inline-block [&_i]:mr-[10px] md:[&_i]:mr-[25px]">
                                <span>
                                    {text} <i>_</i>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PersonalPortTextSlider;
