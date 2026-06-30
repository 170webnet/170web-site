import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({
    id,
    title,
    image,
    categories,
    year
}: PortfolioProjectDT) => {
    return (
        // px-portfolio-panel: GSAP pin/scale ScrollTrigger target — keep class
        <div className="px-portfolio-panel relative mb-[30px]">
            <Link href={`/portfolio-details-2/${id}`}>
                {/* ripple-image: JS-driven hover effect hook — keep class */}
                <div className="ripple-image relative overflow-hidden rounded-[20px] after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:rounded-[20px] after:bg-[linear-gradient(180deg,rgba(20,20,20,0)_0%,rgba(20,20,20,0.4)_100%)]">
                    <Image width={1820} height={820} className="max-w-full h-auto w-full rounded-[20px]" src={image} alt={title} />
                </div>
                <div className="absolute top-[45px] left-[50px] max-[767px]:top-[15px] max-[767px]:left-[15px] z-[2]">
                    {categories.map((cat) => (
                        <span
                            key={`${id}-${cat}`}
                            className="ml-[4px] inline-block uppercase font-medium text-[14px] max-[767px]:text-[12px] leading-none tracking-[0.4px] text-white rounded-[20px] border border-white/20 px-[12px] max-[767px]:px-[7px] py-[7px] transition-all duration-300 hover:text-px-black hover:border-white hover:bg-white"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
                <div className="absolute top-[45px] right-[50px] max-[767px]:top-[15px] max-[767px]:right-[15px] z-[2]">
                    <span className="inline-block uppercase font-medium text-[14px] max-[767px]:text-[12px] leading-none tracking-[0.4px] text-white rounded-[20px] border border-white/20 px-[12px] max-[767px]:px-[7px] py-[7px] transition-all duration-300 hover:text-px-black hover:border-white hover:bg-white">
                        {year}
                    </span>
                </div>
                <div className="absolute left-0 right-0 bottom-[50px] max-[767px]:bottom-[5px] text-center">
                    <h2 className="inline-block mb-0 font-thunder font-semibold text-[180px] min-[1200px]:max-[1399px]:text-[125px] min-[992px]:max-[1199px]:text-[110px] min-[768px]:max-[991px]:text-[90px] max-[767px]:text-[60px] leading-none text-white">
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioCard;
