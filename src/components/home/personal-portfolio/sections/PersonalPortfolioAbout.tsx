"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { Autoplay } from "swiper/modules";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";

// Data
const services = ["Branding", "Development", "Design", "Branding", "Development", "Design"];

const PersonalPortfolioAbout = () => {
    return (
        <div className="bg-[#f9f9f9] dark:bg-[#1C1D20] pt-[110px] pb-[110px] max-xl:pt-[40px] max-xl:pb-[80px]">
            <div className="container-px">
                {/* TOP */}
                <div className="mb-[100px] lg:max-xl:mb-[60px] max-lg:mb-[30px]">
                    <div className="grid grid-cols-12 gap-x-6 items-center">
                        {/* TITLE */}
                        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
                            <div>
                                <span className="mb-[35px] inline-block text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white max-lg:pb-[20px]">
                                    About me
                                </span>
                                <h4 className="font-thunder font-semibold uppercase leading-[0.8] tracking-[1px] text-[130px] lg:max-xl:text-[75px] md:max-lg:text-[60px] max-md:text-[80px] text-px-black dark:text-white">
                                    What i do
                                </h4>
                            </div>
                        </div>

                        {/* SLIDER */}
                        <div className="xl:col-start-2 col-span-12 lg:col-span-6 xl:col-span-6">
                            <div className="inline-block pt-[15px]">
                                <div className="relative">
                                    <Swiper
                                        className="h-[330px] [&_.swiper-wrapper]:pt-[15px]"
                                        direction="vertical"
                                        slidesPerView={3}
                                        loop={true}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        {[...services, ...services].map((item, index) => (
                                            <SwiperSlide key={`${item}-${index}`}>
                                                <div>
                                                    <span className="block font-thunder font-semibold uppercase leading-[0.85] tracking-[-0.01em] text-[130px] lg:max-xl:text-[100px] max-md:text-[85px] text-px-black dark:text-white">
                                                        {item}
                                                    </span>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/* fade gradient overlay (was ::after) */}
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(#f9f9f9_10%,#e8e9e800_40%,#e8e9e800_60%,#f9f9f9_90%)] dark:bg-[linear-gradient(#1C1D20_10%,rgba(232,233,232,0)_40%,rgba(232,233,232,0)_60%,#1C1D20_90%)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-12 gap-x-6">
                    {/* IMAGE */}
                    <div className="col-span-12 lg:col-span-5 xl:col-span-5">
                        <div className="pt-[25px] max-xl:pt-0 max-lg:mb-[40px]">
                            <Image
                                className="max-w-full h-auto rounded-[16px] max-lg:w-full"
                                width={440}
                                height={260}
                                src="/assets/img/about/about-6-1.jpg"
                                alt="about"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="xl:col-start-2 col-span-12 lg:col-span-7 xl:col-span-6">
                        <div>
                            <p className="font-medium leading-[1.2] tracking-[-0.03em] text-[36px] xl:max-2xl:text-[30px] lg:max-xl:text-[25px] md:max-lg:text-[35px] max-md:text-[25px] pr-[10px] md:max-lg:pr-0 max-md:pr-0 mb-[45px] md:max-lg:mb-[35px] max-md:mb-[35px] text-px-black dark:text-white [&_span]:font-extrabold">
                                {`I'm`} a French digital designer and web
                                developer with over 10 years of experience.
                                At the crossroads of <span>design,</span> <span>motion</span> and <span>web
                                development,</span> the diversity of my skills allows
                                me to approach design
                            </p>
                            <SmartLink
                                className="px-doubble-effect text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-px-black dark:text-white [&_span]:inline-block"
                                href="/about-me"
                            >
                                <span>More about me</span>
                                <i>
                                    <TextArrowIcon />
                                    <TextArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;
