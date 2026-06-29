"use client";
import { Mail } from "lucide-react";
import { ArrowScrollIcon, FooterSendMessageIcon } from "@/svg";
import { ScrollLink, SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils/getCurrentYear";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
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
    const isDarkTheme = useIsDarkRoute();
    const footerClasses = {
        backgroundColor: isDarkTheme ? "#1C1D20" : "#F7F7F7",
        footerTitleColor: isDarkTheme ? "" : "text-black",
    }

    return (
        <footer>
            <div className="design-footer-area pb-25">
                <div className="mx-auto w-full max-w-[1870px] px-3">
                    <div className="design-footer-bg" style={{ backgroundColor: footerClasses.backgroundColor }}>
                        <div className="px-social-bg px-social-black-bg" style={{ backgroundColor: "#0A0A0A" }}>
                            <div className="grid grid-cols-12 gap-x-6 items-center">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="px-social-mail">
                                        <Link className="px-line-lr" href="mailto:inquiry@170web.com">
                                            <span>
                                                <FooterSendMessageIcon />
                                            </span>
                                            inquiry@170web.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="px-social-icon md:text-right">
                                        {socialLinks.map((item) => (
                                            <Link style={{marginLeft:"4px"}} key={item.id} href={item.href}>
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
                        <div className="design-footer-wrap">
                            <div className="design-footer-top-wrap pb-30">
                                <div className="grid grid-cols-12 gap-x-6 items-end">
                                    <div className="col-span-12 lg:col-span-8">
                                        <div className="design-footer-top-text mb-20">
                                            <h4 className={`px-section-title ff-inter ${footerClasses.footerTitleColor} text-effect`}>Thinking of something big</h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4">
                                        <div className="design-footer-top-btn text-left lg:text-right mb-20">
                                            <SmartLink className="px-btn-black" href="/contact-us">{`Let's`} talk!</SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="design-footer-middle pt-55">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
                                        <div className="design-footer-widget design-footer-col-1 pb-60">
                                            <h4 className="design-footer-widget-title">Our Newsletter</h4>
                                            <div className="design-footer-widget-input p-relative">
                                                <input type="text" placeholder="Your email address" />
                                                <button type="submit" className="design-footer-widget-input-icon">
                                                    <Mail />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
                                        <div className="design-footer-right pb-60">
                                            <div className="grid grid-cols-12 gap-x-6 items-center">
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="design-footer-widget design-footer-col-2">
                                                        <h4 className="design-footer-widget-title sm">Call us</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="tel:+(213)555-8573">+(213) 555-8573</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="design-footer-widget design-footer-col-3">
                                                        <h4 className="design-footer-widget-title sm">Drop us a line</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="mailto:inquiry@agntix.com">inquiry@agntix.com</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 xl:col-span-4">
                                                    <div className="design-footer-widget design-footer-col-4">
                                                        <h4 className="design-footer-widget-title sm">Skype</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="#">170web.agency</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="design-copyright-area pt-30 pb-10">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="design-copyright-text text-center md:text-left mb-10">
                                            <p>© {getCurrentYear()} 170web, All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="design-copyright-backtoTop text-center smooth  md:text-right smooth mb-10">
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