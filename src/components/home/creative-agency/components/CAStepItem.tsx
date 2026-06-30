import React from "react";

interface CAStepItemProps {
    bg: string;
    number: string;
    desc: string;
    title: string;
}

const CAStepItem: React.FC<CAStepItemProps> = ({ bg, number, desc, title }) => {
    return (
        <div
            className="col-span-12 2xl:col-start-9 2xl:col-span-4 xl:col-start-8 xl:col-span-5 lg:col-span-6"
        >
            <div
                className="px-step-card max-w-[530px] pt-[60px] px-[60px] pb-[45px] mb-[250px] xl:max-2xl:px-[30px] md:max-xl:mb-[30px] md:max-xl:max-w-full max-md:pt-[50px] max-md:px-[30px] max-md:mb-[30px] max-md:max-w-full"
                style={{ backgroundColor: bg }}
            >
                <div className="inline-block px-[14px] py-[6px] rounded-[27px] text-[14px] font-semibold leading-none uppercase text-white bg-px-black">
                    <span>Step</span>
                </div>
                <div className="mb-[65px] text-right">
                    <span className="font-thunder-med text-[260px] max-md:text-[180px] font-medium leading-[0.7] uppercase text-px-black">
                        {number}
                    </span>
                    <p className="mb-0 text-[18px] font-normal leading-[26px] text-px-black">
                        {desc.split("\n").map((line, i) => (
                            <React.Fragment key={`${line}-${i}`}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <h4 className="font-thunder-med text-[80px] max-md:text-[50px] font-medium leading-[0.9] mb-0 uppercase text-px-black">
                    {title.split("\n").map((line, i) => (
                        <span key={`${line}-${i}`}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h4>
            </div>
        </div>
    );
};

export default CAStepItem;
