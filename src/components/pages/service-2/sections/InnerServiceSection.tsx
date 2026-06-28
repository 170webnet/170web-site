import { innerServices, servicesNavItems } from "@/data/services-data";
import InnerServiceItem from "../components/InnerServiceItem";

const InnerServiceSection = () => {
    return (
        <div className="tp-inner-service-area px-inner-service-style pt-120 pb-120">
            <div className="mx-auto w-full max-w-[1830px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="inner-service-1-left">
                            <span>Services</span>
                            <ul>
                                {servicesNavItems.map((item, index) => (
                                    <li key={item}>
                                        <span>
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