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
        <div>
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {serviceData.map((item) => (
                        <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="mb-[25px] border border-px-border p-[40px] dark:border-white/10">
                                <div className="mb-[60px]">
                                    <Image className="h-auto w-auto max-w-full dark:invert" width={90} height={60} src={item.icon} alt="Service icon" />
                                </div>

                                <div className="mb-[80px]">
                                    <h4 className="mb-[20px] text-[22px] font-semibold leading-[1] tracking-[-0.04em] text-px-black dark:text-white">
                                        <Link className="px-line-lr" href={item.link}>
                                            {item.title}
                                        </Link>
                                    </h4>

                                    <p className="mb-0 text-[16px] font-normal leading-[1.5] tracking-[-0.04em] text-px-body dark:text-white/65">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="text-[16px] font-medium leading-[1] text-px-black dark:text-white">
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