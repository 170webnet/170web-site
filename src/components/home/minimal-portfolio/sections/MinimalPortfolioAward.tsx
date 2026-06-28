"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { useState } from "react";

const MinimalPortfolioAward = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const awards = [
    {id:1, title: "A' Design Awards & competition", subtitle: "Silver Medal" },
    {id:2, title: "AWWWARDS", subtitle: "2X - Honnerable" },
    {id:3, title: "CSS Design Awards", subtitle: "2X - Website of the day" },
    {id:4, title: "2X - Website of the day", subtitle: "2X - Website of the day" },
    {id:5, title: "CSS Reels", subtitle: "Featured of the day" },
    {id:6, title: "Web Gurus", subtitle: "2X - Guru of the day" },
  ];

  // Check if current route is a dark-themed page 
  const isDarkThme = useIsDarkRoute();

  const serviceClasses = {
    // Dynamically set background color based on theme
    sectionBg: isDarkThme ? "#1d1d1f" : "#ededed"
  }

  return (
    <div
      className="design-award-area pt-190 title-box pb-160"
      style={{ backgroundColor: serviceClasses.sectionBg }}
    >
      <div className="mx-auto w-full max-w-[1350px] px-3">
        <div className="design-award-wrap">
          <div className="flex flex-wrap row-cols-1">
            {awards.map((item, i) => {
              const isActive =
                activeIndex === null || activeIndex === i;

              return (
                <div className="flex-1" key={item.id}>
                  <div
                    className={`design-award-item hover-reveal-item p-relative ${isActive ? "active" : ""
                      }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className="design-award-content design-award-content-xs flex items-center justify-between">
                      <h4>{item.title}</h4>
                      <span>{item.subtitle}</span>
                    </div>

                    <div
                      className="design-award-reveal-img"
                      style={{
                        backgroundImage:
                          "url(/assets/img/update/award/award.png)",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalPortfolioAward;