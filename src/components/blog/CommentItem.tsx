import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CommentItemProps = {
    name: string;
    date: string;
    text: string;
    avatar: string;
    isReply?: boolean;
};

const CommentItem = ({ name, date, text, avatar, isReply }: CommentItemProps) => {
    return (
        <li className={isReply ? "mt-8 sm:ml-16" : "mt-8 first:mt-0"}>
            <div className="flex gap-5 rounded-[18px] border border-px-border p-6 md:p-7">
                <Image
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-px-border md:h-14 md:w-14"
                    width={70}
                    height={70}
                    src={avatar}
                    alt={name}
                />

                <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                        <h5 className="text-[1.05rem] font-bold tracking-tight text-px-black">{name}</h5>
                        <span className="text-[13px] text-px-body">{date}</span>
                    </div>

                    <p className="mt-2.5 text-[15px] leading-relaxed text-px-body">{text}</p>

                    <Link
                        href="#"
                        className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-px-black transition-colors hover:text-px-primary"
                    >
                        Reply
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default CommentItem;
