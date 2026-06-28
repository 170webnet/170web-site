import { awardDT } from "@/types";
import Image from "next/image";

interface AwardItemProps {
    index: number;
    item: awardDT;
}

const AwardItem = ({ item, index, }: AwardItemProps) => {
    return (
        <div className="px-award-item px-fade-anim" data-delay={item.delay}>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="px-award-num">
                        <span>({String(index).padStart(3, "0")})</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                    <div className="px-award-category">
                        <Image width={20} height={20} src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
                    <div className="px-award-nomination">
                        <span>{item.nomination}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-1">
                    <div className="px-award-year md:text-right">
                        <span>{item.year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AwardItem;
