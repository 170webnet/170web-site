import { innerServices, servicesNavItems } from "@/data/services-data";
import InnerServiceItem from "../components/InnerServiceItem";

const InnerServiceSection = () => {
    return (
        <div className="pt-[120px] pb-[120px] max-[1199px]:pt-[20px] max-[1199px]:pb-0">
            <div className="mx-auto w-full max-w-[1830px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="max-[991px]:mb-[50px]">
                            <span className="mb-[25px] inline-block font-sans text-[14px] leading-none font-medium tracking-[0.02em] uppercase text-px-black-2 dark:text-white">
                                Services
                            </span>
                            <ul>
                                {servicesNavItems.map((item, index) => (
                                    <li
                                        key={item}
                                        className="list-none not-last:mb-[12px]"
                                    >
                                        <span className="font-sans text-[20px] leading-none font-semibold tracking-[0.02em] uppercase text-px-orange">
                                            {index + 1}. {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        {innerServices.map((service, index) => (
                            <InnerServiceItem
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                descriptions={service.descriptions}
                                categories={service.categories}
                                images={service.images}
                                isLastItem={
                                    index === innerServices.length - 1
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceSection;