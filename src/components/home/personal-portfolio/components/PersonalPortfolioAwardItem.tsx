import { awardDT } from "@/types";
import Image from "next/image";

const PersonalPortfolioAwardItem: React.FC<awardDT> = ({ id, image, delay, title, nomination, year }) => {
    return (
        <div className="px-award-item px-fade-anim" data-delay={delay}>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <div className="px-award-num">
                        <span>{id}</span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="px-award-category">
                        <Image width={20} height={20} src={image} alt="award category image" />
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

export default PersonalPortfolioAwardItem;