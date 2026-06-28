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
            className="px-service-area px-service-3-style pt-120 z-index-1"
            style={{ backgroundColor: "#000000" }}
        >
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div
                            className="px-service-text text-center mb-50 px-fade-anim"
                            data-delay=".3"
                        >
                            <h2 className="px-about-3-bigtext text-white">
                                Our Services
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6 items-start">
                    {/* Video */}
                    <div className="col-span-12 xl:col-span-6 hidden xl:block">
                        <div className="px-service-3-video">
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
                        <div className="px-service-accordion-wrap">
                            <div className="accordion" id="accordionExample1">
                                {services.map((service) => {
                                    const isOpen = openId === service.id;

                                    return (
                                        <div key={service.id} className="accordion-items">
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons cursor-pointer ${!isOpen ? "collapsed" : ""}`}
                                                    type="button"
                                                    aria-expanded={isOpen}
                                                    onClick={() =>
                                                        setOpenId(isOpen ? null : service.id)
                                                    }
                                                >
                                                    <i>
                                                        <service.Icon />
                                                    </i>
                                                    {service.title}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>

                                            <div
                                                className={`accordion-collapse grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="accordion-body">
                                                        <p>{service.description}</p>

                                                        <div className="px-service-accordion-category">
                                                            {service.categories.map((cat) => (
                                                                <span key={`${service.id}-${cat}`}>{cat}</span>
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
        </div>
    );
};

export default Service;
