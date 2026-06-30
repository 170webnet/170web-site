import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";
import Link from "next/link";

const PortfolioFourItem: React.FC<PortfolioProjectDT> = ({ id, filters, image, title, categories }) => {
    return (
        <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 ${filters?.join(" ")}`}>
            <div className="mb-80">
                <Link href={`/portfolio-details-1/${id}`}>
                    <div className="ripple-image mb-[25px]">
                        <Image width={436} height={340}
                            className="w-full max-w-full h-auto"
                            src={image}
                            alt={title}
                        />
                    </div>
                </Link>
                <div className="flex items-center justify-center">
                    <h4 className="mb-0 text-[18px] font-semibold leading-none tracking-[-0.03em] text-px-black dark:text-white">
                        <Link
                            className="relative after:absolute after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:left-0 hover:after:right-auto hover:after:w-full"
                            href={`/portfolio-details-1/${id}`}
                        >
                            {title}
                        </Link>
                    </h4>
                    <span className="text-[18px] font-normal text-px-body dark:text-white/60 before:mx-[10px] before:inline-block before:h-[2px] before:w-[7px] before:translate-y-[-4px] before:bg-current before:content-['']">
                        {categories?.[0]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioFourItem;