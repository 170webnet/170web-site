import { Clock } from "lucide-react";
import { SmartLink } from "@/components/common";
import { blogDt } from "@/types/custom-dt";

import Image from "next/image";

const MinimalPortfolioBlogItem: React.FC<blogDt> = ({ id, image, title, category, date }) => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="tp-blog-item mb-30">
                <div className="tp-blog-thumb fix mb-25">
                    <Image width={426} height={446}
                        className="w-full max-w-full h-auto"
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="tp-blog-content">
                    <div className="tp-blog-tag-inner flex items-center mb-20">
                        <span className="tp-blog-tag mr-20">
                            {category}
                        </span>

                        <span className="tp-blog-date">
                            <Clock />
                            {date}
                        </span>
                    </div>

                    <h2 className="tp-blog-tittle">
                        <SmartLink
                            className="common-underline"
                            href={`/blog-details/${id}`}
                        >
                            {title}
                        </SmartLink>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBlogItem;