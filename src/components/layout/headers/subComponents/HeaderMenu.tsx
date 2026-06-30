"use client";

import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";

export default function HeaderMenu() {
    const isDark = useIsDarkRoute();
    const menu: MenuItem[] = isDark ? darkMenu : lightMenu;

    return (
        <ul>
            {menu.map((item) => (
                <li key={item.label} className={`has-dropdown ${item.isLastMenu ? 'tp-menu-last' : ''}`}>
                    <a href={item.href} className="mr-[4px]">{item.label}</a>

                    {item.type === "mega" && (
                        <div className="tp-submenu submenu px-megamenu">
                            <div className="grid grid-cols-12 gap-x-6">
                                {item.columns?.map((col, index) => (
                                    <div className="col-span-12 xl:col-span-6" key={`${col.title}-${index}`}>
                                        <div className="px-megamenu-box">
                                            <div className="block pb-[10px] mb-[10px] border-b border-black/[0.08] dark:border-white/10">
                                                <span className="block pl-[18px] text-[20px] font-semibold text-px-black dark:text-white">{col.title}</span>
                                            </div>
                                            <ul>
                                                {col.links.map((link, index) => (
                                                    <li key={`${link.href}-${index}`}>
                                                        <a href={link.href}>{link.label}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {item.type === "dropdown" && (
                        <ul className="tp-submenu submenu">
                            {item.links?.map((link, index) => (
                                <li key={`${link.href}-${index}`}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}
