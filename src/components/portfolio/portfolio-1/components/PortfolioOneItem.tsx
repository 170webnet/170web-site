import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const PortfolioOneItem: React.FC<PortfolioProjectDT> = ({ id, type, video, image, title, categories }) => {
    return (
        <div className="col-span-12 lg:col-span-6">
            <div className="mb-[55px]">
                <SmartLink href={`/portfolio-details-1/${id}`}>
                    <div className="h-[640px] min-[1200px]:max-[1399px]:h-[550px] min-[992px]:max-[1199px]:h-[500px] min-[768px]:max-[991px]:h-[550px] max-[767px]:h-[400px] overflow-hidden rounded-[10px] mb-[25px]">
                        {type === "video" ? (
                            <video loop muted autoPlay playsInline className="h-full w-full object-cover">
                                <source src={video} type="video/mp4" />
                            </video>
                        ) : (
                            // ripple-image: JS-driven hover effect hook — keep class
                            <div className="ripple-image h-full">
                                <Image
                                    className="max-w-full w-full h-full object-cover rounded-[10px]"
                                    width={905}
                                    height={680}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        )}
                    </div>
                </SmartLink>
                <div className="flex justify-between items-center max-[767px]:flex-wrap">
                    <h4 className="text-[26px] min-[1200px]:max-[1399px]:text-[22px] min-[992px]:max-[1199px]:text-[18px] font-semibold tracking-[-0.05em] text-px-black dark:text-white pr-[30px] min-[992px]:max-[1199px]:pr-[20px] max-[767px]:pr-0 max-[767px]:mb-[15px] mb-0">
                        <SmartLink className="transition-colors duration-300 hover:text-px-orange" href={`/portfolio-details-1/${id}`}>
                            {title}
                        </SmartLink>
                    </h4>
                    <div className="flex-none">
                        {categories?.map((category: string, index: number) => (
                            <span
                                key={`${category}-${index}`}
                                className="inline-block text-[12px] min-[992px]:max-[1199px]:text-[11px] font-semibold uppercase text-px-black dark:text-white rounded-[32px] border border-px-black-2/[0.08] dark:border-white/10 px-[19px] min-[1200px]:max-[1399px]:px-[14px] min-[992px]:max-[1199px]:px-[12px] py-[2px] transition-all duration-300 hover:text-white hover:border-px-red hover:bg-px-orange [&:not(:first-child)]:ml-[5px] min-[992px]:max-[1199px]:[&:not(:first-child)]:ml-[2px]"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioOneItem;
