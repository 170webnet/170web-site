"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brand_slider_params } from "@/constant";
import { PlusIcon, TextArrowIcon } from "@/svg";
import Link from "next/link";
import Image from "next/image";

const aboutStats = [
    {
        id: 1,
        value: "16+",
        index: "01",
        title: "Years of Experience",
        desc: "We have had quite a run in our 12+ years of working.",
        delay: ".3",
    },
    {
        id: 2,
        value: "120+",
        index: "02",
        title: "Successful projects Completed",
        desc: "We've delivered 50+ projects that help companies generate real results.",
        delay: ".5",
    },
    {
        id: 3,
        value: "98%",
        index: "03",
        title: "Client Satisfaction",
        isBrandSlider: true,
        delay: ".7",
    },
];

const brandImages = [
    { id: 1, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 2, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 3, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
    { id: 4, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 5, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 6, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
];

const StartupAgencyAbout = () => {
    return (
        <section className="px-about-area about-skew-anim pb-75">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {/* LEFT */}
                    <div className="col-span-12 xl:col-span-3">
                        <span className="px-section-subtitle px-about-subtitle-box">
                            <i>
                                <PlusIcon />
                            </i>
                            What we do
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-12 xl:col-span-9">
                        {/* CONTENT */}
                        <div className="px-about-content-wrap">
                            <h4 className="px-about-title mb-55">
                                <span>We are a digital studio</span> specializing <br />
                                in website development, SEO, <br /> and marketing.
                            </h4>

                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="col-span-12 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-5">
                                    <div className="px-about-content mb-70">
                                        <p>
                                            <span>Our focus is on creating functional,</span> fast, & <br />
                                            well-structured websites that meet business goals
                                            without unnecessary complexity.
                                        </p>

                                        <Link
                                            href="/about-us"
                                            className="px-about-link px-doubble-effect"
                                        >
                                            <span>Discover more</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="px-about-info-wrap">
                            <div className="grid grid-cols-12 gap-x-1.25">
                                {aboutStats.map((item) => (
                                    <div
                                        key={item.id}
                                        className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4"
                                    >
                                        <div
                                            className="px-about-info mb-5 px-fade-anim"
                                            data-delay={item.delay}
                                        >
                                            <div className="px-about-info-head flex justify-between">
                                                <h4>
                                                    <span>{item.value.replace(/\D/g, "")}</span>
                                                    {item.value.replace(/\d/g, "")}
                                                </h4>
                                                <em>{item.index}</em>
                                            </div>

                                            <div className="px-about-info-body flex flex-col justify-between">
                                                <h4>
                                                    {item.title.split(" ").map((word, idx) => (
                                                        <span key={idx}>
                                                            {word} {idx === 1 && <br />}
                                                        </span>
                                                    ))}
                                                </h4>

                                                {!item.isBrandSlider ? (
                                                    <p>{item.desc}</p>
                                                ) : (
                                                    <div className="px-about-brand-slider fix pb-25">
                                                        <div className="px-about-brand-active">
                                                            <div className="slide-transtion">
                                                                <Swiper
                                                                    modules={[FreeMode, Autoplay]}
                                                                    {...brand_slider_params}>
                                                                    {brandImages.map((brand) => (
                                                                        <SwiperSlide key={brand.id}>
                                                                            <div className="px-about-brand">
                                                                                <span>
                                                                                    <Image width={brand.width} height={brand.height} src={brand.img} alt="brand logo" />
                                                                                </span>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    ))}
                                                                </Swiper>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartupAgencyAbout;
