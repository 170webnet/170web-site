"use client";
import { Mail } from "lucide-react";
import { ArrowScrollIcon, FooterSendMessageIcon } from "@/svg";
import { ScrollLink, SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils/getCurrentYear";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        id: 1,
        title: "Insights",
        image: "/assets/img/social/social-1.png",
        href: "#",
    },
    {
        id: 2,
        title: "Social",
        image: "/assets/img/social/social-2.png",
        href: "#",
    },
    {
        id: 3,
        title: "Design",
        image: "/assets/img/social/social-3.png",
        href: "#",
    },
    {
        id: 4,
        title: "Linkedin",
        image: "/assets/img/social/social-4.png",
        href: "#",
    },
];

const ModernAgencyFooter = () => {
    return (
        <footer>
            <div className="pb-[25px]">
                <div className="mx-auto w-full max-w-[1870px] px-3">
                    {/* design-footer-bg: padding 20px, rounded 16px, light/dark slab */}
                    <div className="rounded-[16px] p-[20px] bg-[#F7F7F7] dark:bg-[#1C1D20]">
                        {/* px-social-bg.px-social-black-bg: always-dark slab, padding 19px 20px, rounded 8px */}
                        <div className="rounded-[8px] px-[20px] py-[19px] bg-[#0A0A0A]">
                            <div className="grid grid-cols-12 gap-x-6 items-center">
                                <div className="col-span-12 md:col-span-6">
                                    {/* px-social-mail: xs(max-767→max-md) 25px + mb-30 */}
                                    <div className="max-md:mb-[30px]">
                                        <Link
                                            className="px-line-lr inline-block font-semibold text-[26px] max-md:text-[25px] leading-none tracking-[-0.02em] text-white"
                                            href="mailto:inquiry@170web.com"
                                        >
                                            <span className="mr-[10px] inline-block [&>svg]:-translate-y-[2px]">
                                                <FooterSendMessageIcon />
                                            </span>
                                            inquiry@170web.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    {/* px-social-icon: per-item hover image rotation/lift (nth-child driven) kept bespoke */}
                                    <div className="px-social-icon md:text-right">
                                        {socialLinks.map((item) => (
                                            <Link className="ml-[4px]" key={item.id} href={item.href}>
                                                <Image
                                                    width={52}
                                                    height={52}
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                                <span>{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* design-footer-wrap: padding 0 55px (xl 0 15px, lg/md/xs 0) */}
                        <div className="px-0 xl:px-[15px] 2xl:px-[55px]">
                            {/* design-footer-top-wrap: pt-110 (below 1200 → 80), bottom border */}
                            <div className="pb-[30px] pt-[80px] xl:pt-[110px] border-b border-b-[rgba(10,10,10,0.08)] dark:border-b-[rgba(255,255,255,0.08)]">
                                <div className="grid grid-cols-12 gap-x-6 items-end">
                                    <div className="col-span-12 lg:col-span-8">
                                        <div className="mb-[20px]">
                                            {/* px-section-title.ff-inter: 130px/600/0.92/-0.06em uppercase Inter; black, white on dark */}
                                            <h4 className="font-sans uppercase font-semibold tracking-[-0.06em] leading-[0.92] text-[40px] md:text-[85px] lg:text-[70px] xl:text-[85px] 2xl:text-[100px] min-[1600px]:text-[130px] text-px-black dark:text-white">
                                                Thinking of something big
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4">
                                        {/* design-footer-top-btn: translateY(-45px) on lg+, 0 on md/xs */}
                                        <div className="text-left lg:text-right mb-[20px] md:translate-y-0 lg:-translate-y-[45px]">
                                            {/* px-btn-black: 15px/600 uppercase, rounded-50, padding 17px 36px; inverts on dark */}
                                            <SmartLink
                                                className="inline-block rounded-[50px] px-[36px] py-[17px] text-[15px] font-semibold uppercase tracking-[-0.6px] text-white bg-px-black hover:bg-px-red hover:text-white dark:text-px-black dark:bg-white dark:hover:bg-px-red dark:hover:text-white"
                                                href="/contact-us"
                                            >
                                                {`Let's`} talk!
                                            </SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* design-footer-middle: pt-55, bottom border */}
                            <div className="pt-[55px] border-b border-b-[rgba(10,10,10,0.08)] dark:border-b-[rgba(255,255,255,0.08)]">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
                                        {/* design-footer-col-1: pr-40 (lg/md/xs 0), pb-60 */}
                                        <div className="pb-[60px] pr-0 xl:pr-[40px]">
                                            {/* design-footer-widget-title: 24px/500/1.25/-0.02em, black; white on dark */}
                                            <h4 className="mb-[20px] text-[24px] font-medium leading-[1.25] tracking-[-0.02em] text-px-black dark:text-white">
                                                Our Newsletter
                                            </h4>
                                            {/* design-footer-widget-input: input restyled — needs ! to beat base input rules */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Your email address"
                                                    className="w-full! h-[60px]! rounded-[40px]! bg-transparent! pl-[35px]! pr-[60px]! py-0! text-[20px]! font-medium! leading-none! text-px-black! placeholder:text-[20px]! placeholder:font-medium! placeholder:text-black/60! border! border-[rgba(6,2,0,0.10)]! focus:border-px-black! dark:text-white! dark:placeholder:text-white! dark:border-[rgba(255,255,255,0.1)]! dark:focus:border-white!"
                                                />
                                                {/* design-footer-widget-input-icon: 40x40 circle, black bg, hover red; inverts on dark */}
                                                <button
                                                    type="submit"
                                                    className="absolute top-1/2 right-[10px] -translate-y-1/2 inline-flex items-center justify-center h-[40px] w-[40px] rounded-full text-white bg-px-black hover:bg-px-red hover:text-white dark:text-px-black dark:bg-white"
                                                >
                                                    <Mail />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
                                        {/* design-footer-right: base pl-160 (lg keeps 160); xl 0, xxl 60, ≥1600 160 */}
                                        <div className="pb-[60px] pl-0 lg:pl-[160px] xl:pl-0 2xl:pl-[60px] min-[1600px]:pl-[160px]">
                                            <div className="grid grid-cols-12 gap-x-6 items-center">
                                                <div className="col-span-12 xl:col-span-4">
                                                    {/* design-footer-col-2: mb-20 below 1200 */}
                                                    <div className="max-xl:mb-[20px]">
                                                        {/* design-footer-widget-title.sm: 16px/500/1/-0.02em, black/50; white/50 dark */}
                                                        <h4 className="mb-[20px] text-[16px] font-medium leading-none tracking-[-0.02em] text-px-black/50 dark:text-white/50">
                                                            Call us
                                                        </h4>
                                                        {/* design-footer-widget-info: a 24px/500/1/-0.02em black (xl 20px); white on dark */}
                                                        <div>
                                                            <Link
                                                                className="px-line-lr text-[24px] xl:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white"
                                                                href="tel:+(213)555-8573"
                                                            >
                                                                +(213) 555-8573
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    {/* design-footer-col-3: pl-5 (below 1200 → 0 + mb-20) */}
                                                    <div className="pl-0 max-xl:mb-[20px] xl:pl-[5px]">
                                                        <h4 className="mb-[20px] text-[16px] font-medium leading-none tracking-[-0.02em] text-px-black/50 dark:text-white/50">
                                                            Drop us a line
                                                        </h4>
                                                        <div>
                                                            <Link
                                                                className="px-line-lr text-[24px] xl:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white"
                                                                href="mailto:inquiry@agntix.com"
                                                            >
                                                                inquiry@agntix.com
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    {/* design-footer-col-4: pl-50 (lg/md/xs 0) */}
                                                    <div className="pl-0 xl:pl-[50px]">
                                                        <h4 className="mb-[20px] text-[16px] font-medium leading-none tracking-[-0.02em] text-px-black/50 dark:text-white/50">
                                                            Skype
                                                        </h4>
                                                        <div>
                                                            <Link
                                                                className="px-line-lr text-[24px] xl:text-[20px] font-medium leading-none tracking-[-0.02em] text-px-black dark:text-white"
                                                                href="#"
                                                            >
                                                                170web.agency
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* design-copyright-area: pt-30 pb-10 */}
                            <div className="pt-[30px] pb-[10px]">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-span-6">
                                        {/* design-copyright-text p: 18px/500/1.2/-0.02em black/50; white/50 dark */}
                                        <div className="text-center md:text-left mb-[10px]">
                                            <p className="mb-0 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-px-black/50 dark:text-white/50">
                                                © {getCurrentYear()} 170web, All rights reserved.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        {/* design-copyright-backtoTop a: 24px/500/1/-0.02em black; white dark; span ml-8 */}
                                        <div className="smooth text-center md:text-right mb-[10px] [&_a]:text-[24px] [&_a]:font-medium [&_a]:leading-none [&_a]:tracking-[-0.02em] [&_a]:text-px-black dark:[&_a]:text-white [&_a_span]:ml-[8px] [&_a_span]:text-px-black dark:[&_a_span]:text-white">
                                            <ScrollLink target="#hero">
                                                Back to top
                                                <span>
                                                    <ArrowScrollIcon />
                                                </span>
                                            </ScrollLink>
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

export default ModernAgencyFooter;
