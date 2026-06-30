import { AwardItemProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const AwardList:React.FC<AwardItemProps> = ({id, image, title, nomination, year}) => {
    return (
        <div
            key={id}
            className="px-fade-anim py-[27px] border-b border-[rgba(10,10,10,0.08)] dark:border-white/10"
            data-delay={""}
        >
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="font-medium text-[16px] tracking-[-0.03em] text-px-black dark:text-white md:text-[11px] lg:text-[16px]">
                        <span>({String(id).padStart(3, "0")})</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="flex items-center gap-2 max-md:py-[7px]">
                        <Image
                            src={image}
                            alt={title}
                            width={20}
                            height={20}
                        />
                        <span className="font-medium text-[18px] tracking-[-0.04em] text-px-black dark:text-white md:text-[16px] lg:text-[18px]">{title}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div>
                        <span className="font-medium text-[16px] tracking-[-0.03em] text-px-black dark:text-white">{nomination}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="md:text-right max-md:py-[7px]">
                        <span className="font-medium text-[16px] tracking-[-0.03em] text-px-black dark:text-white md:text-[12px] lg:text-[16px]">{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardList;
