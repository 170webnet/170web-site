import { Clock, MessageCircle, SquarePen } from "lucide-react";
import { SiFacebook, SiX, SiDribbble, SiInstagram } from "react-icons/si";

import PostboxDetailsForm from "@/components/form/PostboxDetailsForm";
import BlogReadingProgress from "../BlogReadingProgress";
import BlogRelatedCard from "../BlogRelatedCard";
import { IdProps } from "@/types/custom-dt";
import BlogSidebar from "../BlogSidebar";
import { blogs } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";

// data layer
const tags = [
    { id: "blog", name: "Blog" },
    { id: "creative", name: "Creative" },
    { id: "portfolio", name: "Portfolio" },
    { id: "theme", name: "Theme" },
];
const socialLinks = [
    { id: "facebook", name: "Facebook", icon: <SiFacebook size={15} />, link: "#" },
    { id: "twitter", name: "X", icon: <SiX size={15} />, link: "#" },
    { id: "dribbble", name: "Dribbble", icon: <SiDribbble size={15} />, link: "#" },
    { id: "instagram", name: "Instagram", icon: <SiInstagram size={15} />, link: "#" },
];

/** Eyebrow de seção: marcador laranja + título — estrutura que sinaliza o ritmo do artigo. */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative mt-2 mb-6 text-[1.7rem] md:text-[2.05rem] font-bold leading-[1.1] tracking-tight text-px-black dark:text-white">
        <span className="absolute -left-6 top-[0.55em] hidden h-2 w-2 rounded-full bg-px-primary md:block" />
        {children}
    </h2>
);

