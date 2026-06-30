"use client";
import { useState } from "react";
import ServiceFaqItem from "../components/ServiceFaqItem";

const FAQ_ITEMS = [
    {
        id: 1,
        title: "How long does it take to build a website?",
    },
    {
        id: 2,
        title: "Website Development Timeline: What to Expect",
    },
    {
        id: 3,
        title: "How Should Building a Website Really Take?",
    },
    {
        id: 4,
        title: "The Time It Takes to Build a Website?",
    },
];

const FAQ_DESCRIPTION =
    "Timelines depend on the spec of the website project, but here are some guidelines...";

const FAQ_LIST = [
    "Shopify projects usually take around four weeks.",
    "Craft CMS projects usually take a minimum of five weeks.",
    "Craft Commerce projects usually take a minimum of eight weeks.",
];

const ServiceFaq = () => {
    const [activeId, setActiveId] = useState<number>(1);
    return (
        <div className="pt-[190px] pb-[140px] max-lg:pt-0 max-lg:pb-[100px]">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                        <div className="mb-[40px]">
                            <span className="inline-block text-px-black dark:text-white">
                                Digital Services
                            </span>

                            <h3 className="mb-[30px] font-thunder text-[100px] leading-[0.9] font-semibold tracking-[1px] uppercase text-px-black dark:text-white max-md:text-[75px] max-[575px]:text-[60px]">
                                The answers <br /> to your questions.
                            </h3>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                        <div>
                            <div>
                                <div
                                    id="serviceFaqAccordion"
                                >
                                    {FAQ_ITEMS.map((item) => (
                                        <ServiceFaqItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            description={FAQ_DESCRIPTION}
                                            items={FAQ_LIST}
                                            isActive={activeId === item.id}
                                            onClick={() =>
                                                setActiveId(activeId === item.id ? 0 : item.id)
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFaq;