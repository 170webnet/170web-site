"use client";
import ServiceTextSlideItem from "../components/ServiceTextSlideItem";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_active } from "@/constant";

const sliderItems = [
    "We develop & create digital future",
    "Infographic and other",
    "We develop & create digital future",
    "Web Design & Development",
    "We develop & create digital future",
    "Infographic and other",
    "We develop & create digital future",
    "Web Design & Development",
];

const ServiceTextSlider = () => {
    return (
        <div>
            <div className="bg-px-orange pt-[30px]">
                <div>
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...text_slider_active}
                    >
                        {sliderItems.map((item, index) => (
                            <SwiperSlide key={`${item}-${index}`}>
                                <ServiceTextSlideItem item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mt-[10px] leading-none">
                <span className="block h-[10px] w-full bg-[#ff471d]"></span>
                <span className="mt-[8px] block h-[9px] w-full bg-[#ff471d]"></span>
                <span className="block h-[6px] w-full bg-[#ff471d]"></span>
                <span className="block h-[4px] w-full bg-[#ff471d]"></span>
                <span className="block h-[2px] w-full translate-y-[-4px] bg-[#ff471d]"></span>
            </div>
        </div>
    );
};

export default ServiceTextSlider;
