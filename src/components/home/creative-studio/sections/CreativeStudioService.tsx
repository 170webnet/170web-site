"use client";
import { useState } from "react";
import { services } from "@/data/site-data";

const Service = () => {
    // Accordion controlado por estado (substitui o collapse JS do Bootstrap).
    const [openId, setOpenId] = useState<number | string | null>(
        services[0]?.id ?? null
    );

    return (
        <div
            className="relative z-[1] pt-[120px] pb-[80px] xl:pb-0"
            style={{ backgroundColor: "#000000" }}
        >
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div
                            className="mb-[50px] text-center px-fade-anim"
                            data-delay=".3"
                        >
                            <h2 className="font-thunder text-[80px] leading-none font-semibold tracking-[1px] text-white uppercase sm:text-[115px] md:text-[155px] lg:text-[212px] xl:text-[255px] 2xl:text-[315px] min-[1600px]:text-[350px] min-[1801px]:text-[410px]">
                                Our Services
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6 items-start">
                    {/* Video */}
                    <div className="col-span-12 xl:col-span-6 hidden xl:block">
                        <div className="relative -z-[1] inline-block [transform:scale(0.7)_scaleX(-1)_translateY(0)_translateX(120px)] 2xl:[transform:scaleX(-1)_translateY(-60px)]">
                            <video width={650} loop muted autoPlay playsInline>
                                <source
                                    src="https://html.aqlova.com/videos/170web/service-video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="col-span-12 xl:col-span-6">
                        <div>
                            {services.map((service) => {
                                const isOpen = openId === service.id;

                                return (
                                    <div
                                        key={service.id}
                                        className="relative not-last:border-b not-last:border-b-[rgb(254_255_248/0.08)]"
                                    >
                                        <h2>
                                            <button
                                                className="relative w-full cursor-pointer py-[24px] text-start text-[30px] leading-none font-semibold tracking-[-0.03em] text-white max-[575px]:text-[22px] md:text-[23px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]"
                                                type="button"
                                                aria-expanded={isOpen}
                                                onClick={() =>
                                                    setOpenId(isOpen ? null : service.id)
                                                }
                                            >
                                                <i className="mr-[80px] inline-block translate-y-[-3px]">
                                                    <service.Icon />
                                                </i>
                                                {service.title}
                                                <span className="absolute top-[15px] right-[7px] inline-block h-[46px] w-[46px] rounded-full border border-white/[0.14] max-[575px]:h-[30px] max-[575px]:w-[30px]">
                                                    {/* vertical bar — rotates to form a minus when open */}
                                                    <span
                                                        className={`absolute top-1/2 left-1/2 h-[14px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-white transition-transform duration-[400ms] ${
                                                            isOpen ? "rotate-90" : "rotate-0"
                                                        }`}
                                                    />
                                                    {/* horizontal bar */}
                                                    <span className="absolute top-1/2 left-1/2 h-[2px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-white" />
                                                </span>
                                            </button>
                                        </h2>

                                        <div
                                            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pt-0 pb-[20px] xl:pt-[20px] xl:pb-[60px]">
                                                    <p className="text-[16px] font-medium tracking-[-0.4px] text-white/60">
                                                        {service.description}
                                                    </p>

                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {service.categories.map((cat) => (
                                                            <span
                                                                key={`${service.id}-${cat}`}
                                                                className="inline-block rounded-[32px] bg-white/[0.06] px-[16px] py-[4px] text-[13px] font-semibold text-white uppercase max-[575px]:px-[12px] max-[575px]:text-[12px]"
                                                            >
                                                                {cat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
