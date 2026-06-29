import BlogStandardSearchForm from "../form/BlogStandardSearchForm";
import Link from "next/link";
import Image from "next/image";

//  data separated
const categories = [
    { id: "articles", name: "Articles", count: 8 },
    { id: "business", name: "Business", count: 4 },
    { id: "family-divorce", name: "Family & Divorce", count: 12 },
    { id: "web-design", name: "Web Design", count: 16 },
];

const latestPosts = [
    {
        id: 1,
        img: "/assets/img/avater/sidebar-1.jpg",
        category: "Design",
        title: "Fueling ambition & Achieving your goals",
        date: "July 15, 2023",
    },
    {
        id: 2,
        img: "/assets/img/avater/sidebar-2.jpg",
        category: "Design",
        title: "Behind the scenes of creative processes",
        date: "July 15, 2023",
    },
    {
        id: 3,
        img: "/assets/img/avater/sidebar-3.jpg",
        category: "Design",
        title: "Starting seo as your home business",
        date: "July 15, 2023",
    },
];

const tags = [
    { id: "creative", name: "Creative" },
    { id: "design-trends", name: "Design Trends" },
    { id: "development", name: "Development" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "170web", name: "170web" },
];

const widgetTitle =
    "mb-6 text-[1.1rem] font-bold uppercase tracking-[0.1em] text-px-black dark:text-white";

const BlogSidebar = () => {
    return (
        <div className="flex flex-col gap-10">
            {/* Search */}
            <BlogStandardSearchForm />

            {/* Categories */}
            <div>
                <h3 className={widgetTitle}>Category</h3>
                <ul className="flex flex-col">
                    {categories.map((item) => (
                        <li key={item.id} className="border-b border-px-border dark:border-white/10 last:border-0">
                            <Link
                                className="group flex items-center justify-between py-3.5 text-[15px] font-medium text-px-body dark:text-white/65 transition-colors hover:text-px-primary"
                                href="#"
                            >
                                {item.name}
                                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-px-grey-1 dark:bg-white/[0.06] px-2 text-[12px] font-semibold text-px-black dark:text-white transition-colors group-hover:bg-px-primary group-hover:text-white">
                                    {item.count}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Latest Posts */}
            <div>
                <h3 className={widgetTitle}>Latest Posts</h3>
                <div className="flex flex-col gap-5">
                    {latestPosts.map((post) => (
                        <div key={post.id} className="group flex items-center gap-4">
                            <Link
                                href="#"
                                className="block h-18 w-18 shrink-0 overflow-hidden rounded-xl ring-1 ring-px-border dark:ring-white/10"
                            >
                                <Image
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    width={140}
                                    height={140}
                                    src={post.img}
                                    alt="post"
                                />
                            </Link>

                            <div className="flex-1">
                                <Link
                                    href="#"
                                    className="text-[11px] font-semibold uppercase tracking-[0.16em] text-px-primary"
                                >
                                    {post.category}
                                </Link>
                                <h3 className="mt-1 text-[15px] font-bold leading-snug tracking-tight text-px-black dark:text-white">
                                    <Link href="#" className="transition-colors hover:text-px-primary">
                                        {post.title}
                                    </Link>
                                </h3>
                                <span className="mt-1 block text-[12px] text-px-body dark:text-white/65">{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div>
                <h3 className={widgetTitle}>Tags</h3>
                <div className="flex flex-wrap gap-2.5">
                    {tags.map((tag) => (
                        <Link
                            key={tag.id}
                            href="#"
                            className="rounded-full border border-px-border dark:border-white/10 px-4 py-2 text-[13px] font-medium text-px-body dark:text-white/65 transition-colors hover:border-px-primary hover:text-px-primary"
                        >
                            {tag.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
