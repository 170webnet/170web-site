"use client";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { text_slider_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";

const marqueeItems = [
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
    "UI / UX Design",
];

const MarqueeItem = ({ text }: { text: string }) => (
    <div className="flex items-center">
        <span className="font-semibold text-[18px] leading-none tracking-[-0.06em] uppercase text-px-black dark:text-white">
            {text}
        </span>
        <span className="pl-[40px] text-px-black dark:text-white">
            <Star fill="currentColor" />
        </span>
    </div>
);

const CreativeStudioTextMarquee = () => {
    return (
        <section className="border-y border-[rgba(30,30,30,0.1)] dark:border-white/10 bg-[#FEFFF8] dark:bg-[#1D1D1F] pt-[15px] pb-[15px]">
            <div className="tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...text_slider_params}
                >
                    {marqueeItems.map((item, idx) => (
                        <SwiperSlide key={`${item}-${idx}`}>
                            <MarqueeItem text={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CreativeStudioTextMarquee;