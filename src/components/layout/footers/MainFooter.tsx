import { quickLinks, socialLinks } from "@/data/footer-data";
import Link from "next/link";

interface footerPropsDt {
    sectionBgClass?: string;
    copyrightClassName?: string;
}

const MainFooter: React.FC<footerPropsDt> = ({ sectionBgClass = "#0A0A0A", copyrightClassName = "" }) => {
    return (
        <footer className="px-footer" style={{ backgroundColor: sectionBgClass }}>
            {/* Top Footer */}
            <div className="px-footer-area pt-125 pb-35">
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="grid grid-cols-12 gap-x-6 items-center">

                        {/* About */}
                        <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                            <div
                                className="px-footer-widget px-footer-col-1 pb-40 px-fade-anim"
                                data-delay=".3"
                            >
                                <h4 className="px-footer-widget-title">
                                    Helping<br />start-ups scale & grow.
                                </h4>

                                <div className="px-footer-widget-social">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            key={`${item.href}-${index}`}
                                            style={{ marginRight: "5px" }}
                                            href={item.href}
                                        >
                                            <span>{item.icon}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5">
                            <div
                                className="px-footer-widget px-footer-col-2 pb-40 px-fade-anim"
                                data-delay=".5"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-25">
                                    Quick links
                                </h4>

                                <div className="px-footer-widget-menu">
                                    <ul>
                                        {quickLinks.map((item, index) => (
                                            <li style={{ marginRight: "5px" }} key={`${item.label}-${index}`}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>   
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div
                                className="px-footer-widget px-footer-col-3 pb-40 mb-30 px-fade-anim"
                                data-delay=".7"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-20">
                                    Contact
                                </h4>

                                <div className="px-footer-widget-info">
                                    <Link href="mailto:170web@studio.com">
                                        170web@studio.com
                                    </Link>
                                    <Link href="tel:+3025550107">
                                        +(302) 555-0107
                                    </Link>
                                </div>

                                <div className="px-footer-widget-info">
                                    <Link
                                        href="https://www.google.com/maps/"
                                        target="_blank"
                                    >
                                        4517 Washington Ave. Manchester, <br />
                                        Kentucky 39495
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={`px-copyright-area ${copyrightClassName}`}>
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12">
                            <div className="px-copyright-content text-center">
                                <h2 className="px-copyright-big-text">
                                    170web.Studio
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
