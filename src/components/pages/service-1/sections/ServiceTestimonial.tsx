"use client";

import ServiceTestimonialItem from "../components/ServiceTestimonialItem";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { serviceTestimonials } from "@/data/testimonial-data";
import { TestimonialArrowIcon } from "@/svg/ArrowIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

const ServiceTestimonial = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="pt-[120px] pb-[120px] max-sm:pt-[80px] max-sm:pb-[80px]">
            <div className="mx-auto w-full max-w-[1330px] px-3">
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    <div className="col-span-12 xl:col-span-8">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={1}
                                    loop
                                    speed={1000}
                                    spaceBetween={0}
                                    autoplay={{ delay: 3000 }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    pagination={{
                                        el: ".swiper-pagination-progress",
                                        type: "progressbar",
                                    }}
                                    onInit={(swiper) => {
                                        updateFraction(swiper);
                                    }}
                                    onSlideChange={(swiper) => {
                                        updateFraction(swiper);
                                    }}
                                >
                                    {serviceTestimonials.map((item, index) => (
                                        <SwiperSlide key={`${item.name}-${index}`}>
                                            <ServiceTestimonialItem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* PAGINATION */}
                                <div
                                    className="absolute right-0 left-0 bottom-[-80px] mx-auto inline-flex w-[260px] justify-center text-center max-sm:left-[-60px] max-sm:bottom-[-20px] [&_.swiper-pagination-progress]:!top-auto [&_.swiper-pagination-progress]:!bottom-0 [&_.swiper-pagination-progress]:!left-0 [&_.swiper-pagination-progress]:!mx-[30px] [&_.swiper-pagination-progress]:!h-[2px] [&_.swiper-pagination-progress]:!w-full [&_.swiper-pagination-progress]:!bg-[#d9d9d9] dark:[&_.swiper-pagination-progress]:!bg-white/20"
                                    style={{ ["--swiper-pagination-color" as string]: "#ff471d" }}
                                >
                                    <div className="swiper-pagination-progress"></div>
                                    <div className="swiper-pagination-fraction [&_span]:absolute [&_span]:top-[-10px] [&_span]:right-[-60px] [&_span]:text-[15px] [&_span]:font-medium [&_span]:leading-none [&_span]:tracking-[-0.01em] [&_span]:text-px-black dark:[&_span]:text-white [&_span.current]:right-auto [&_span.current]:left-0"></div>
                                </div>
                            </div>

                            {/* NAVIGATION */}
                            <div className="max-md:mt-[70px] max-md:text-center">
                                <button
                                    type="button"
                                    className="absolute top-1/2 left-[-85px] inline-flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 leading-none transition-[0.3s] hover:border-px-orange hover:bg-px-orange hover:text-white dark:border-white/20 dark:hover:border-px-orange max-md:static max-md:translate-y-0 [&_svg]:ml-[1px]"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    aria-label="Previous testimonial"
                                >
                                    <TestimonialArrowIcon direction="prev" />
                                </button>

                                <button
                                    type="button"
                                    className="absolute top-1/2 right-[-85px] inline-flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 leading-none transition-[0.3s] hover:border-px-orange hover:bg-px-orange hover:text-white dark:border-white/20 dark:hover:border-px-orange max-md:static max-md:translate-y-0 [&_svg]:ml-[1px]"
                                    onClick={() => swiperRef.current?.slideNext()}
                                    aria-label="Next testimonial"
                                >
                                    <TestimonialArrowIcon direction="next" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTestimonial;

/* helper function */
const updateFraction = (swiper: SwiperType) => {
    const fraction = document.querySelector(".swiper-pagination-fraction");

    if (!fraction) return;

    const totalSlides = swiper.slides.length - (swiper.loopedSlides ?? 0) * 2;

    fraction.innerHTML = `
		<span class="current">${swiper.realIndex + 1}</span>
		<span class="total">${totalSlides}</span>
	`;
};
