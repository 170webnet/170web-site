
interface serviceItemProps {
    description: string
    name: string,
    designation: string,
}

const ServiceTestimonialItem: React.FC<serviceItemProps> = ({ description, name, designation }) => {
    return (
        <div className="text-center">
            <p className="mb-[40px] text-[36px] leading-[1.2] tracking-normal text-px-black dark:text-white xl:text-[34px] md:text-[30px] [&_br]:max-xl:hidden">
                {description}
            </p>
            <div className="text-center">
                <h4 className="mb-[5px] text-[20px] font-semibold leading-[1.1] tracking-[-0.03em] text-px-black dark:text-white">
                    {name}
                </h4>
                <span className="text-[16px] font-medium leading-none tracking-[-0.04em] text-[#878787]">
                    {designation}
                </span>
            </div>
        </div>
    );
};

export default ServiceTestimonialItem;
