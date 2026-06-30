"use client";
import PrimaryOffCanvas from '@/components/offcanvas/PrimaryOffCanvas';
import HeaderMenu from './subComponents/HeaderMenu';
import useGlobalContext from '@/hooks/useContext';
import { SmartLink } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import { useIsDarkRoute } from '@/hooks/useIsDarkRoute';

const PersonalPortfolioHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isDarkTheme = useIsDarkRoute();

    // Apply theme-specific dropdown background styles (light or dark)
    const dropdownBackgroundCls = isDarkTheme
        ? "dropdown-black-bg"
        : "dropdown-white-bg";

    return (
        <>
            <header>
                <div className="px-header-style-black header-transparent py-[15px] xl:py-0">
                    <div className="mx-auto w-full max-w-[1870px] px-3">
                        <div className="grid grid-cols-12 gap-x-6 items-center">
                            <div className="col-span-5">
                                <div className={`px-header-6-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} hidden xl:block`}>
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                                <div className="px-header-logo block xl:hidden">
                                    <Link href="/">
                                        <Image width={95} height={33} src="/assets/img/logo/logo-orange.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="px-header-logo text-center hidden xl:block">
                                    <Link href="/">
                                        <Image width={95} height={33} src="/assets/img/logo/logo-orange.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="px-header-6-action flex justify-end items-center">
                                    <div className="px-header-6-info hidden xl:block">
                                        <Link className="px-line-lr" href="mailto:hello@170web.com">Hello@170web.com</Link>
                                    </div>
                                    <div className="px-header-6-btn ml-[25px] hidden xl:block">
                                        <SmartLink className="inline-block rounded-[50px] bg-[#f8f8f8] px-[24px] py-[7px] text-[15px] font-medium uppercase tracking-[-0.6px] text-px-black" href="/contact-me">
                                            Contact me
                                        </SmartLink>
                                    </div>
                                    <div className="px-header-action xl:hidden">
                                        <button
                                            type="button"
                                            onClick={toggleMainSidebar}
                                            className="px-header-bar tp-offcanvas-open-btn ml-[40px]"
                                            aria-label="Open sidebar menu"
                                        >
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Mobile Offcanvas area */}
            <PrimaryOffCanvas />
        </>
    );
};

export default PersonalPortfolioHeader;