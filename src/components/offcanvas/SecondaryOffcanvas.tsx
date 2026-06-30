import { SiFacebook, SiX, SiDribbble, SiYoutube } from "react-icons/si";

import { offcanvasMenu } from "@/data/MenuRenderer/offcanvas-menu";
import useGlobalContext from "@/hooks/useContext";
import { BlogBtnArrowIcon } from "@/svg";
import { SmartLink } from "../common";
import { Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const socialLinks = [
    {
        id: "facebook",
        href: "#",
        icon: <SiFacebook />,
    },
    {
        id: "dribbble",
        href: "#",
        icon: <SiDribbble />,
    },
    {
        id: "twitter",
        href: "#",
        icon: <SiX />,
    },
    {
        id: "youtube",
        href: "#",
        icon: <SiYoutube />,
    },
];

const SecondaryOffcanvas = ({ menuOpenTemp }: { menuOpenTemp: boolean }) => {
    const { isSecondarySidebarOpen } = useGlobalContext();

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    // Toggles dropdown menu open/close state in accordion style
    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <div id="offcanvasMenu" className={`px-offcanvas-2-area tp-offcanvas-2-area p-relative ${isSecondarySidebarOpen ? "menu-open" : ""} ${menuOpenTemp ? "menu-open-temp" : ""}`}>
            <div className="offcanvas-bg" id="offcanvasBg"></div>
            <div className="offcanvas-menu pt-[110px] px-[30px] pb-0 lg:pt-[155px] xl:px-[100px] mb-[60px]">
                <div className="w-full px-3">
                    <div className="grid grid-cols-12 gap-x-6 items-end">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="px-offcanvas-2-left">
                                <div className="tp-offcanvas-menu counter-row">
                                    <nav>
                                        <ul>
                                            {offcanvasMenu.map((item) => {
                                                const hasSubmenu =
                                                    item.submenu && item.submenu.length > 0;

                                                const isOpen =
                                                    activeMenu === item.id;

                                                return (
                                                    <li
                                                        key={item.id}
                                                        className={`relative flex flex-wrap items-center gap-x-6 ${hasSubmenu ? "has-dropdown" : ""}`}
                                                    >
                                                        <a
                                                            href="#"
                                                            className="cursor-pointer"
                                                            onClick={() => toggleMenu(item.id)}
                                                        >
                                                            {item.title}
                                                        </a>

                                                        {hasSubmenu && (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => toggleMenu(item.id)}
                                                                    aria-label={isOpen ? "Close submenu" : "Open submenu"}
                                                                    aria-expanded={isOpen}
                                                                    className="shrink-0 text-white/60 transition-colors hover:text-px-primary"
                                                                >
                                                                    <Plus
                                                                        size={30}
                                                                        aria-hidden="true"
                                                                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                                                    />
                                                                </button>
                                                                <ul
                                                                    className="tp-submenu submenu order-last w-full"
                                                                    style={{ display: isOpen ? "block" : "none" }}
                                                                >
                                                                    {item.submenu?.map((subItem) => (
                                                                        <li key={subItem.id}>
                                                                            <SmartLink href={subItem.link}>
                                                                                {subItem.title}
                                                                            </SmartLink>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                                <div className="px-offcanvas-2-left-btn-box hidden lg:flex items-center gap-[10px]">
                                    <div className="w-full">
                                        <Link className="tp-btn-yellow-border postbox-btn w-full text-center text-white! bg-px-black-2! border-px-black-2! rounded-[12px]!" href="#">
                                            <span>
                                                <span className="text-1">Buy Template</span>
                                                <span className="text-2">Buy Template</span>
                                            </span>
                                            <i>
                                                <BlogBtnArrowIcon />
                                                <BlogBtnArrowIcon />
                                            </i>
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <SmartLink className="tp-btn-yellow-border postbox-btn w-full text-center text-white! bg-px-red! border-px-red! rounded-[12px]!" href="/contact-us">
                                            <span>
                                                <span className="text-1">Contact us</span>
                                                <span className="text-2">Contact us</span>
                                            </span>
                                            <i>
                                                <BlogBtnArrowIcon />
                                                <BlogBtnArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 hidden lg:block">
                            <div className="px-offcanvas-2-right">
                                <ul className="flex items-center justify-end gap-x-[8px] mb-[20px]">
                                    {socialLinks.map(({ id, href, icon }) => (
                                        <li key={id} className="list-none">
                                            <Link
                                                href={href}
                                                className="inline-block text-center w-[40px] h-[40px] leading-[36px] rounded-full border border-[rgba(2,11,24,0.1)] text-white bg-px-black-2 transition-all duration-300 hover:bg-px-red hover:border-px-black [&_svg]:inline-block [&_svg]:translate-y-[-1px]"
                                            >
                                                {icon}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-end">
                                    <div className="w-[532px] h-[300px] rounded-[16px]">
                                        <video className="w-full rounded-[16px]" loop muted autoPlay playsInline>
                                            <source src="https://html.aqlova.com/videos/170web/banner-4-1.mp4" type="video/mp4" />
                                        </video>
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

export default SecondaryOffcanvas;