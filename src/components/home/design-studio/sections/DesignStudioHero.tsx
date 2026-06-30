"use client";
import HeroSlide from "../components/HeroSlide";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroContent = [
    { col: "col-span-12 lg:col-span-2", img: "/assets/img/hero/hero-2-1.jpg", title: "©170web - Video", subtitle: "Branding, Digital Studio", spacingCls: "", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-4", img: "/assets/img/hero/hero-2-2.jpg", title: "©170web - Motion", subtitle: "Graphics, Visual Studio", spacingCls: "pl-[80px]", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-4", img: "/assets/img/hero/hero-2-3.jpg", title: "©170web - Brand", subtitle: "Identity, Media Studio", spacingCls: "pr-[80px]", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-2", img: "/assets/img/hero/hero-2-4.jpg", title: "©170web - Digital", subtitle: "Branding, Creative Agency", spacingCls: "", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-5.jpg", title: "©170web - Video", subtitle: "Production, Design Studio", spacingCls: "pr-[85px]", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-6.jpg", title: "©170web - Visual", subtitle: "Storytelling, Digital Agency", spacingCls: "pl-[105px]", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-7.jpg", title: "©170web - Creative", subtitle: "Media, Branding Studio", spacingCls: "pl-[100px]", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-8.jpg", title: "©170web - Motion", subtitle: "Design, Creative Studio", spacingCls: "pl-[100px]", alignCls: "justify-start" },
];


const Hero = () => {
    const defaultActive = 1;
    const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

    return (
        <div className="pt-[120px] pb-[20px]">
            <div className="hidden xl:block mb-[110px] relative">
                <div className="mx-auto w-full max-w-[1630px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        {heroContent.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div className={item.col} key={`${item.title}-${index}`}>
                                    <div
                                        className={`group/item flex ${item.alignCls} mb-[50px] ${item.spacingCls}`}
                                    >
                                        <div
                                            className="px-fade-anim"
                                            data-delay=".3"
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <div
                                                className={`flex w-[130px] items-center justify-center overflow-hidden origin-center transition-all duration-1000 ease-[cubic-bezier(.19,1,.22,1)] [&_img]:h-full [&_img]:object-cover [&_img]:origin-center [&_img]:transition-transform [&_img]:duration-1000 [&_img]:ease-[cubic-bezier(.19,1,.22,1)] hover:saturate-100 hover:scale-[1.2] [&:hover_img]:scale-100 ${isActive ? "saturate-100 scale-[1.2] [&_img]:scale-100" : "saturate-0 scale-100 [&_img]:scale-[1.2]"}`}
                                            >
                                                <Link href="/portfolio-details-1">
                                                    <Image width={130} height={168} src={item.img} alt={item.title} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 left-0 right-0 overflow-hidden text-center z-[1]">
                                            <div className="overflow-hidden">
                                                <span
                                                    className={`inline-block font-bold text-[30px] leading-[1.07] tracking-[-0.05em] uppercase text-px-black dark:text-white will-change-transform ${isActive ? "animate-[text_bottom_1s_cubic-bezier(.19,1,.22,1)_forwards]" : "translate-y-[-105%] animate-[text_upper_1s_cubic-bezier(.19,1,.22,1)_forwards]"}`}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="overflow-hidden">
                                                <span
                                                    className={`inline-block font-bold text-[30px] leading-[1.07] tracking-[-0.05em] uppercase text-px-black dark:text-white will-change-transform ${isActive ? "animate-[text_bottom_1s_cubic-bezier(.19,1,.22,1)_forwards]" : "translate-y-[-105%] animate-[text_upper_1s_cubic-bezier(.19,1,.22,1)_forwards]"}`}
                                                >
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="xl:hidden">
                <div className="container-px">
                    <HeroSlide />
                </div>
            </div>
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="text-center relative px-fade-anim" data-delay=".3">
                            <h4 className="relative flex items-end justify-center font-bold font-thunder uppercase tracking-[-0.01em] leading-[0.7] text-px-red text-[85px] md:text-[175px] lg:text-[230px] xl:text-[172px] 2xl:text-[220px] min-[1600px]:text-[270px] min-[1701px]:text-[295px] min-[1801px]:text-[320px] min-[1900px]:text-[350px]">
                                design <i className="hidden xl:block flex-[0_0_auto] h-[10px] w-[420px] mx-[30px] mr-[15px] not-italic translate-y-[-22px] 2xl:translate-y-[-50px] bg-px-red"><span className="absolute bottom-[30px] left-0 right-0 mx-auto font-bold font-sans text-[20px] 2xl:text-[30px] leading-[1.07] tracking-[-0.05em] uppercase text-px-black dark:text-white">©170web <br /> Live in a World <br /> of creative designs</span></i>Studio
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
