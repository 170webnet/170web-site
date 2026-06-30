"use client";
import { ServiceItemDT } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface ServiceItemProps extends ServiceItemDT {
    index: number;
    /** Modo controlado (pai gerencia o accordion). Se omitido, o item gerencia o próprio estado. */
    isOpen?: boolean;
    onToggle?: () => void;
}

const StartupAgencyServiceItem: React.FC<ServiceItemProps> = ({ id, title, image, description, categories, index, isOpen, onToggle }) => {
    // Fallback não-controlado: usado por páginas que não gerenciam o estado
    // (ex.: minimal-portfolio). Inicia aberto no primeiro item.
    const [selfOpen, setSelfOpen] = useState<boolean>(index === 0);
    const controlled = onToggle !== undefined;
    const open = controlled ? !!isOpen : selfOpen;
    const toggle = controlled ? onToggle! : () => setSelfOpen((v) => !v);

    return (
        // .accordion-items: relative + divisória inferior (px-service-accordion-wrap → white/10)
        <div className="relative border-b border-white/10">
            <div>
                {/* .accordion-buttons (width 100%, padding 24px 0, 30px/600, branco) */}
                <div
                    className="relative w-full cursor-pointer py-[24px] text-start text-[30px] font-semibold leading-none tracking-[-0.03em] text-white max-[767px]:text-[22px] min-[768px]:max-[991px]:text-[23px] min-[992px]:max-[1199px]:text-[22px] min-[1200px]:max-[1399px]:text-[25px]"
                    role="button"
                    tabIndex={0}
                    aria-expanded={open}
                    onClick={toggle}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggle();
                        }
                    }}
                >
                    <div className="relative">
                        <div className="grid grid-cols-12 items-center gap-x-6">
                            <div className="col-span-2 lg:col-span-4 xl:col-span-2 2xl:col-span-3">
                                {/* .px-service-num span */}
                                <div>
                                    <span className="flex text-[16px] font-semibold tracking-[-0.04em] text-white/60">({id})</span>
                                </div>
                            </div>
                            <div className="col-span-10 lg:col-span-8 xl:col-span-10 2xl:col-span-9">
                                {/* .px-service-title h4 */}
                                <div>
                                    <h4 className="mb-0 text-start text-[22px] font-semibold tracking-[-0.04em] text-white transition-[0.4s] ease-in-out max-[767px]:text-[16px]">{title}</h4>
                                </div>
                            </div>
                        </div>
                        {/* .accordion-icon: círculo 46x46 com plus (::before vertical gira 90° quando aberto → minus) */}
                        <span
                            className={`absolute right-[7px] top-[15px] inline-block h-[46px] w-[46px] rounded-full border border-white/[0.14] max-[767px]:h-[30px] max-[767px]:w-[30px] before:absolute before:left-1/2 before:top-1/2 before:h-[14px] before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[2px] before:bg-white before:transition-[0.4s] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-[14px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-white after:content-[''] ${open ? "before:rotate-90" : ""}`}
                        ></span>
                    </div>
                </div>
            </div>

            {/* Collapse controlado por estado: animação de altura via grid-rows 0fr→1fr */}
            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    {/* .accordion-body: padding 20px 0 60px (lg/md/xs → 0 0 20px) */}
                    <div className="pt-[20px] pb-[60px] max-lg:pt-0 max-lg:pb-[20px]">
                        <div className="grid grid-cols-12 items-center gap-x-6">
                            <div className="col-span-12 xl:col-span-10 xl:col-start-3 2xl:col-span-9 2xl:col-start-4">
                                <div className="grid grid-cols-12 items-center gap-x-6">
                                    <div className="col-span-12 lg:col-span-8 xl:col-span-7">
                                        {/* .px-service-content (flex): lg/md pb20, xs flex-wrap pb10 */}
                                        <div className="flex items-center max-lg:pb-[20px] max-[767px]:flex-wrap max-[767px]:pb-[10px]">
                                            {/* .px-service-thumb */}
                                            <div className="flex-none mr-[55px] min-[1200px]:max-[1399px]:mr-[20px] max-[767px]:mr-0 max-[767px]:mb-[15px]">
                                                <Image width={260} height={140} src={image} alt={title} className="rounded-[16px]" />
                                            </div>
                                            {/* .px-service-content p */}
                                            <div>
                                                <p className="mb-0 text-[16px] font-semibold leading-[1.5] tracking-[-0.04em] text-white/60 min-[992px]:max-[1199px]:text-[14px] min-[1200px]:max-[1399px]:text-[15px] [&_br]:max-[1599px]:hidden">{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                                        {/* .px-service-category (pl 50px, lg-down 0) */}
                                        <div className="pl-[50px] max-xl:pl-0">
                                            {categories?.map((cat, i) => (
                                                <span
                                                    key={`${cat}-${i}`}
                                                    style={{ marginLeft: "4px" }}
                                                    className="mb-[6px] inline-block rounded-[16px] bg-white/[0.08] px-[16px] py-[11px] text-[13px] font-semibold leading-none tracking-[0] text-white min-[992px]:max-[1199px]:px-[14px] min-[1200px]:max-[1399px]:text-[12px]"
                                                >
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
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

export default StartupAgencyServiceItem;
