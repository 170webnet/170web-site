"use client";
import PrimaryOffCanvas from "@/components/offcanvas/PrimaryOffCanvas";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import HeaderMenu from "./subComponents/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";

const StartupAgencyHeader = () => {
   const { toggleMainSidebar, isMainSidebarOpen } = useGlobalContext();
   const isDarkTheme = useIsDarkRoute();

   // Apply theme-specific dropdown background styles (light or dark)
   const dropdownBackgroundCls = isDarkTheme
      ? "dropdown-black-bg"
      : "dropdown-white-bg";
   return (
      <>
         <header>
            <div className="px-header-area header-transparent py-[15px] xl:py-0">
               <div className="mx-auto w-full max-w-[1550px] px-3">
                  <div className="grid grid-cols-12 gap-x-6 items-center">
                     <div className="col-span-6 md:col-span-3 lg:col-span-4">
                        <div className="px-header-logo">
                           <Link href="/">
                              <Image width={90} height={32} src="/assets/img/logo/logo-white.png" alt="logo white" />
                           </Link>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-9 lg:col-span-8">
                        <div className="px-header-box flex justify-end items-center">
                           <div className={`px-header-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} hidden xl:block`}>
                              <nav className="tp-mobile-menu-active">
                                 <HeaderMenu />
                              </nav>
                           </div>
                           <div className="px-header-action">
                              <button
                                 type="button"
                                 onClick={toggleMainSidebar}
                                 className="px-header-bar tp-offcanvas-open-btn ml-[40px]"
                                 aria-label="Open sidebar menu"
                                 aria-expanded={isMainSidebarOpen}
                                 aria-controls="main-sidebar"
                              >
                                 <span aria-hidden="true"></span>
                                 <span aria-hidden="true"></span>
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

export default StartupAgencyHeader;