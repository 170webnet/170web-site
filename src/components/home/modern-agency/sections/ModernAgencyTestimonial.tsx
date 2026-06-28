"use client";
import { modernAgencyTestimonials } from "@/data/testimonial-data";
import Testimonialtem from "../components/Testimonialtem";
import { testimonial_slide_params } from "@/constant";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
    return (
        <section className="px-testimonial-area pt-120">
            <div className="container-px">
                {/* Top Header */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 md:col-span-4">
                        <div className="px-testimonial-top-content mb-5">
                            <span>CLIENT APPROVAL</span>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-5">
                        <div className="px-testimonial-top-content mb-5">
                            <span>CREATIVE AS BUNDLED PROJECTS</span>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div className="px-testimonial-top-content mb-5 md:text-right">
                            <span>(BO® — 04)</span>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-start-5 col-span-12 xl:col-span-8">
                        <div className="px-testimonial-slider pt-110">
                            <div className="px-testimonial-active">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    {...testimonial_slide_params}
                                >
                                    {modernAgencyTestimonials.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <Testimonialtem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;