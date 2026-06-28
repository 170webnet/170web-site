import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";
import Link from "next/link";

const PortfolioFourItem: React.FC<PortfolioProjectDT> = ({ id, filters, image, title, categories }) => {
    return (
        <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 grid-item ${filters?.join(" ")}`}>
            <div className="px-project-5-item mb-80">
                <Link href={`/portfolio-details-1/${id}`}>
                    <div className="px-project-5-thumb ripple-image">
                        <Image width={436} height={340}
                            className="w-full img-fluid"
                            src={image}
                            alt={title}
                        />
                    </div>
                </Link>
                <div className="px-project-5-content flex items-center justify-center">
                    <h4 className="px-project-5-title-sm">
                        <Link
                            className="px-line-lr"
                            href={`/portfolio-details-1/${id}`}
                        >
                            {title}
                        </Link>
                    </h4>
                    <span>{categories?.[0]}</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioFourItem;