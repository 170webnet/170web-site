"use client";
import { X } from "lucide-react";
import { SiDribbble, SiInstagram, SiYoutube } from "react-icons/si";

import { PhotoProviderWrapper } from "../wrappers";
import useGlobalContext from "@/hooks/useContext";
import { usePathname } from "next/navigation";
import { PhotoView } from "react-photo-view";
import { ImageDT } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";
import MobileMenus from "../layout/headers/subComponents/MobileMenus";

const galleryImages: ImageDT[] = [
    { id: 1, imgSrc: "/assets/img/offcanvas/offcanvas-1.jpg" },
    { id: 2, imgSrc: "/assets/img/offcanvas/offcanvas-2.jpg" },
    { id: 3, imgSrc: "/assets/img/offcanvas/offcanvas-3.jpg" },
    { id: 4, imgSrc: "/assets/img/offcanvas/offcanvas-4.jpg" }
];

const PrimaryOffCanvas = () => {
    const { isMainSidebarOpen, toggleMainSidebar } = useGlobalContext();
    const pathname = usePathname();

    // Detect dark version route
    const isDark = pathname?.startsWith("/dark") ?? false;

    return (
        <>
            <div className={`tp-offcanvas-area ${isMainSidebarOpen ? "opened" : ""}`}>
                <div className={`tp-offcanvas-wrapper ${isDark ? "offcanvas-black-bg" : "offcanvas-white-bg"}`}>
                    <div className="tp-offcanvas-top flex items-center justify-between mb-[90px]">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image width={120} height={42} className="logo-1" src="/assets/img/logo/logo-orange.png" alt="logo-orange" />
                                <Image width={120} height={42} className="logo-2" src="/assets/img/logo/logo-orange.png" alt="logo-orange" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button
                                type="button"
                                onClick={toggleMainSidebar}
                                className="tp-offcanvas-close-btn"
                                aria-label="Close sidebar"
                            >
                                <span aria-hidden="true">
                                    <X />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content hidden xl:block mb-[45px]">
                            <h3 className="font-bold text-[40px] leading-none tracking-[-0.8px] mb-[15px] text-px-black">Hello There!</h3>
                            <p className="text-[16px] font-normal leading-[24px] text-[#414144]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                        <div className="tp-offcanvas-menu xl:hidden">
                            <nav><MobileMenus /></nav>
                        </div>
                        <div className="tp-offcanvas-gallery hidden xl:block mb-[65px]">
                            <div className="grid grid-cols-12 gap-x-[2px]">
                                <PhotoProviderWrapper>
                                    {galleryImages.map((image: ImageDT) => (
                                        <div className="col-span-3 md:col-span-3" key={image.id}>
                                            <div className="tp-offcanvas-gallery-img fix">
                                                <PhotoView src={image.imgSrc}>
                                                    <Image style={{ width: "auto", height: "auto" }} width={82} height={82} src={image.imgSrc} alt={`gallery image${image.id}`} />
                                                </PhotoView>
                                            </div>
                                        </div>
                                    ))}
                                </PhotoProviderWrapper>
                            </div>
                        </div>
                        <div className="tp-offcanvas-contact mb-[55px]">
                            <h3 className="tp-offcanvas-title sm text-[20px] font-bold mb-[15px] uppercase text-px-black">Information</h3>
                            <ul className="list-none">
                                <li className="[&:not(:last-child)]:mb-[2px]"><Link href="tel:1245654">+ 4 20 7700 1007</Link></li>
                                <li className="[&:not(:last-child)]:mb-[2px]"><Link href="mailto:hello@170web.com">hello@170web.com</Link></li>
                                <li className="[&:not(:last-child)]:mb-[2px]"><Link href="#">Avenue de Roma 158b, Lisboa</Link></li>
                            </ul>
                        </div>
                        <div className="tp-offcanvas-social">
                            <h3 className="tp-offcanvas-title sm text-[20px] font-bold mb-[15px] uppercase text-px-black">Follow Us</h3>
                            <ul className="flex items-center list-none">
                                <li className="[&:not(:last-child)]:mr-[8px]">
                                    <Link href="#"><SiInstagram /></Link>
                                </li>
                                <li className="[&:not(:last-child)]:mr-[8px]">
                                    <Link href="#"><SiDribbble /></Link>
                                </li>
                                <li className="[&:not(:last-child)]:mr-[8px]">
                                    <Link href="#"><SiYoutube /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* overlay */}
            <button
                type="button"
                onClick={toggleMainSidebar}
                className={`body-overlay ${isMainSidebarOpen ? "opened" : ""}`}
                aria-label="Close sidebar overlay"
            />
        </>
    );
};

export default PrimaryOffCanvas;