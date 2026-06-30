import PortfolioThreeItem from "../components/PortfolioThreeItem";
import Image from "next/image";

const portfolioItems = [
    {
        id: 1,
        title: "Netrix",
        service: "Design & Development",
        year: "2024",
    },
    {
        id: 2,
        title: "Easy Culi",
        service: "Interaction & Development",
        year: "2024",
    },
    {
        id: 3,
        title: "Space Needle",
        service: "Design & Development",
        year: "2024",
    },
    {
        id: 4,
        title: "Graphic Hunters",
        service: "Web Design, Envato Development",
        year: "2024",
    },
    {
        id: 5,
        title: "Future Goals",
        service: "Interaction & Development",
        year: "2024",
    },
    {
        id: 6,
        title: "Easy Culi",
        service: "Web Design, Envato Development",
        year: "2024",
    },
    {
        id: 7,
        title: "Spanio",
        service: "Design & Development",
        year: "2024",
    },
];

const images = [
    "/assets/img/project/project-6/project-1.jpg",
    "/assets/img/project/project-1.jpg",
    "/assets/img/project/project-2.jpg",
    "/assets/img/project/project-3.jpg",
    "/assets/img/project/project-4.jpg",
    "/assets/img/project/project-5.jpg",
    "/assets/img/project/project-6.jpg",
];

const PortfolioThreeMain = () => {
    return (
        <div className="pt-[120px] pb-[160px] max-lg:pt-[40px]">

            {/* HEADER */}
            <div className="pb-[28px] border-b border-[rgba(30,30,30,0.08)] dark:border-white/10">
                <div className="w-full px-3">
                    <div className="grid grid-cols-12 gap-x-6 justify-center">
                        <div className="col-span-12 xl:col-span-9">
                            <div>
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 lg:col-span-7">
                                        <div>
                                            <span className="inline-block text-[14px] font-normal tracking-[-0.2px] text-px-body dark:text-white/65">Client</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-5">
                                        <div className="flex justify-between [&_span]:inline-block [&_span]:text-[14px] [&_span]:font-normal [&_span]:tracking-[-0.2px] [&_span]:text-px-body dark:[&_span]:text-white/65">
                                            <span>Services</span>
                                            <span>Year</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECT LIST */}
            <div className="px-project-6-wrap relative">
                <div>
                    {portfolioItems.map((item, index) => (
                        <PortfolioThreeItem
                            key={item.id}
                            {...item}
                            index={index}
                        />
                    ))}
                </div>

                {/* IMAGES */}
                <div className="px-project-6-img-wrap pointer-events-none absolute top-0 left-0 z-[3] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0">
                    <div className="px-project-6-img-slider flex flex-col">
                        {images.map((img) => (
                            <Image className="h-[330px] w-[330px] object-cover object-center" width={330} height={330} key={img} src={img} alt="portfolio" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeMain;
