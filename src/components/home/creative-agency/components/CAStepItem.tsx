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
                className="px-step-card"
                style={{ backgroundColor: bg }}
            >
                <div className="px-step-card-badge">
                    <span>Step</span>
                </div>
                <div className="px-step-card-content text-right">
                    <span>{number}</span>
                    <p>
                        {desc.split("\n").map((line, i) => (
                            <React.Fragment key={`${line}-${i}`}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <h4 className="px-step-title">
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