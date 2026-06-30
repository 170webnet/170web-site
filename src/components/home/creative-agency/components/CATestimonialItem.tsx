
interface CATestimonialItemProps {
    text: string;
    name: string;
    role: string;
};

const CATestimonialItem: React.FC<CATestimonialItemProps> = ({ text, name, role }) => {
    return (
        <div className="text-center">
            <p className="text-[36px] min-[1200px]:max-[1399px]:text-[34px] md:max-[991px]:text-[30px] max-md:text-[25px] leading-[1.2] mb-[40px] tracking-normal text-px-black dark:text-white min-[1200px]:max-[1399px]:[&_br]:hidden max-md:[&_br]:hidden">{text}</p>
            <div className="text-center">
                <h4 className="font-semibold text-[20px] leading-[1.1] mb-[5px] tracking-[-0.03em] text-px-black dark:text-white">
                    {name}
                </h4>
                <span className="font-medium text-[16px] leading-none tracking-[-0.04em] text-[#878787]">{role}</span>
            </div>
        </div>
    );
};

export default CATestimonialItem;
