"use client";
import { Plus } from "lucide-react";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

import Image from "next/image";

const brandImages = [
    { img: "/assets/img/brand/brand-1-1.png", width: 85, height: 26 },
    { img: "/assets/img/brand/brand-1-2.png", width: 120, height: 31 },
    { img: "/assets/img/brand/brand-1-3.png", width: 80, height: 18 },
    { img: "/assets/img/brand/brand-1-4.png", width: 132, height: 23 },
    { img: "/assets/img/brand/brand-1-5.png", width: 119, height: 22 },
    { img: "/assets/img/brand/brand-1-6.png", width: 129, height: 14 },
];
const brandDarkImages = [
    { img: "/assets/img/brand/brand-white/brand-1.png", width: 99, height: 30 },
    { img: "/assets/img/brand/brand-white/brand-2.png", width: 114, height: 31 },
    { img: "/assets/img/brand/brand-white/brand-3.png", width: 103, height: 32 },
    { img: "/assets/img/brand/brand-white/brand-4.png", width: 101, height: 54 },
    { img: "/assets/img/brand/brand-white/brand-5.png", width: 99, height: 29 },
    { img: "/assets/img/brand/brand-white/brand-6.png", width: 119, height: 22 },
];

const Brand = () => {
    const isDarkTheme = useIsDarkRoute();
    const brandImagesItems = isDarkTheme ? brandDarkImages : brandImages;

    return (
        <section className="brand-skew-anim pb-[160px] max-lg:py-[80px] max-sm:pt-[40px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">

                {/* Section Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-3">
                        <div className="mb-[40px] max-lg:mb-0">
                            <span className="inline-block text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white max-lg:pb-[20px] max-lg:pt-0 max-md:mb-0">
                                <i className="mr-[10px] inline-grid h-[20px] w-[20px] place-content-center rounded-full bg-[#e8e9e3] text-center text-px-black">
                                    <Plus />
                                </i>
                                Our Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brand List */}
                <div className="grid grid-cols-12 gap-x-[5px]">
                    {brandImagesItems.map((brand, index) => (
                        <div
                            key={`${brand.img}-${index}`}
                            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-2"
                        >
                            <div className="grid min-h-[180px] w-full place-content-center rounded-[14px] bg-white p-[20px] text-center dark:bg-[#1C1D20] max-lg:mb-[5px]">
                                <Image
                                    src={brand.img}
                                    width={brand.width}
                                    height={brand.height}
                                    alt={`Brand ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brand;
