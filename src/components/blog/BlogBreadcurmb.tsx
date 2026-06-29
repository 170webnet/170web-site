import { ChevronDown } from "lucide-react";
import { ScrollLink } from "../common";
import Link from "next/link";

const BlogBreadcurmb = () => {
    return (
        <section className="px-5 pt-[150px] pb-16 text-center md:pt-[220px] md:pb-20">
            <div className="mx-auto max-w-[900px]">
                {/* breadcrumb list */}
                <nav className="mb-6 flex items-center justify-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em]">
                    <Link
                        href="/"
                        className="text-px-body transition-colors hover:text-px-primary dark:text-white/65"
                    >
                        Home
                    </Link>
                    <span className="text-px-border dark:text-white/25">/</span>
                    <span className="text-px-primary">Blog Classic</span>
                </nav>

                {/* title */}
                <h1 className="font-thunder-med text-[clamp(3.2rem,9vw,7rem)] leading-[0.92] tracking-tight text-px-black dark:text-white">
                    Expert Insights
                </h1>

                {/* scroll down */}
                <div className="mt-10 flex justify-center">
                    <ScrollLink target="#postbox">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-px-border text-px-black transition-colors hover:border-px-primary hover:bg-px-primary hover:text-white dark:border-white/10 dark:text-white dark:hover:border-px-primary dark:hover:bg-px-primary">
                            <ChevronDown size={20} aria-hidden="true" />
                        </span>
                    </ScrollLink>
                </div>
            </div>
        </section>
    );
};

export default BlogBreadcurmb;
