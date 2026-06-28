import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
    {
        id: 1,
        icon: "/assets/img/service/icon/icon-1.png",
        title: "Brand Strategy",
        desc: `Brand identity design a the have
to success whether you breath onfire
quanto agency.`,
        link: "/service-1",
    },
    {
        id: 2,
        icon: "/assets/img/service/icon/icon-2.png",
        title: "Web Development",
        desc: `Brand identity design a the have
to success whether you breath onfire
quanto agency.`,
        link: "/service-1",
    },
    {
        id: 3,
        icon: "/assets/img/service/icon/icon-3.png",
        title: "UI/UX Design",
        desc: `Brand identity design a the have
to success whether you breath onfire
quanto agency.`,
        link: "/service-1",
    },
    {
        id: 4,
        icon: "/assets/img/service/icon/icon-4.png",
        title: "Digital Marketing",
        desc: `Brand identity design a the have
to success whether you breath onfire
quanto agency.`,
        link: "/service-1",
    },
];

const ServiceOfferings = () => {
    return (
        <div className="px-service-5-area">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {serviceData.map((item) => (
                        <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="px-service-5-item mb-25">
                                <div className="px-service-5-icon">
                                    <Image className="max-w-full h-auto w-auto h-auto" width={90} height={60} src={item.icon} alt="Service icon" />
                                </div>

                                <div className="px-service-5-content">
                                    <h4 className="px-service-5-title">
                                        <Link className="px-line-lr" href={item.link}>
                                            {item.title}
                                        </Link>
                                    </h4>

                                    <p>{item.desc}</p>
                                </div>

                                <div className="px-service-5-link">
                                    <Link className="px-doubble-effect" href={item.link}>
                                        View details
                                        <i>
                                            <TextArrowIcon />
                                            <TextArrowIcon />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOfferings;