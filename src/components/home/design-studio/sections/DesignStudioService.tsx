"use client";
import { servicesData } from "@/data/services-data";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";

const Service = () => {
    // display service items
    const displayServiceData = servicesData.slice(4, 8);
    const [activeIndex, setActiveIndex] = useState(1); // default first active

    return (
        // px-service-2-area: pb-75 (75px); o template zera o padding-bottom abaixo de 1200 (@media lg,md,xs)
        <div className="pb-0 min-[1200px]:pb-[75px]">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* top */}
                <div className="mb-[50px]">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3">
                            <div>
                                <span className="px-section-subtitle">[ Services ]</span>
                            </div>
                        </div>

                        <div className="col-span-8 md:col-span-8 lg:col-span-6 lg:col-start-4 xl:col-span-6 xl:col-start-4">
                            {/* px-service-2-wrap: padding-left 100px no lg (992-1199) e >=1400; 0 no xl/md/xs */}
                            <div className="text-right pl-0 min-[992px]:pl-[100px] min-[1200px]:pl-0 min-[1400px]:pl-[100px]">
                                {/* px-service-2-wrap label: 16px/500 leading-1 tracking -0.04em uppercase; 14px abaixo de lg; dark -> white */}
                                <label className="text-[14px] min-[992px]:text-[16px] font-medium leading-none tracking-[-0.04em] uppercase dark:text-white">
                                    Solutions That We Deliver
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* services */}
                <div className="relative">
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
