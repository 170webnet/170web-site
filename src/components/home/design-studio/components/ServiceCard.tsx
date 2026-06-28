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
        <div className={`px-service-2-element ${isActive ? "active" : ""}`}>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    <div className="px-service-2-info">
                        <div className="px-service-2-thumb">
                            <Image width={350} height={263} className="w-full max-w-full h-auto" src={image} alt={title} />
                        </div>
                        <div className="px-service-2-content">
                            <span>{title}</span>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 xl:col-span-6 xl:col-start-4">
                    <div className="px-service-2-wrap">
                        <div className="px-service-2-item">
                            <h4
                                className="px-service-2-title p-relative"
                                onMouseEnter={onHover}
                            >
                                <SmartLink href="/service-1">{title}</SmartLink>
                                <span>{String(index).padStart(2, "0")}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
