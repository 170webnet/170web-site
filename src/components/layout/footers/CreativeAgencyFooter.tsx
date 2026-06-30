"use client";
import { Mail } from "lucide-react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { ArrowScrollIcon } from "@/svg";
import Link from "next/link";

const CreativeAgencyFooter = () => {
    const currentYear = new Date().getFullYear();
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const footerBackground = isDarkTheme ? "" : "#f7f7f7";

    return (
        <footer>
            <div className="pb-[30px]" style={{ backgroundColor: footerBackground }}>
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="p-[20px] pt-[120px] pb-[20px] rounded-[16px]">
                        <div className="mx-auto w-full max-w-[1830px] px-3">
                            <div className="pt-[110px] max-[1199px]:pt-[80px] pb-[50px] border-b border-[rgba(10,10,10,0.08)]">
                                <div className="grid grid-cols-12 gap-x-6 items-end">
                                    <div className="col-span-12 lg:col-span-8">
                                        <div className="mb-[20px]">
                                            <h4 className="font-thunder font-semibold text-[100px] max-[991px]:text-[75px] max-[767px]:text-[60px] leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white mb-0">Thinking <br /> of something big</h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4">
                                        <div className="text-left lg:text-right mb-[20px] -translate-y-[45px] max-[991px]:translate-y-0">
                                            <SmartLink
                                                className="inline-block rounded-[50px] px-[36px] py-[17px] text-[15px] font-semibold uppercase tracking-[-0.6px] text-px-white bg-px-black dark:text-px-black dark:bg-px-white border border-transparent transition-colors duration-300 hover:text-px-white hover:border-px-orange hover:bg-px-orange"
                                                href="/contact-us"
                                            >
                                                Let&apos;s talk!
                                            </SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[55px] border-b border-[rgba(10,10,10,0.08)] dark:border-white/[0.08]">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
                                        <div className="pr-[40px] max-[1199px]:pr-0 pb-[60px]">
                                            <h4 className="font-medium text-[24px] leading-[1.25] mb-[20px] tracking-[-0.02em] text-px-black dark:text-white">Our Newsletter</h4>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Your email address"
                                                    className="w-full h-[60px]! px-[35px]! pr-[60px]! rounded-[40px]! text-[20px]! font-medium! leading-none! bg-transparent! text-px-black! dark:text-px-white! border! border-[rgba(6,2,0,0.10)]! dark:border-white/10! placeholder:text-[20px]! placeholder:font-medium! placeholder:leading-none! placeholder:text-black/60! dark:placeholder:text-px-white! focus:border-px-black! dark:focus:border-px-white!"
                                                />
                                                <button
                                                    type="submit"
                                                    aria-label="Subscribe to newsletter"
                                                    className="absolute top-1/2 right-[10px] -translate-y-1/2 h-[40px] w-[40px] inline-block text-center leading-none rounded-full text-px-white bg-px-black dark:text-px-black dark:bg-px-white transition-colors hover:text-px-white hover:bg-px-orange"
                                                >
                                                    <Mail />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
                                        <div className="pl-[160px] max-[1599px]:pl-[60px] max-[1399px]:pl-0 pb-[60px]">
                                            <div className="grid grid-cols-12 gap-x-6 items-center">
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="max-[1199px]:mb-[20px]">
                                                        <h4 className="font-medium text-[16px] leading-none mb-[20px] tracking-[-0.02em] text-[rgba(10,10,10,0.5)] dark:text-white/50">Call us</h4>
                                                        <div>
                                                            <Link className="relative inline-block text-[24px] max-[1399px]:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white after:absolute after:content-[''] after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:right-auto hover:after:left-0 hover:after:w-full" href="tel:+(213)555-8573">+(213) 555-8573</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="pl-[5px] max-[1199px]:pl-0 max-[1199px]:mb-[20px]">
                                                        <h4 className="font-medium text-[16px] leading-none mb-[20px] tracking-[-0.02em] text-[rgba(10,10,10,0.5)] dark:text-white/50">Drop us a line</h4>
                                                        <div>
                                                            <Link className="relative inline-block text-[24px] max-[1399px]:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white after:absolute after:content-[''] after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:right-auto hover:after:left-0 hover:after:w-full" href="mailto:inquiry@agntix.com">inquiry@agntix.com</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="pl-[50px] max-[1199px]:pl-0">
                                                        <h4 className="font-medium text-[16px] leading-none mb-[20px] tracking-[-0.02em] text-[rgba(10,10,10,0.5)] dark:text-white/50">Skype</h4>
                                                        <div>
                                                            <Link className="relative inline-block text-[24px] max-[1399px]:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white after:absolute after:content-[''] after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:right-auto hover:after:left-0 hover:after:w-full" href="#">170web.agency</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[45px]">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="text-center md:text-left mb-[10px]">
                                            <p className="font-medium text-[18px] leading-[1.2] mb-0 tracking-[-0.02em] text-[rgba(10,10,10,0.5)] dark:text-white/50">© {currentYear} 170web, All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="text-center md:text-right mb-[10px]">
                                            <Link className="inline-block text-[24px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white" href="#top">
                                                Back to top
                                                <span className="ml-[8px] text-px-black dark:text-white">
                                                    <ArrowScrollIcon />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default CreativeAgencyFooter;
