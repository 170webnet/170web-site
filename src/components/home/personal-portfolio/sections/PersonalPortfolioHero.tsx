"use client";
import { TextArrowIcon, HeroArrowIconTwo } from "@/svg";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { hero_text_slider_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OrganicShape } from "@/svg/ShapeIcons";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";

// Data
const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
];

const sliderTexts = ["Branding", "Development", "Design", "Branding", "Development", "Design"];

const PersonalPortfolioHero = () => {
    const isDarkTheme = useIsDarkRoute();
    // Hero image configuration based on active theme (dark / light)
    const heroConfig = {
        src: isDarkTheme
            ? "/assets/img/hero/hero-6/hero-1-dark.png"
            : "/assets/img/hero/hero-6/hero-1.png",
        width: isDarkTheme ? 860 : 696,
        height: isDarkTheme ? 819 : 664
    };
    return (
        <div
            id="top"
            className="pt-[100px] bg-no-repeat [background-position-y:80px]"
            style={{
                backgroundImage: `url(/assets/img/hero/hero-6/hero-bg-shape.png)`,
            }}
        >
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    {/* LEFT */}
                    <div className="col-span-12 lg:col-span-5 xl:col-span-4 order-1 lg:order-0">
                        <div>
                            <div>
                                <p className="font-semibold text-[40px] xl:text-[35px] lg:text-[35px] max-[575px]:text-[35px] leading-[1.1] mb-[25px] tracking-[-0.05em] text-px-black dark:text-white [&_br]:max-md:hidden [&_br]:max-[575px]:hidden">
                                    Hello! {`I'm`} Luca <br />
                                    Nardi. a digital designer <br />
                                    & creative developer <br />
                                    from Italy.
                                </p>

                                <div className="mb-[110px] md:mb-[40px] max-[575px]:mb-[30px]">
                                    <Image className="max-w-full h-auto" width={111} height={60} src="/assets/img/signature/signature.svg" alt="signature" />
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="relative z-[1] mb-[50px] lg:mb-[25px]">
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        className="px-doubble-effect font-medium text-[14px] leading-none text-[#575454] dark:text-white tracking-[-0.01em] uppercase [&:not(:last-child)]:mr-[40px] xl:[&:not(:last-child)]:mr-[15px] max-[575px]:[&:not(:last-child)]:mr-[30px]"
                                        href={item.href}
                                    >
                                        {item.name}
                                        <i className="relative overflow-hidden w-[14px] h-[14px] inline-flex ml-[7px]">
                                            <TextArrowIcon />
                                            <TextArrowIcon />
                                        </i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="col-span-12 lg:col-span-7 xl:col-span-5 order-0 lg:order-1">
                        <div>
                            <Image
                                className="h-auto max-w-none ml-[-115px] md:max-w-full md:ml-0 max-[575px]:max-w-full max-[575px]:ml-0"
                                width={heroConfig.width}
                                height={heroConfig.height}
                                src={heroConfig.src}
                                alt="Hero image"
                            />
                        </div>
                    </div>

                    {/* CATEGORY */}
                    <div className="col-span-12 xl:col-span-3 lg:order-1">
                        <div className="mb-[50px] xl:text-right max-md:mb-[20px] max-[575px]:mb-[20px] [&_br]:lg:hidden [&_br]:max-md:hidden [&_br]:max-[575px]:hidden [&_span]:font-medium [&_span]:text-[14px] xl:[&_span]:text-[13px] max-[575px]:[&_span]:text-[12px] [&_span]:leading-none [&_span]:transition-[0.3s] [&_span]:text-[#575454] dark:[&_span]:text-white [&_span]:mb-[8px] [&_span]:rounded-[20px] [&_span]:py-[10px] [&_span]:px-[20px] max-[575px]:[&_span]:py-[10px] max-[575px]:[&_span]:px-[14px] [&_span]:inline-block [&_span]:bg-[#f8f8f8] dark:[&_span]:bg-[#1C1D20] [&_span]:tracking-[-0.01em] [&_span]:uppercase [&_span:hover]:text-white [&_span:hover]:bg-px-orange">
                            <span>Web design</span><br />
                            <span style={{ marginRight: "5px" }}>Art Direction</span>
                            <span>HTML</span><br />
                            <span style={{ marginRight: "5px" }}>Branding</span>
                            <span>Motion Design</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SLIDER */}
            <div className="relative">
                <div className="absolute top-[-90px] right-[30%] z-[55] lg:right-[7%] max-md:right-[7%] max-[575px]:relative max-[575px]:top-0 max-[575px]:right-0 max-[575px]:ml-[15px] max-[575px]:mb-[20px]">
                    <SmartLink
                        className="px-btn-zikzak relative text-center inline-block font-bold text-[30px] leading-[0.93] uppercase text-white font-thunder"
                        href="/contact"
                    >
                        <span className="btn-text absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
                            <i className="btn-icon block mb-[5px]">
                                <HeroArrowIconTwo />
                            </i>
                            Let&apos;s Talk
                        </span>
                        <i className="zikzak-bg inline-block text-px-orange animate-[rotate_anim_10s_cubic-bezier(1,0.99,0.03,0.01)_infinite]">
                            <OrganicShape />
                        </i>
                    </SmartLink>
                </div>

                <div className="tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...hero_text_slider_params}
                    >
                        {sliderTexts.map((text, index) => (
                            <SwiperSlide key={`${text}-${index}`}>
                                <div className="[&_span]:font-semibold [&_span]:text-[220px] xl:[&_span]:text-[200px] lg:[&_span]:text-[170px] md:[&_span]:text-[150px] max-[575px]:[&_span]:text-[110px] [&_span]:leading-none [&_span]:tracking-[-0.01em] [&_span]:uppercase [&_span]:text-px-black dark:[&_span]:text-white [&_span]:font-thunder [&_i]:not-italic">
                                    <span>
                                        {text}
                                        <i className={text === "Development" ? "ml-[-18px]" : ""}>
                                            _
                                        </i>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioHero;
