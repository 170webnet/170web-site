"use client";
import HeroSlide from "../components/HeroSlide";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroContent = [
    { col: "col-span-12 lg:col-span-2", img: "/assets/img/hero/hero-2-1.jpg", title: "©170web - Video", subtitle: "Branding, Digital Studio", spacingCls: "", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-4", img: "/assets/img/hero/hero-2-2.jpg", title: "©170web - Motion", subtitle: "Graphics, Visual Studio", spacingCls: "pl-80", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-4", img: "/assets/img/hero/hero-2-3.jpg", title: "©170web - Brand", subtitle: "Identity, Media Studio", spacingCls: "pr-80", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-2", img: "/assets/img/hero/hero-2-4.jpg", title: "©170web - Digital", subtitle: "Branding, Creative Agency", spacingCls: "", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-5.jpg", title: "©170web - Video", subtitle: "Production, Design Studio", spacingCls: "pr-85", alignCls: "justify-end" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-6.jpg", title: "©170web - Visual", subtitle: "Storytelling, Digital Agency", spacingCls: "pl-105", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-7.jpg", title: "©170web - Creative", subtitle: "Media, Branding Studio", spacingCls: "pl-100", alignCls: "justify-start" },
    { col: "col-span-12 lg:col-span-3", img: "/assets/img/hero/hero-2-8.jpg", title: "©170web - Motion", subtitle: "Design, Creative Studio", spacingCls: "pl-100", alignCls: "justify-start" },
];


const Hero = () => {
    const defaultActive = 1;
    const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

    return (
        <div className="px-hero-2-area pt-120 pb-20">
            <div className="px-hero-2-main hidden xl:block mb-110 p-relative">
                <div className="mx-auto w-full max-w-[1630px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        {heroContent.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div className={item.col} key={`${item.title}-${index}`}>
                                    <div
                                        className={`px-hero-2-item flex ${item.alignCls} mb-50 ${item.spacingCls} ${isActive ? "active" : ""}`}
                                    >
                                        <div
                                            className="px-fade-anim"
                                            data-delay=".3"
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <div className="px-hero-2-thumb">
                                                <Link href="/portfolio-details-1">
                                                    <Image width={130} height={168} src={item.img} alt={item.title} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="px-hero-2-content text-center z-index-1">
                                            <div className="fix">
                                                <span>{item.title}</span>
                                            </div>
                                            <div className="fix">
                                                <span>{item.subtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="px-hero-2-slider xl:hidden">
                <div className="container-px">
                    <HeroSlide />
                </div>
            </div>
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="px-hero-2-bottom text-center p-relative px-fade-anim" data-delay=".3">
                            <h4 className="px-hero-2-text flex items-end justify-center">
                                design <i className="hidden xl:block"><span>©170web <br /> Live in a World <br /> of creative designs</span></i>Studio
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;