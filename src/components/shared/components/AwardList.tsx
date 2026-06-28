import { AwardItemProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const AwardList:React.FC<AwardItemProps> = ({id, image, title, nomination, year}) => {
    return (
        <div
            key={id}
            className="px-award-item px-fade-anim"
            data-delay={""}
        >
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="px-award-num">
                        <span>({String(id).padStart(3, "0")})</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="px-award-category flex items-center gap-2">
                        <Image
                            src={image}
                            alt={title}
                            width={20}
                            height={20}
                        />
                        <span>{title}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="px-award-nomination">
                        <span>{nomination}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="px-award-year md:text-right">
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardList;