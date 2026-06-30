"use client";
import { useState } from "react";

const awards = [
    { id: 1, title: "A' Design Awards & competition", subtitle: "Silver Medal" },
    { id: 2, title: "AWWWARDS", subtitle: "2X - Honnerable" },
    { id: 3, title: "CSS Design Awards", subtitle: "2X - Website of the day" },
    { id: 4, title: "2X - Website of the day", subtitle: "2X - Website of the day" },
    { id: 5, title: "CSS Reels", subtitle: "Featured of the day" },
    { id: 6, title: "Web Gurus", subtitle: "2X - Guru of the day" },
];

const MinimalPortfolioAward = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="-mt-[76px] bg-[#ededed] pt-[190px] pb-[160px] lg:-mt-[30px] dark:bg-[#1d1d1f]">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="mx-auto flex w-full flex-col md:w-[690px]">
                    {awards.map((item, i) => {
                        const dim = activeIndex !== null && activeIndex !== i;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className={`group relative border-b border-black/20 py-[26px] transition-opacity duration-300 dark:border-white/15 ${
                                    dim ? "opacity-40" : "opacity-100"
                                }`}
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="max-w-[62%] pr-0 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-black/45 transition-colors duration-300 group-hover:text-black sm:pr-[60px] sm:text-[24px] dark:text-white/45 dark:group-hover:text-white">
                                        {item.title}
                                    </h4>
                                    <span className="shrink-0 text-[15px] font-medium tracking-[-0.02em] text-black/45 transition-colors duration-300 group-hover:text-black sm:text-[18px] dark:text-white/45 dark:group-hover:text-white">
                                        {item.subtitle}
                                    </span>
                                </div>

                                {/* hover preview — appears in the outer margin on large screens */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-full top-1/2 ml-10 hidden h-[150px] w-[116px] -translate-y-1/2 scale-90 rounded-[20px] bg-cover bg-center opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 xl:block"
                                    style={{ backgroundImage: "url(/assets/img/update/award/award.png)" }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioAward;
