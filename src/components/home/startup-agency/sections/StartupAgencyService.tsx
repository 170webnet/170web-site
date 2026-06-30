"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import StartupAgencyServiceItem from "../components/StartupAgencyServiceItem";
import SmartLink from "@/components/common/SmartLink";
import { servicesData } from "@/data/services-data";
import { bgColorPropsDt } from "@/types/custom-dt";


const Service: React.FC<bgColorPropsDt> = () => {
  // display service data
  const displayServiceItem = servicesData.slice(0, 4);
  // accordion controlado por estado (substitui o collapse JS do Bootstrap).
  // -1 = todos fechados; inicia com o primeiro item aberto.
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    // service-skew-anim: GSAP hook (mantém a classe). Seção sempre sobre fundo
    // escuro (--color-bg-section: #0a0a0a claro / #1c1d20 dark) → texto branco.
    <div className="service-skew-anim relative z-[2] rounded-[40px] bg-px-black dark:bg-[#1c1d20] pt-[120px] pb-[140px] max-lg:pt-[80px] max-lg:pb-[80px]">
      <div className="mx-auto w-full max-w-[1550px] px-3">

        {/* title */}
        <div className="mb-[60px]">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 xl:col-span-3">
              <div className="pt-[40px] max-lg:pt-0">
                {/* px-section-subtitle white-style */}
                <span className="inline-block font-sans text-[16px] font-medium tracking-[-0.03em] text-white">
                  <i className="mr-[10px] inline-grid h-[20px] w-[20px] place-content-center rounded-full bg-white/10 text-center text-white">
                    <Plus />
                  </i>
                  What we do
                </span>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9">
              <div className="flex items-center justify-between max-[767px]:flex-wrap">
                {/* px-section-title white-style */}
                <h3 className="mb-0 font-thunder text-[144px] font-bold leading-[0.83] tracking-[-0.06em] text-white max-[767px]:pb-[20px] max-[767px]:text-[55px] min-[768px]:max-[991px]:text-[100px] min-[992px]:max-[1199px]:text-[110px] min-[1200px]:max-[1399px]:text-[125px]">
                  Services.
                </h3>
                {/* px-btn-white */}
                <SmartLink
                  className="inline-block rounded-[50px] bg-white px-[43px] py-[21px] text-[18px] font-semibold leading-none text-px-black transition-[0.3s] hover:bg-px-red hover:text-white max-lg:px-[30px] max-lg:py-[18px] max-[767px]:px-[30px] max-[767px]:py-[16px] max-[767px]:text-[15px]"
                  href="/service-1"
                >
                  Get started
                </SmartLink>
              </div>
            </div>
          </div>
        </div>

        {/* accordion */}
        <div>
          <div id="accordionExample">
            {displayServiceItem.map((service, index) => (
              <StartupAgencyServiceItem
                key={service.id}
                {...service}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
