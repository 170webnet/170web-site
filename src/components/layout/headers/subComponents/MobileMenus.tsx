"use client";

import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";
import { Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MobileMenus = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    // Retrieves the dynamically selected header menu (light or dark) from custom hook

    const isDark = useIsDarkRoute();
    const menuItems: MenuItem[] = isDark ? darkMenu : lightMenu;

    // Toggles dropdown menu open/close state in accordion style
    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <ul className="list-none">
            {menuItems.map((menu) => {
                const isActive = activeMenu === menu.id;

                const hasDropdown =
                    menu.type === "mega" ||
                    (menu.type === "dropdown" && !!menu.links?.length);

                return (
                    <li
                        key={menu.id}
                        className={`relative flex flex-wrap items-center has-dropdown ${isActive ? "active" : ""}`}
                    >
                        {/* MENU TITLE */}
                        <a
                            href={menu.href}
                            onClick={(e) => {
                                if (hasDropdown) {
                                    e.preventDefault();
                                    toggleMenu(menu.id);
                                }
                            }}
                            className="block grow py-[10px] text-[20px] font-medium text-px-body dark:text-px-white"
                        >
                            {menu.label}
                        </a>

                        {/* + / × BUTTON */}
                        {hasDropdown && (
                            <button
                                type="button"
                                className="tp-menu-close shrink-0 text-px-body transition-colors duration-300 hover:text-px-primary dark:text-px-white"
                                onClick={() => toggleMenu(menu.id)}
                                aria-label={isActive ? "Close menu" : "Open menu"}
                                aria-expanded={isActive}
                            >
                                <Plus
                                    size={18}
                                    aria-hidden="true"
                                    className={`transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
                                />
                            </button>
                        )}

                        {/* ===== MEGA MENU ===== */}
                        {menu.type === "mega" && (
                            <div
                                className="tp-submenu submenu px-megamenu order-last w-full"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                <div className="grid grid-cols-12 gap-x-6">
                                    {/* COLUMN MENU */}
                                    {menu.columns?.map((col) => (
                                        <div className="col-span-12 xl:col-span-6" key={col.title}>
                                            <div className="px-megamenu-box py-[20px]">
                                                <div className="block border-b border-black/[0.08] pb-[10px] mb-[10px] dark:border-white/10">
                                                    <span className="pl-[18px] text-[20px] font-semibold text-px-black">{col?.title}</span>
                                                </div>
                                                {/* TEXT LINKS */}
                                                {col.links && (
                                                    <ul className="tp-submenu">
                                                        {col.links.map((item, j) => (
                                                            <li key={`${item.href}-${j}`}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block rounded-[10px] px-[20px] py-[8px] text-[17px] text-px-body transition-colors hover:bg-[#f8f8fb] dark:text-px-white dark:hover:bg-[#2c2b2e]"
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ===== SIMPLE SUBMENU ===== */}
                        {menu.type === "dropdown" && menu.links && (
                            <ul
                                className="tp-submenu submenu order-last w-full"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {menu.links.map((sub, i) => (
                                    <li key={`${sub.href}-${i}`}>
                                        <Link
                                            href={sub.href}
                                            className="block rounded-[10px] px-[20px] py-[8px] text-[17px] text-px-body transition-colors hover:bg-[#f8f8fb] dark:text-px-white dark:hover:bg-[#2c2b2e]"
                                        >
                                            {sub.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobileMenus;
