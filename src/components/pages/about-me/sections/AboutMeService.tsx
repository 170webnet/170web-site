"use client";

import { SERVICE_CAPSULE_ITEMS } from "@/data/service-capsule-data";
import { useThrowable } from "@/hooks/useThrowable";

const AboutMeService = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    return (
        <div className="px-capsule-area">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="relative rounded-[20px] bg-[#F6F6F6] dark:bg-[#1C1D20]">
                            <div className="relative">
                                {/* Title */}
                                <div className="pt-[60px] pl-[60px]">
                                    <span className="mb-[30px] inline-block font-sans text-[18px] font-normal leading-[1.6] tracking-[-0.05em] text-px-black dark:text-white">
                                        About
                                    </span>
                                    <h3 className="font-thunder-med text-[80px] font-medium leading-[0.8] tracking-[1px] text-px-black dark:text-white">
                                        Toolbox
                                    </h3>
                                </div>
                                {/* Items */}
                                <div data-px-throwable-scene="true" ref={sceneRef}>
                                    <div className="relative mt-[-170px] h-[540px] overflow-hidden pointer-events-none">
                                        {SERVICE_CAPSULE_ITEMS.map((item) => (
                                            <p
                                                data-px-throwable-el=""
                                                key={item.id}
                                                className="absolute left-0 top-0 mb-0 inline-block select-none pointer-events-auto transition-none">
                                                <span
                                                    className="inline-flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white font-thunder-med text-[32px] text-px-black lg:h-[130px] lg:w-[130px] lg:text-[20px]"
                                                    style={{ width: item.width, height: item.height, backgroundColor: item.bg }}>
                                                    {item.label}
                                                </span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeService;
