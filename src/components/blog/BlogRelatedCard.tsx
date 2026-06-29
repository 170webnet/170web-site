import { blogDt } from "@/types/custom-dt";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogRelatedCard: React.FC<blogDt> = ({ image, category, title, date }) => {
    return (
        <article className="group">
            <Link href="#" className="block overflow-hidden rounded-[18px] ring-1 ring-px-border dark:ring-white/10">
                <span className="block aspect-554/380 w-full overflow-hidden bg-px-grey-1 dark:bg-white/[0.06]">
                    <Image
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        width={554}
                        height={380}
                        src={image}
                        alt={title}
                    />
                </span>
            </Link>

            <div className="mt-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-px-primary">
                    {category}
                </span>

                <h3 className="mt-3 text-[1.4rem] font-bold leading-[1.2] tracking-tight text-px-black dark:text-white">
                    <Link
                        href="#"
                        className="inline-flex items-start gap-1.5 transition-colors hover:text-px-primary"
                    >
                        {title}
                        <ArrowUpRight
                            size={20}
                            className="mt-1 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                    </Link>
                </h3>

                <span className="mt-3 block text-[14px] text-px-body dark:text-white/65">Published on {date}</span>
            </div>
        </article>
    );
};

export default BlogRelatedCard;
