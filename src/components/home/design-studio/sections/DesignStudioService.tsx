"use client";
import { servicesData } from "@/data/services-data";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";

const Service = () => {
    // display service items
    const displayServiceData = servicesData.slice(4, 8);
    const [activeIndex, setActiveIndex] = useState(1); // default first active

    return (
        <div className="px-service-2-area pb-75">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* top */}
                <div className="px-service-2-top mb-50">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3">
                            <div className="px-service-2-subtitle-box">
                                <span className="px-section-subtitle">[ Services ]</span>
                            </div>
                        </div>

                        <div className="col-span-8 md:col-span-8 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4">
                            <div className="px-service-2-wrap text-right">
                                <label>Solutions That We Deliver</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* services */}
                <div className="px-service-2-main p-relative">
                    {displayServiceData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            index={index + 1}
                            isActive={activeIndex === index + 1}
                            onHover={() => setActiveIndex(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
