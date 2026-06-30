import Image from "next/image";

const AWARDS = [
    {
        id: "001",
        image: "/assets/img/award/award-1.png",
        title: "Best web design agency",
        org: "Web Excellence Awards",
        year: "2023",
    },
    {
        id: "002",
        image: "/assets/img/award/award-2.png",
        title: "Top digital marketing firm",
        org: "Clutch Top Agencies",
        year: "2022",
    },
    {
        id: "003",
        image: "/assets/img/award/award-3.png",
        title: "Best web design agency",
        org: "Awwwards Honorable Mention",
        year: "2024",
    },
    {
        id: "004",
        image: "/assets/img/award/award-1.png",
        title: "Best web design agency",
        org: "CSS Design Awards",
        year: "2026",
    },
];

const CreativeAgencyAward = () => {
    return (
        <div className="pt-[80px] pb-[80px] xl:pt-[140px] xl:pb-[120px]">
            <div className="container-px">

                {/* TITLE */}
                <div className="mb-[30px] xl:mb-[50px]">
                    <div className="grid grid-cols-12 gap-x-6 items-center">

                        <div className="col-span-12 xl:col-span-4">
                            <h3 className="inline-block text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white">
                                Awards
                            </h3>
                        </div>

                        <div className="col-span-12 xl:col-span-8">
                            <h3 className="font-thunder text-[60px] font-semibold uppercase leading-[0.9] tracking-[1px] text-px-black md:text-[75px] xl:text-[100px] dark:text-white">
                                Awards & <br /> recognitions.
                            </h3>
                        </div>

                    </div>
                </div>

                {/* AWARDS LIST */}
                <div>
                    {AWARDS.map((award) => (
                        <div
                            key={award.id}
                            className="px-fade-anim border-b border-b-[rgba(10,10,10,0.08)] py-[27px] dark:border-b-white/10"
                        >
                            <div className="grid grid-cols-12 gap-x-6 items-center">

                                {/* NUMBER */}
                                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                                    <div className="text-[16px] font-medium tracking-[-0.03em] text-px-body md:text-[11px] lg:text-[16px] dark:text-white">
                                        <span>({award.id})</span>
                                    </div>
                                </div>

                                {/* CATEGORY */}
                                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                                    <div className="flex items-center max-md:py-[7px]">
                                        <Image className="mr-[14px]" width={20} height={20} src={award.image} alt={award.title} />
                                        <span className="text-[18px] font-medium tracking-[-0.04em] text-px-black md:text-[16px] lg:text-[18px] dark:text-white">
                                            {award.title}
                                        </span>
                                    </div>
                                </div>

                                {/* ORGANIZATION */}
                                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                                    <div className="pl-0 lg:pl-[50px] xl:pl-[90px] 2xl:pl-[120px]">
                                        <span className="text-[16px] font-medium tracking-[-0.03em] text-px-body dark:text-white">
                                            {award.org}
                                        </span>
                                    </div>
                                </div>

                                {/* YEAR */}
                                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-3">
                                    <div className="max-md:py-[7px] md:text-right">
                                        <span className="text-[16px] font-medium tracking-[-0.03em] text-px-black md:text-[12px] lg:text-[16px] dark:text-white">
                                            {award.year}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CreativeAgencyAward;
