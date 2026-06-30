"use client";
import { text_slider_active } from "@/constant";
import { GeometricFlowerIcon } from "@/svg/ShapeIcons";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    { id: 1, text: "We develop & create digital future" },
    { id: 2, text: "Infographic and other" },
    { id: 3, text: "We develop & create digital future" },
    { id: 4, text: "Web Design & Development" },
    { id: 5, text: "We develop & create digital future" },
    { id: 6, text: "Infographic and other" },
    { id: 7, text: "We develop & create digital future" },
    { id: 8, text: "Web Design & Development" },
    { id: 9, text: "We develop & create digital future" },
    { id: 10, text: "Infographic and other" },
    { id: 11, text: "We develop & create digital future" },
    { id: 12, text: "Web Design & Development" },
];

const CreativeAgencyTextSlider = () => {
    return (
        <div>
            <div className="bg-px-orange pt-[30px]">
                {/* tp-slider-transtion: linear timing + auto-width slides (Swiper selectors) */}
                <div className="tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...text_slider_active}
                    >
                        {SLIDES.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="flex items-center">
                                    <span className="font-thunder text-[70px] md:text-[100px] xl:text-[140px] font-bold leading-none uppercase text-white">
                                        {slide.text}
                                    </span>
                                    <div className="relative ml-[40px] inline-block translate-y-[-15px] text-center font-thunder text-[24px] font-bold leading-[0.93] uppercase text-px-orange">
                                        <span className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
                                            let&apos;s <br /> talk
                                        </span>
                                        <i className="inline-block animate-[rotate_anim_10s_cubic-bezier(1,0.99,0.03,0.01)_infinite]">
                                            <GeometricFlowerIcon />
                                        </i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* LINE SHAPE */}
            <div className="mt-[10px] leading-none">
                <span className="block h-[10px] w-full bg-px-orange" />
                <span className="mt-[8px] block h-[9px] w-full bg-px-orange" />
                <span className="block h-[6px] w-full bg-px-orange" />
                <span className="block h-[4px] w-full bg-px-orange" />
                <span className="block h-[2px] w-full translate-y-[-4px] bg-px-orange" />
            </div>
        </div>
    );
};

export default CreativeAgencyTextSlider;