const BlogDetailsArea = ({ id }: IdProps) => {
    const blogRelatedData = blogs.slice(10, 13);
    const blog = blogs.find((blog) => blog.id === Number(id));

    return (
        <>
            <BlogReadingProgress />

            {/* ───────── Article header ───────── */}
            <header className="px-blog-details pt-[120px] pb-12 md:pt-[200px] md:pb-16">
                <div className="mx-auto w-full max-w-[820px] px-5 text-center">
                    {/* eyebrow */}
                    <div className="mb-7 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-px-primary">
                        <SquarePen size={15} strokeWidth={2.4} />
                        <span>Inspiration</span>
                        <span className="h-1 w-1 rounded-full bg-px-primary/60" />
                        <span className="text-px-body/70 dark:text-white/65">4 min read</span>
                    </div>

                    {/* title */}
                    <h1 className="text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.02em] text-px-black dark:text-white">
                        {blog?.title || "Lessons learned from professional challenges"}
                    </h1>

                    {/* meta */}
                    <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[15px] text-px-body dark:text-white/65">
                        <span className="flex items-center gap-2.5 font-medium text-px-black dark:text-white">
                            <Image
                                className="h-9 w-9 rounded-full object-cover ring-1 ring-px-border dark:ring-white/10"
                                width={42}
                                height={42}
                                src={blog?.authorImg || "/assets/img/blog/blog-details/user-1.jpg"}
                                alt={blog?.authorName || "Phil Martinez"}
                            />
                            {blog?.authorName || "Phil Martinez"}
                        </span>
                        <span className="h-4 w-px bg-px-border dark:bg-white/10" />
                        <span className="flex items-center gap-2">
                            <Clock size={15} className="text-px-primary" />
                            {blog?.date || "April 15, 2026"}
                        </span>
                        <span className="h-4 w-px bg-px-border dark:bg-white/10" />
                        <span className="flex items-center gap-2">
                            <MessageCircle size={15} className="text-px-primary" />
                            {blog?.comment || "0 comments"}
                        </span>
                    </div>
                </div>
            </header>

            {/* ───────── Banner ───────── */}
            <div className="mx-auto w-full max-w-[1230px] px-5">
                <figure className="overflow-hidden rounded-[20px] ring-1 ring-px-border dark:ring-white/10">
                    <Image
                        className="h-auto w-full object-cover"
                        data-speed=".85"
                        width={1905}
                        height={1429}
                        src="/assets/img/blog/blog-details/blog-details-banner.jpg"
                        alt="blog banner"
                        priority
                    />
                </figure>
            </div>

            {/* ───────── Body + sidebar ───────── */}
            <section id="postbox" className="pt-16 pb-24 md:pt-24 md:pb-28">
                <div className="mx-auto w-full max-w-[1230px] px-5">
                    <div className="grid grid-cols-12 gap-x-10 gap-y-16">
                        {/* article column */}
                        <article className="col-span-12 lg:col-span-8">
                            <div className="mx-auto max-w-[720px]">
                                <SectionHeading>Using a Query</SectionHeading>
                                <p className="text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65 first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:text-[4.2rem] first-letter:font-bold first-letter:leading-[0.78] first-letter:text-px-black dark:first-letter:text-white">
                                    We love to bring designs to life as a developer, and I aim to do this using whatever
                                    front end tools are necessary. My preferred tools are more modern javascript libraries
                                    like React.js but I like to use whatever is best for the websites needs. There are
                                    several reasons why a business would consider a rebrand and it doesn&apos;t necessarily
                                    mean the business has been unsuccessful.
                                </p>
                                <p className="mt-6 text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                    But in order that you may see whence all this born error of those who accuse pleasure
                                    and praise pain, I will open the whole matter, and explain the very things which were
                                    said by that discoverer of truth and, as it were, the architect of a happy life.
                                </p>

                                <div className="mt-14">
                                    <SectionHeading>The Spark of an Idea</SectionHeading>
                                    <p className="text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                        We love to bring designs to life as a developer, and I aim to do this using whatever
                                        front end tools are necessary. My preferred tools are more modern javascript
                                        libraries like React.js but I like to use whatever is best for the websites needs.
                                        There are several reasons why a business would consider a rebrand and it
                                        doesn&apos;t necessarily mean the business has been unsuccessful.
                                    </p>
                                </div>

                                {/* paired images */}
                                <div className="mt-12 grid grid-cols-2 gap-4">
                                    {["blog-details-sm-1.jpg", "blog-details-sm-2.jpg"].map((src) => (
                                        <Image
                                            key={src}
                                            className="h-auto w-full rounded-2xl object-cover ring-1 ring-px-border dark:ring-white/10"
                                            width={382}
                                            height={397}
                                            src={`/assets/img/blog/blog-details/${src}`}
                                            alt="blog image"
                                        />
                                    ))}
                                </div>

                                <p className="mt-12 text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                    faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi
                                    sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus.
                                    Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor. Morbi
                                    non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                </p>

                                {/* pull quote — signature editorial moment */}
                                <figure className="my-14 border-l-[3px] border-px-primary pl-7 md:pl-9">
                                    <span className="block font-serif text-[5rem] leading-[0.6] text-px-primary">&ldquo;</span>
                                    <blockquote className="-mt-3 text-[1.6rem] md:text-[1.9rem] font-semibold leading-[1.25] tracking-tight text-px-black dark:text-white">
                                        Success is the result of perfection, hard work, learning from failure, loyalty &amp;
                                        persistence.
                                    </blockquote>
                                    <figcaption className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-px-body dark:text-white/65">
                                        — Phil Martinez
                                    </figcaption>
                                </figure>

                                <p className="text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                    faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi
                                    sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus.
                                    Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor. Morbi
                                    non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                </p>

                                <div className="mt-14">
                                    <SectionHeading>On the specificity of selectors</SectionHeading>
                                    <p className="text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                        The specificity of the{" "}
                                        <code className="rounded-md bg-px-grey-1 dark:bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-px-primary">:not()</code>{" "}
                                        pseudo-class is the specificity of its argument. The{" "}
                                        <code className="rounded-md bg-px-grey-1 dark:bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-px-primary">:not()</code>{" "}
                                        pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                    </p>
                                </div>

                                <p className="mt-8 text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                    The simple{" "}
                                    <code className="rounded-md bg-px-grey-1 dark:bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-px-primary">:not()</code>{" "}
                                    selector takes as an argument can be any of the following:
                                </p>
                                {/* list with orange markers */}
                                <ul className="mt-6 space-y-3.5 text-[1.0625rem] leading-relaxed text-px-body dark:text-white/65">
                                    {[
                                        <>Type selector (e.g <em className="not-italic font-semibold text-px-black dark:text-white">p, span</em>, etc.)</>,
                                        <>Class selector (e.g <em className="not-italic font-semibold text-px-black dark:text-white">.element, .sidebar</em>, etc.)</>,
                                        <>ID selector (e.g <em className="not-italic font-semibold text-px-black dark:text-white">#header</em>)</>,
                                        <>Pseudo-class selector (e.g <em className="not-italic font-semibold text-px-black dark:text-white">:first-child, :last-of-type</em>)</>,
                                    ].map((li, i) => (
                                        <li key={i} className="flex gap-3.5">
                                            <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-px-primary" />
                                            <span>{li}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* code block */}
                                <div className="mt-10 overflow-hidden rounded-2xl bg-px-black text-white ring-1 ring-black/5 dark:ring-white/10">
                                    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                                        <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">CSS</span>
                                    </div>
                                    <pre className="overflow-x-auto px-5 py-5 font-mono text-[14px] leading-[1.7] text-white/90">
{`li:not(.old)::after {
  content: "New!";
  color: deeppink;
}`}
                                    </pre>
                                </div>

                                <p className="mt-10 text-[1.125rem] leading-[1.8] text-px-body dark:text-white/65">
                                    The specificity of the{" "}
                                    <code className="rounded-md bg-px-grey-1 dark:bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-px-primary">:not()</code>{" "}
                                    pseudo-class is the specificity of its argument. The{" "}
                                    <code className="rounded-md bg-px-grey-1 dark:bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-px-primary">:not()</code>{" "}
                                    pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                </p>

                                {/* tags + share */}
                                <div className="mt-12 flex flex-col gap-6 border-t border-px-border dark:border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-px-black dark:text-white">Tagged</span>
                                        {tags.map((tag) => (
                                            <Link
                                                key={tag.id}
                                                href="#"
                                                className="rounded-full border border-px-border dark:border-white/10 px-3.5 py-1.5 text-[13px] font-medium text-px-body dark:text-white/65 transition-colors hover:border-px-primary hover:text-px-primary"
                                            >
                                                {tag.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        {socialLinks.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={item.link}
                                                aria-label={item.name}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-px-grey-1 dark:bg-white/[0.06] text-px-black dark:text-white transition-colors hover:bg-px-primary hover:text-white"
                                            >
                                                {item.icon}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* sidebar */}
                        <aside className="col-span-12 lg:col-span-4">
                            <div className="lg:sticky lg:top-28">
                                <BlogSidebar />
                            </div>
                        </aside>
                    </div>

                    {/* reply form */}
                    <div className="mt-16 grid grid-cols-12 gap-x-10">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="mx-auto max-w-[720px]">
                                <PostboxDetailsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── Related ───────── */}
            <div className="border-t border-px-border dark:border-white/10 py-20 md:py-24">
                <div className="container-px">
                    <div className="mb-12 flex items-end justify-between">
                        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[0.95] tracking-[-0.02em] text-px-black dark:text-white">
                            Related posts
                        </h2>
                        <Link
                            href="/blog"
                            className="hidden shrink-0 text-[14px] font-semibold uppercase tracking-[0.14em] text-px-black dark:text-white underline-offset-4 hover:text-px-primary hover:underline sm:inline"
                        >
                            View all
                        </Link>
                    </div>
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                        {blogRelatedData.map((blog) => (
                            <div key={blog.id} className="col-span-12 sm:col-span-6 xl:col-span-4">
                                <BlogRelatedCard {...blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsArea;
