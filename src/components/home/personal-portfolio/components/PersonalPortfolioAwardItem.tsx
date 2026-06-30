import { awardDT } from "@/types";
import Image from "next/image";

const PersonalPortfolioAwardItem: React.FC<awardDT> = ({ id, image, delay, title, nomination, year }) => {
    return (
        <div
            className="px-fade-anim py-[27px] border-b border-b-[rgba(10,10,10,0.08)] dark:border-b-white/10"
            data-delay={delay}
        >
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div>
                        <span className="font-medium text-[16px] md:text-[11px] lg:text-[16px] tracking-[-0.03em] text-px-black dark:text-white">
                            {id}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="flex items-center py-[7px] md:py-0">
                        <Image
                            width={20}
                            height={20}
                            src={image}
                            alt="award category image"
                            className="mr-[14px]"
                        />
                        <span className="font-medium text-[18px] md:text-[16px] lg:text-[18px] tracking-[-0.04em] text-px-black dark:text-white">
                            {title}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="md:pl-0 lg:pl-[50px] xl:pl-[90px] 2xl:pl-[120px]">
                        <span className="font-medium text-[16px] tracking-[-0.03em] text-px-body dark:text-white">
                            {nomination}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="py-[7px] md:py-0 md:text-right">
                        <span className="font-medium text-[16px] md:text-[12px] lg:text-[16px] tracking-[-0.03em] text-px-black dark:text-white">
                            {year}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAwardItem;
