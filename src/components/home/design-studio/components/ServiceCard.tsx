import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

interface ServiceItemProps {
    title: string;
    image: string;
    description: string;
    index: number;
    isActive: boolean;
    onHover: () => void;
}

const ServiceCard = ({
    title,
    image,
    description,
    index,
    isActive,
    onHover,
}: ServiceItemProps) => {
    return (
        // px-service-2-element (.active controla pl/cor do title e a visibilidade do info)
        <div className="group">
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    {/* px-service-2-info: absolute top-20 left-0 w-350; fade/translateY; oculto em md/xs (<992) */}
                    <div
                        className={`absolute top-[20px] left-0 w-[350px] transition-all duration-[400ms] ease-in-out max-[991px]:hidden ${
                            isActive
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible translate-y-[80px]"
                        }`}
                    >
                        {/* px-service-2-thumb: mb-25 */}
                        <div className="mb-[25px]">
                            <Image width={350} height={263} className="w-full max-w-full h-auto" src={image} alt={title} />
                        </div>
                        {/* px-service-2-content */}
                        <div>
                            {/* span: 17px/400 leading-1.4 mb-10 inline-block tracking -0.06em; dark -> white/60 */}
                            <span className="inline-block mb-[10px] text-[17px] font-normal leading-[1.4] tracking-[-0.06em] dark:text-white/60">
                                {title}
                            </span>
                            {/* p: 22px/600 leading-1.18 tracking -0.05em px-black; dark -> white */}
                            <p className="text-[22px] font-semibold leading-[1.18] tracking-[-0.05em] text-px-black dark:text-white">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 xl:col-span-6 xl:col-start-4">
                    {/* px-service-2-wrap: padding-left 100px no lg (992-1199) e >=1400; 0 no xl/md/xs */}
                    <div className="pl-0 min-[992px]:pl-[100px] min-[1200px]:pl-0 min-[1400px]:pl-[100px]">
                        {/* px-service-2-item: cursor-pointer pt-30 pb-10 border-b 1px rgba(30,30,30,.08); dark -> white/10 */}
                        <div className="cursor-pointer pt-[30px] pb-[10px] border-b border-[rgba(30,30,30,0.08)] dark:border-white/10">
                            {/* px-service-2-title: 100px/600 leading-1 mb-0 inline-block transition font-thunder px-black; lg=70px xs=50px; active -> pl-50 + red; dark -> white */}
                            <h4
                                className={`relative inline-block mb-0 font-thunder font-semibold leading-none transition-all duration-300 ease-in-out text-[50px] min-[768px]:text-[100px] min-[992px]:text-[70px] min-[1200px]:text-[100px] ${
                                    isActive
                                        ? "pl-[50px] text-px-red"
                                        : "text-px-black dark:text-white"
                                }`}
                                onMouseEnter={onHover}
                            >
                                <SmartLink href="/service-1">{title}</SmartLink>
                                {/* > span: absolute top-20% right-[-55px] 16px/500 leading-1 tracking -0.04em uppercase font-sans px-black; dark -> white */}
                                <span className="absolute top-[20%] right-[-55px] text-[16px] font-medium leading-none tracking-[-0.04em] uppercase font-sans text-px-black dark:text-white">
                                    {String(index).padStart(2, "0")}
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
