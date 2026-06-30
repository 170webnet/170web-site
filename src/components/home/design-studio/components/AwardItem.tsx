import { awardDT } from "@/types";
import Image from "next/image";

interface AwardItemProps {
    index: number;
    item: awardDT;
}

const AwardItem = ({ item, index, }: AwardItemProps) => {
    return (
        <div
            className="px-fade-anim border-b border-[rgba(10,10,10,0.08)] py-[27px] dark:border-white/10"
            data-delay={item.delay}
        >
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div>
                        <span className="text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white md:text-[11px]">
                            ({String(index).padStart(3, "0")})
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                    <div className="flex items-center max-md:py-[7px]">
                        <Image
                            width={20}
                            height={20}
                            src={item.image}
                            alt={item.title}
                            className="mr-[14px]"
                        />
                        <span className="mb-0 text-[18px] font-medium tracking-[-0.04em] text-px-black dark:text-white md:text-[16px]">
                            {item.title}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                    <div>
                        <span className="text-[16px] font-medium tracking-[-0.03em] text-px-body dark:text-white">
                            {item.nomination}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-1">
                    <div className="md:text-right max-md:py-[7px]">
                        <span className="text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white md:text-[12px]">
                            {item.year}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AwardItem;
