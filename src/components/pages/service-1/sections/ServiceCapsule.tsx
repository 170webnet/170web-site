"use client";
import { SERVICE_CAPSULE_ITEMS } from "@/data/service-capsule-data";
import { useThrowable } from "@/hooks/useThrowable";

const ServiceCapsule = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    return (
        <div>
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="relative border border-[rgba(30,30,30,0.1)] dark:border-white/10">
                            <div className="relative" data-px-throwable-scene="true" ref={sceneRef}>
                                <div className="pt-[60px] pl-[40px]">
                                    <span className="mb-[30px] inline-block text-[18px] font-normal leading-[1.6] tracking-[-0.05em] text-px-black dark:text-white">Digital Services</span>
                                    <h3 className="font-thunder text-[60px] font-semibold uppercase leading-[0.8] tracking-[-0.01em] text-px-black md:text-[70px] lg:text-[80px] xl:text-[100px] dark:text-white">We can <br /> help with...</h3>
                                </div>
                                <div className="relative mt-[-270px] h-[650px] overflow-hidden pointer-events-none [&>*]:absolute [&>*]:left-0 [&>*]:top-0 [&>*]:mb-0 [&>*]:inline-block [&>*]:select-none [&>*]:pointer-events-auto [&>*]:transition-none">
                                    {SERVICE_CAPSULE_ITEMS.map((item) => (
                                        <p data-px-throwable-el="" key={item.id}>
                                            <span
                                                className="inline-flex items-center justify-center rounded-full font-thunder-med text-[20px] text-px-black xl:text-[32px]"
                                                style={{ width: item.width, height: item.height, backgroundColor: item.bg }}>
                                                {item.label}
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[-2px] leading-none [&>span]:block [&>span]:w-full [&>span]:bg-px-black dark:[&>span]:bg-white [&>span:nth-child(1)]:h-[10px] [&>span:nth-child(2)]:mt-[8px] [&>span:nth-child(2)]:h-[9px] [&>span:nth-child(3)]:h-[6px] [&>span:nth-child(4)]:h-[4px] [&>span:nth-child(5)]:h-[2px] [&>span:nth-child(5)]:translate-y-[-4px]">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCapsule;
