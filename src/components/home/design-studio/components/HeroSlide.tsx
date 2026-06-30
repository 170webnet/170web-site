"use client";
import { Navigation, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const heroSlides = [
    { title: "©170web - Motion", subtitle: "Graphics, Visual Studio", img: "/assets/img/hero/hero-2-4.jpg" },
    { title: "©170web - Visual", subtitle: "Storytelling, Digital Agency", img: "/assets/img/hero/hero-2-2.jpg" },
    { title: "©170web - Brand", subtitle: "Identity, Media Studio", img: "/assets/img/hero/hero-2-1.jpg" },
    { title: "©170web - Digital", subtitle: "Branding, Creative Agency", img: "/assets/img/hero/hero-2-3.jpg" },
    { title: "©170web - Motion", subtitle: "Graphics, Visual Studio", img: "/assets/img/hero/hero-2-4.jpg" },
    { title: "©170web - Visual", subtitle: "Storytelling, Digital Agency", img: "/assets/img/hero/hero-2-2.jpg" },
    { title: "©170web - Brand", subtitle: "Identity, Media Studio", img: "/assets/img/hero/hero-2-1.jpg" },
    { title: "©170web - Digital", subtitle: "Branding, Creative Agency", img: "/assets/img/hero/hero-2-3.jpg" },
];

const HeroSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const topSwiperRef = useRef<SwiperType | null>(null);
    const thumbsSwiperRef = useRef<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [topSwiper, setTopSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="pb-[100px] max-[767px]:pb-[60px]">

            {/* Top Slides */}
            <div className="grid grid-cols-12 gap-x-6 justify-center">
                <div className="col-span-12 lg:col-span-8">
                    <Swiper
                        modules={[Navigation, Controller]}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={false}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        onSwiper={(swiper) => {
                            topSwiperRef.current = swiper;
                            setTopSwiper(swiper);
                        }}
                        controller={{ control: thumbsSwiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="mb-[40px]"
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={`${slide.title}-${index}`}>
                                <div className="text-center relative z-[1] [&_span]:inline-block [&_span]:font-bold [&_span]:text-[25px] md:[&_span]:text-[45px] [&_span]:leading-[1.07] [&_span]:tracking-[-0.05em] [&_span]:uppercase [&_span]:text-px-black">
                                    <div className="overflow-hidden">
                                        <span>{slide.title}</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span>{slide.subtitle}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Bottom Thumbnails */}
            <div className="grid grid-cols-12 gap-x-6 justify-center">
                <div className="col-span-12 lg:col-span-6">
                    <Swiper
                        modules={[Controller]}
                        onSwiper={(swiper) => {
                            thumbsSwiperRef.current = swiper;
                            setThumbsSwiper(swiper);
                        }}
                        slidesPerView={3}
                        spaceBetween={10}
                        centeredSlides={true}
                        loop={false}
                        slideToClickedSlide={true}
                        controller={{ control: topSwiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="gallery-thumbs [&_.swiper-slide-active_.px-hero-2-thumbs]:saturate-100"
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={`${slide.title}-${index}`}>
                                <div className={`px-hero-2-thumbs transition-all duration-1000 ease-[cubic-bezier(.19,1,.22,1)] ${activeIndex === index ? "saturate-100" : "saturate-0"}`}>
                                    <Link href="#">
                                        <Image width={130} height={168} src={slide.img} alt={slide.title} />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
