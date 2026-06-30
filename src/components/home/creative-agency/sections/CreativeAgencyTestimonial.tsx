"use client";

import { creativeAgencyTestimonials } from "@/data/testimonial-data";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CATestimonialItem from "../components/CATestimonialItem";
import { TestimonialArrowIcon } from "@/svg/ArrowIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

const CreativeAgencyTestimonial = () => {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<div className="pt-[120px] pb-[120px] max-md:pt-[80px] max-md:pb-[80px]">
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
									{creativeAgencyTestimonials.map((item) => (
										<SwiperSlide key={item.id}>
											<CATestimonialItem {...item} />
										</SwiperSlide>
									))}
								</Swiper>

								{/* PAGINATION */}
								<div className="absolute bottom-[-80px] right-0 left-0 w-[260px] mx-auto text-center inline-flex justify-center max-md:left-[-60px] max-md:bottom-[-20px] [&_.swiper-pagination-progressbar]:w-full! [&_.swiper-pagination-progressbar]:h-[2px]! [&_.swiper-pagination-progressbar]:left-0! [&_.swiper-pagination-progressbar]:top-auto! [&_.swiper-pagination-progressbar]:bottom-0! [&_.swiper-pagination-progressbar]:right-0! [&_.swiper-pagination-progressbar]:text-center! [&_.swiper-pagination-progressbar]:mx-[30px]! [&_.swiper-pagination-progressbar]:bg-[#d9d9d9]! dark:[&_.swiper-pagination-progressbar]:bg-white/20! [&_.swiper-pagination-progressbar-fill]:bg-px-orange! [&_.swiper-pagination-fraction]:bottom-0! [&_.swiper-pagination-fraction]:left-0! [&_.swiper-pagination-fraction]:w-auto! [&_.swiper-pagination-fraction_span]:absolute [&_.swiper-pagination-fraction_span]:top-[-10px] [&_.swiper-pagination-fraction_span]:right-[-60px] [&_.swiper-pagination-fraction_span]:font-medium [&_.swiper-pagination-fraction_span]:text-[15px] [&_.swiper-pagination-fraction_span]:leading-none [&_.swiper-pagination-fraction_span]:tracking-[-0.01em] [&_.swiper-pagination-fraction_span]:text-px-black dark:[&_.swiper-pagination-fraction_span]:text-white [&_.swiper-pagination-fraction_span.current]:right-auto! [&_.swiper-pagination-fraction_span.current]:left-0!">
									<div className="swiper-pagination-progress"></div>
									<div className="swiper-pagination-fraction"></div>
								</div>
							</div>
							{/* NAVIGATION */}
							<div className="md:max-[991px]:text-center md:max-[991px]:mt-[70px] max-md:text-center max-md:mt-[70px]">
								<button
									type="button"
									className="w-[50px] h-[50px] leading-none transition-all duration-300 rounded-full inline-flex items-center justify-center border border-[rgba(25,25,25,0.1)] dark:border-white/20 hover:text-px-white hover:border-px-orange hover:bg-px-orange absolute top-1/2 left-[-85px] -translate-y-1/2 md:max-[991px]:static md:max-[991px]:translate-y-0 max-md:static max-md:translate-y-0"
									onClick={() => swiperRef.current?.slidePrev()}
									aria-label="Previous testimonial"
								>
									<TestimonialArrowIcon direction="prev" />
								</button>

								<button
									type="button"
									className="w-[50px] h-[50px] leading-none transition-all duration-300 rounded-full inline-flex items-center justify-center border border-[rgba(25,25,25,0.1)] dark:border-white/20 hover:text-px-white hover:border-px-orange hover:bg-px-orange absolute top-1/2 right-[-85px] -translate-y-1/2 md:max-[991px]:static md:max-[991px]:translate-y-0 max-md:static max-md:translate-y-0"
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

export default CreativeAgencyTestimonial;

/* helper function */
const updateFraction = (swiper: SwiperType) => {
	const fraction = document.querySelector(".swiper-pagination-fraction");

	if (!fraction) return;

	const totalSlides = swiper.slides.length - swiper.loopedSlides! * 2;

	fraction.innerHTML = `
			<span class="current">${swiper.realIndex + 1}</span>
			<span class="total">${totalSlides + 2}</span>
		`;
};