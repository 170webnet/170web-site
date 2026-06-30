import AnimatedCounterTree from "@/components/shared/MetricsCounter/AnimatedCounterThree";
import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";

interface InnerServiceItemProps {
    id: number;
    title: string;
    descriptions: string[];
    categories: string[];
    images: string[];
    isLastItem?: boolean;
}

const InnerServiceItem = ({
    id,
    title,
    descriptions,
    categories,
    images,
    isLastItem = false,
}: InnerServiceItemProps) => {
    return (
        <div
            className={`max-[1199px]:mb-[50px] ${!isLastItem ? "mb-[200px]" : ""
                }`}
        >
            <div className="pl-[100px] max-[1199px]:pl-0">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-4">
                        <div className="max-[1199px]:pb-[30px]">
                            <h1 className="mt-0 mb-0 font-thunder text-[100px] leading-[0.7] font-bold tracking-[0.02em] uppercase text-px-orange min-[576px]:text-[130px] min-[768px]:mt-[7px] min-[768px]:text-[200px] min-[1200px]:text-[300px] min-[1400px]:text-[400px]">
                                <AnimatedCounterTree
                                    end={id}
                                    duration={0.2}
                                />
                            </h1>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-8">
                        <div className="mb-[100px] max-[1199px]:mb-[45px]">
                            <span className="mb-[20px] inline-block text-[14px] leading-none font-medium tracking-[0.02em] text-black/60 uppercase dark:text-white/60">
                                {title}
                            </span>
                            {descriptions.map((description, index) => (
                                <p
                                    key={`desc-${index}`}
                                    className="mb-[40px] pr-[100px] text-[30px] leading-[1.33] font-medium tracking-[-0.01em] text-px-black-2 max-[1199px]:pr-0 max-[767px]:text-[20px] dark:text-white"
                                >
                                    {description}
                                </p>
                            ))}
                        </div>

                        <div className="mb-[100px] max-[1199px]:mb-[50px]">
                            {categories.map((category, index) => (
                                <SmartLink
                                    key={`${category}-${index}`}
                                    href="/service-2"
                                    className="group flex items-center justify-between border-b border-b-[#1e1e1e]/[0.06] py-[17px] first:border-t first:border-t-[#1e1e1e]/[0.06] dark:border-b-white/[0.06] dark:first:border-t-white/[0.06]"
                                >
                                    <span className="relative text-[18px] leading-none font-medium text-px-black-2 transition-[0.3s] ease-in-out before:mr-[12px] before:inline-block before:h-[6px] before:w-[6px] before:-translate-y-[3px] before:rounded-full before:bg-[#FF535B] before:content-[''] group-hover:translate-x-[20px] dark:text-white">
                                        {category}
                                    </span>
                                    <i className="text-white transition-[0.3s] ease-in-out group-hover:-translate-x-[20px]">
                                        <TextArrowIcon />
                                    </i>
                                </SmartLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-[10px]">
                <div>
                    <span className="mb-[15px] inline-block text-[12px] leading-none font-semibold tracking-[0.02em] text-[#1e1e1e]/60 uppercase dark:text-white/60">
                        (Our recent Digital work)
                    </span>
                </div>

                {images.map((image, index) => (
                    <div key={`${image}-${index}`} className="col-span-12 xl:col-span-6">
                        <div className="relative overflow-hidden max-[1199px]:mb-[30px]">
                            <div className="ripple-image">
                                <Image
                                    className="h-auto w-full max-w-full rounded-[10px]"
                                    width={643}
                                    height={720}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default InnerServiceItem;