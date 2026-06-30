import { quickLinks, socialLinks } from "@/data/footer-data";
import Link from "next/link";

interface footerPropsDt {
    sectionBgClass?: string;
    copyrightClassName?: string;
}

const MainFooter: React.FC<footerPropsDt> = ({ sectionBgClass = "#0A0A0A", copyrightClassName = "" }) => {
    return (
        <footer className="text-white" style={{ backgroundColor: sectionBgClass }}>
            {/* Top Footer */}
            <div className="pt-[80px] pb-[35px] min-[768px]:pt-[90px] min-[1200px]:pt-[125px]">
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="grid grid-cols-12 gap-x-6 items-center">

                        {/* About */}
                        <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                            <div
                                className="pb-[40px] px-fade-anim"
                                data-delay=".3"
                            >
                                <h4 className="mb-[30px] font-bold leading-none tracking-[-0.06em] text-white text-[50px] min-[768px]:text-[65px] min-[992px]:text-[50px] min-[1200px]:text-[60px] min-[1400px]:text-[75px] min-[1600px]:text-[80px]">
                                    Helping<br className="min-[768px]:hidden min-[992px]:inline" />start-ups scale & grow.
                                </h4>

                                <div className="flex flex-wrap items-center gap-2">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            key={`${item.href}-${index}`}
                                            href={item.href}
                                            aria-label={item.label}
                                            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-px-red"
                                        >
                                            {item.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5">
                            <div
                                className="pb-[40px] px-fade-anim min-[992px]:pl-[40px] min-[1200px]:pl-[55px] min-[1200px]:pr-[50px] min-[1400px]:pl-[130px] min-[1600px]:pl-[150px]"
                                data-delay=".5"
                            >
                                <h4 className="mb-[25px] flex items-center font-semibold text-[18px] leading-none tracking-[-0.02em] text-white before:mr-[9px] before:inline-block before:h-[8px] before:w-[8px] before:-translate-y-[2px] before:rounded-full before:bg-white before:content-['']">
                                    Quick links
                                </h4>

                                <div>
                                    <ul className="flex flex-wrap">
                                        {quickLinks.map((item, index) => (
                                            <li className="mr-[5px] mb-[8px] inline-block list-none" key={`${item.label}-${index}`}>
                                                <Link
                                                    href={item.href}
                                                    className="inline-block rounded-[20px] bg-white/10 px-[20px] py-[13px] text-[14px] font-medium uppercase leading-none tracking-[-0.02em] text-white transition-colors duration-300 hover:bg-px-red"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div
                                className="pb-[40px] mb-[30px] px-fade-anim pl-[20px] min-[1200px]:pl-0 max-[575px]:pl-0"
                                data-delay=".7"
                            >
                                <h4 className="mb-[20px] flex items-center font-semibold text-[18px] leading-none tracking-[-0.02em] text-white before:mr-[9px] before:inline-block before:h-[8px] before:w-[8px] before:-translate-y-[2px] before:rounded-full before:bg-white before:content-['']">
                                    Contact
                                </h4>

                                <div className="mb-[15px]">
                                    <Link
                                        href="mailto:170web@studio.com"
                                        className="mb-[10px] block text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-white transition-colors hover:text-px-red"
                                    >
                                        170web@studio.com
                                    </Link>
                                    <Link
                                        href="tel:+3025550107"
                                        className="block text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-white transition-colors hover:text-px-red"
                                    >
                                        +(302) 555-0107
                                    </Link>
                                </div>

                                <div className="mb-[15px]">
                                    <Link
                                        href="https://www.google.com/maps/"
                                        target="_blank"
                                        className="block text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-white transition-colors hover:text-px-red"
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
            <div className={copyrightClassName}>
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12">
                            <div className="text-center">
                                <h2 className="-translate-x-[10px] font-bold leading-none text-px-red text-[50px] tracking-[-2px] min-[576px]:text-[80px] min-[768px]:text-[116px] min-[768px]:tracking-[-7px] min-[992px]:text-[150px] min-[992px]:tracking-[-7px] min-[1200px]:text-[185px] min-[1200px]:tracking-[-10px] min-[1400px]:text-[234px] min-[1400px]:tracking-[-0.06em] min-[1600px]:text-[290px] min-[1600px]:tracking-[-0.06em]">
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
