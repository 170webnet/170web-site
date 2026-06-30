import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

interface PortfolioPropsItem extends PortfolioProjectDT {
    isFirstItem: boolean;
}

const PortfolioTwoItem: React.FC<PortfolioPropsItem> = ({ id, image, type, title, video, description, categories, isFirstItem }) => {
    return (
        <div className={isFirstItem ? "col-span-12 xl:col-span-12" : "col-span-12 lg:col-span-6"}>
            <div className={`mb-[60px] ${isFirstItem ? "lg:mb-[65px]" : "lg:mb-[75px]"}`}>
                <SmartLink href={`/portfolio-details-2/${id}`}>
                    {type === "video" ? (
                        <div className="mb-[25px] w-full overflow-hidden rounded-[10px]">
                            <video className="w-full" loop muted autoPlay playsInline>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div className="mb-[25px] h-[640px] overflow-hidden rounded-[10px] max-[767px]:h-[400px] min-[768px]:max-[991px]:h-[550px] min-[992px]:max-[1199px]:h-[500px] min-[1200px]:max-[1399px]:h-[550px]">
                            <div className="ripple-image h-full">
                                <Image
                                    className="h-full w-full rounded-[10px] object-cover"
                                    width={905}
                                    height={680}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        </div>
                    )}
                </SmartLink>

                <div className="flex items-start justify-between max-[767px]:flex-wrap lg:max-xl:flex-wrap">
                    <div className="max-xl:mb-[15px]">
                        <h4 className="pr-[30px] text-[26px] font-semibold tracking-[-0.05em] text-px-black max-[767px]:mb-[15px] max-[767px]:pr-0 lg:max-xl:pr-[20px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px] dark:text-white">
                            <SmartLink className="transition-colors hover:text-px-orange" href={`/portfolio-details-2/${id}`}>
                                {title}
                            </SmartLink>
                        </h4>
                        {!isFirstItem && (
                            <p className="m-0 pr-[20px] text-[16px] font-normal leading-[1.5] tracking-[-0.03em] text-[#6b7280] lg:text-[14px] xl:text-[16px] [&_br]:hidden min-[768px]:max-[991px]:[&_br]:inline min-[1600px]:[&_br]:inline">{description}</p>
                        )}
                    </div>
                    <div className="flex-[0_0_auto]">
                        {categories?.map((category: string, index: number) => (
                            <span
                                key={`${category}-${index}`}
                                className="inline-block rounded-[32px] border border-[rgba(30,30,30,0.08)] px-[19px] py-[2px] text-[12px] font-semibold uppercase text-px-black transition-all hover:border-px-red hover:bg-px-orange hover:text-white not-first:ml-[5px] lg:px-[12px] lg:text-[11px] lg:max-xl:not-first:ml-[2px] xl:px-[14px] xl:text-[12px] 2xl:px-[19px] dark:border-white/10 dark:text-white"
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

export default PortfolioTwoItem;
