import { PortfolioProjectDT } from '@/types/portfolio-dt';
import SmartLink from '@/components/common/SmartLink';
import Image from 'next/image';
import React from 'react';

const ProjectCard: React.FC<PortfolioProjectDT> = ({ id, image, title, categories }) => {
    return (
        <div key={id} className="col-span-12 lg:col-span-6">
            <div className="mb-[55px]">
                <SmartLink href={`/portfolio-details-2/${id}`}>
                    {/* ripple-image: JS-driven hover effect hook — keep class */}
                    <div className="ripple-image h-[640px] min-[992px]:max-[1199px]:h-[500px] min-[768px]:max-[991px]:h-[550px] min-[1200px]:max-[1399px]:h-[550px] max-[767px]:h-[400px] overflow-hidden rounded-[10px] mb-[25px]">
                        <Image
                            className="object-cover rounded-[10px]"
                            style={{ width: "100%", height: "auto" }}
                            src={image}
                            alt={title}
                            width={905}
                            height={680}
                        />
                    </div>
                </SmartLink>
                <div className="flex justify-between items-center max-[767px]:flex-wrap">
                    <h4 className="text-[26px] min-[1200px]:max-[1399px]:text-[22px] min-[992px]:max-[1199px]:text-[18px] font-semibold tracking-[-0.05em] text-px-black dark:text-white pr-[30px] min-[992px]:max-[1199px]:pr-[20px] max-[767px]:pr-0 max-[767px]:mb-[15px] mb-0">
                        <SmartLink className="transition-colors duration-300 hover:text-px-red" href={`/portfolio-details-2/${id}`}>{title}</SmartLink>
                    </h4>
                    <div className="flex-none">
                        {categories.map((cat) => (
                            <span
                                key={`${cat}-${id}`}
                                className="inline-block text-[12px] min-[992px]:max-[1199px]:text-[11px] font-semibold uppercase text-px-black dark:text-white rounded-[32px] border border-px-black-2/[0.08] dark:border-white/10 px-[19px] min-[1200px]:max-[1399px]:px-[14px] min-[992px]:max-[1199px]:px-[12px] py-[2px] transition-all duration-300 hover:text-white hover:border-px-red hover:bg-px-red [&:not(:first-child)]:ml-[5px] min-[992px]:max-[1199px]:[&:not(:first-child)]:ml-[2px]"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
