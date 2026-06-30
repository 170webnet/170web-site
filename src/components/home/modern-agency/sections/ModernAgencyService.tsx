import ServiceItem from "../components/ServiceItem";
import { ServiceDT } from "@/types";

const services: ServiceDT[] = [
    {
        id: 1,
        title: "Branding",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-1.jpg",
            "/assets/img/service/service-4-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Development",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-2.jpg",
            "/assets/img/service/service-4-3.jpg",
        ],
    },
    {
        id: 3,
        title: "Design support",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-3.jpg",
            "/assets/img/service/service-4-4.jpg",
        ],
    },
    {
        id: 4,
        title: "Websites",
        href: "/service-1",
        images: [
            "/assets/img/service/service-4-4.jpg",
            "/assets/img/service/service-4-5.jpg",
        ],
    },
];

const Service = () => {
    // px-service-4-area: desktop pt-120/pb-120; abaixo de xl o template zera o
    // padding-bottom (lg,md) e abaixo de lg usa padding-top 80px (md,xs).
    return (
        <section className="pt-[80px] pb-0 lg:pt-[120px] xl:pb-[120px]">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-4">
                        {/* px-service-4-subtitle-box: pt-50 (50px) no desktop; o template
                            zera o padding-top abaixo de xl (@media lg,md,xs). */}
                        <div className="pt-0 xl:pt-[50px]">
                            {/* px-section-subtitle: 16px/500, tracking -0.03em, branco
                                (dark section). Abaixo de lg o template adiciona pb-20. */}
                            <span className="inline-block text-[16px] font-medium tracking-[-0.03em] text-white pb-[20px] xl:pb-0">
                                OUR SOLUTIONS
                            </span>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-8">
                        <div className="border-t border-white/[0.08]">
                            {services.map((service) => (
                                <ServiceItem key={service.id} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
