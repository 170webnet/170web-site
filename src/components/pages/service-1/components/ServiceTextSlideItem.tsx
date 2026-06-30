import { GeometricFlowerIcon } from "@/svg";

const ServiceTextSlideItem = ({ item }: { item: string }) => {
    return (
        <div className="flex items-center">
            <span className="font-thunder text-[70px] font-bold uppercase leading-none text-white md:text-[100px] xl:text-[140px]">
                {item}
            </span>

            <div className="relative ml-[40px] inline-block translate-y-[-15px] text-center font-thunder text-[24px] font-bold uppercase leading-[0.93] text-px-primary">
                <span className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
                    let's <br /> talk
                </span>

                <i className="block">
                    <GeometricFlowerIcon />
                </i>
            </div>
        </div>
    );
};

export default ServiceTextSlideItem;
