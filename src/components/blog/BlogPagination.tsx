import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const pages = [1, 2];
const currentPage = 1;

const cell =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border text-[15px] font-semibold transition-colors";
const idle =
    "border-px-border text-px-black hover:border-px-primary hover:bg-px-primary hover:text-white dark:border-white/10 dark:text-white dark:hover:border-px-primary dark:hover:bg-px-primary dark:hover:text-white";
const active = "border-px-primary bg-px-primary text-white";

const BlogPagination = () => {
    return (
        <nav aria-label="Blog pagination" className="flex items-center gap-2.5">
            <Link href="/blog-standard" aria-label="Previous page" className={`${cell} ${idle}`}>
                <ChevronLeft size={18} aria-hidden="true" />
            </Link>

            {pages.map((page) =>
                page === currentPage ? (
                    <span key={page} aria-current="page" className={`${cell} ${active}`}>
                        {page}
                    </span>
                ) : (
                    <Link key={page} href="/blog-standard" className={`${cell} ${idle}`}>
                        {page}
                    </Link>
                )
            )}

            <Link href="/blog-standard" aria-label="Next page" className={`${cell} ${idle}`}>
                <ChevronRight size={18} aria-hidden="true" />
            </Link>
        </nav>
    );
};

export default BlogPagination;
