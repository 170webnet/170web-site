"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutUsTextSlide = () => {

    return (
        <div className="px-fade-anim [&_.px-hero-6-text_span]:text-px-red dark:[&_.px-hero-6-text_span]:text-white">
            <div className="tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    freeMode={true}
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    centeredSlides={true}
                    allowTouchMove={false}
                    speed={20000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: true,
                    }}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className="px-hero-6-text">
                                <span className="font-thunder font-semibold uppercase leading-none tracking-[-0.01em] text-[110px] md:text-[150px] min-[992px]:text-[170px] min-[1200px]:text-[200px] min-[1400px]:text-[220px]">
                                    a new generation of digital creators
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUsTextSlide;
