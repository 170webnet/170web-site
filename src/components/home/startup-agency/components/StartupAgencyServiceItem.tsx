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
        <div className="accordion-items">
            <div className="accordion-header">
                <div
                    className={`accordion-buttons cursor-pointer ${!open ? "collapsed" : ""}`}
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
                    <div className="px-service-item">
                        <div className="grid grid-cols-12 gap-x-6 items-center">
                            <div className="col-span-2 lg:col-span-4 xl:col-span-2 2xl:col-span-3">
                                <div className="px-service-num">
                                    <span>({id})</span>
                                </div>
                            </div>
                            <div className="col-span-10 lg:col-span-8 xl:col-span-10 2xl:col-span-9">
                                <div className="px-service-title">
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                        <span className="accordion-icon"></span>
                    </div>
                </div>
            </div>

            {/* Collapse controlado por estado: animação de altura via grid-rows 0fr→1fr */}
            <div
                className={`accordion-collapse grid transition-[grid-template-rows] duration-500 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    <div className="accordion-body">
                        <div className="grid grid-cols-12 gap-x-6 items-center">
                            <div className="col-span-12 xl:col-span-10 xl:col-start-3 2xl:col-span-9 2xl:col-start-4">
                                <div className="grid grid-cols-12 gap-x-6 items-center">
                                    <div className="col-span-12 lg:col-span-8 xl:col-span-7">
                                        <div className="px-service-content flex items-center">
                                            <div className="px-service-thumb">
                                                <Image width={260} height={140} src={image} alt={title} />
                                            </div>
                                            <div className="px-service-content">
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                                        <div className="px-service-category">
                                            {categories?.map((cat, i) => (
                                                <span key={`${cat}-${i}`} style={{ marginLeft: "4px" }}>{cat}</span>
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
