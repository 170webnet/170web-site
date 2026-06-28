"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { EmailIcon, ArrowScrollIcon } from "@/svg";
import Link from "next/link";

const CreativeAgencyFooter = () => {
    const currentYear = new Date().getFullYear();
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const footerBackground = isDarkTheme ? "" : "#f7f7f7";

    return (
        <footer>
            <div className="design-footer-area pb-30" style={{ backgroundColor: footerBackground }}>
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="design-footer-bg pt-120 pb-20">
                        <div className="mx-auto w-full max-w-[1830px] px-3">
                            <div className="design-footer-top-wrap pb-50">
                                <div className="grid grid-cols-12 gap-x-6 items-end">
                                    <div className="col-span-12 lg:col-span-8">
                                        <div className="design-footer-top-text mb-20">
                                            <h4 className="px-section-title ff-thunder fs-100 mb-0">Thinking <br /> of something big</h4>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4">
                                        <div className="design-footer-top-btn text-left lg:text-right mb-20">
                                            <SmartLink className="px-btn-black hover-orange-bg" href="/contact-us">Let&apos;s talk!</SmartLink>
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
                                                <button
                                                    type="submit"
                                                     aria-label="Subscribe to newsletter"
                                                    className="design-footer-widget-input-icon hover-bg-orange"
                                                >
                                                    <EmailIcon />
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
                            <div className="design-copyright-area pt-45">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="design-copyright-text text-center md:text-left mb-10">
                                            <p>© {currentYear} 170web, All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="design-copyright-backtoTop text-center smooth  md:text-right smooth mb-10">
                                            <Link href="#top">
                                                Back to top
                                                <span>
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