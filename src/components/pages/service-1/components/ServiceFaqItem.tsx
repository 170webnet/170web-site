interface ServiceFaqItemProps {
    id: number;
    title: string;
    description: string;
    items: string[];
    isActive: boolean;
    onClick: () => void;
}

const ServiceFaqItem = ({
    id,
    title,
    description,
    items,
    isActive,
    onClick,
}: ServiceFaqItemProps) => {
    const collapseId = `collapse-${id}`;

    return (
        <div
            className={`relative mb-[8px] border not-last:border-b not-last:border-b-[rgb(254_255_248/0.08)] ${
                isActive
                    ? "border-black/10 dark:border-white/20"
                    : "border-transparent"
            }`}
        >
            <h2>
                <button
                    className={`relative flex w-full cursor-pointer pt-[24px] pr-[40px] pb-[24px] pl-[32px] text-start text-[20px] leading-none font-semibold tracking-[-0.6px] ${
                        isActive
                            ? "bg-transparent text-px-orange"
                            : "bg-[#F7F7F7] text-px-black-2 dark:bg-[#1C1D20] dark:text-white"
                    }`}
                    onClick={onClick}
                    aria-expanded={isActive}
                    type="button"
                >
                    {title}
                    <span className="absolute top-[15px] right-[7px] inline-block h-[46px] w-[46px] rounded-full border border-white/[0.14] max-[575px]:h-[30px] max-[575px]:w-[30px]">
                        {/* vertical bar — rotates to form a minus when open */}
                        <span
                            className={`absolute top-1/2 left-1/2 h-[14px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-px-black-2 transition-transform duration-[400ms] dark:bg-white ${
                                isActive ? "rotate-90" : "rotate-0"
                            }`}
                        />
                        {/* horizontal bar */}
                        <span className="absolute top-1/2 left-1/2 h-[2px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-px-black-2 dark:bg-white" />
                    </span>
                </button>
            </h2>

            <div
                id={collapseId}
                className={`grid transition-[grid-template-rows] duration-[400ms] ease-out ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pt-0 pr-[32px] pb-[45px] pl-[32px] max-[1199px]:pr-[60px]">
                        <p className="mb-[16px] font-normal tracking-[-0.6px] text-px-body dark:text-white/60">
                            {description}
                        </p>

                        <ul className="list-disc pl-[32px] max-[575px]:pl-0">
                            {items.map((item, index) => (
                                <li
                                    key={`${item}-${index}`}
                                    className="text-[16px] font-normal tracking-[-0.6px] text-px-body dark:text-white/60"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFaqItem;
