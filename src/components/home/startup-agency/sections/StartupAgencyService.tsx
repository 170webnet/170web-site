"use client";
import { useState } from "react";
import StartupAgencyServiceItem from "../components/StartupAgencyServiceItem";
import SmartLink from "@/components/common/SmartLink";
import { servicesData } from "@/data/services-data";
import { bgColorPropsDt } from "@/types/custom-dt";
import { PlusIcon } from "@/svg";

const Service: React.FC<bgColorPropsDt> = () => {
  // display service data
  const displayServiceItem = servicesData.slice(0, 4);
  // accordion controlado por estado (substitui o collapse JS do Bootstrap).
  // -1 = todos fechados; inicia com o primeiro item aberto.
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="px-service-area service-skew-anim px-service-bg pt-120 pb-140 z-index-2 tp-section-bg">
      <div className="mx-auto w-full max-w-[1550px] px-3">

        {/* title */}
        <div className="px-service-title-wrap mb-60">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 xl:col-span-3">
              <div className="px-service-subtitle-box pt-40">
                <span className="px-section-subtitle white-style">
                  <i><PlusIcon strokeColor="currentcolor" /></i>
                  What we do
                </span>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9">
              <div className="px-service-title-box flex justify-between items-center">
                <h3 className="px-section-title white-style mb-0 text-effect">
                  Services.
                </h3>
                <SmartLink className="px-btn-white" href="/service-1">
                  Get started
                </SmartLink>
              </div>
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="px-service-accordion-wrap">
          <div className="accordion" id="accordionExample">
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
