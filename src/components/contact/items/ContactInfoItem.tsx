import Link from "next/link";

const ContactInfoItem = ({
    title,
    content,
    href,
    colClass,
}: {
    title: string;
    content: string;
    href: string;
    colClass: string;
}) => (
    <div className={colClass}>
        <div className="mb-[30px] md:mb-[40px] xl:mb-[80px]">
            <span className="block mb-[8px] text-[18px] font-semibold leading-none uppercase text-px-black-2 dark:text-white">{title}</span>
           <Link className="px-line-black text-[18px] font-normal tracking-[-0.8px] text-px-black-2 dark:text-white/60 dark:hover:text-white" href={href}>
    {content.split("\n").map((line, i) => (
        <span key={`${line}-${i}`}>
            {line}
            <br className="xl:hidden" />
        </span>
    ))}
</Link>
        </div>
    </div>
);
export default ContactInfoItem;