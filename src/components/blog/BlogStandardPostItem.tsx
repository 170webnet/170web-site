"use client";
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock, Play, Quote, SquarePen } from "lucide-react";
import { useVideoModal } from "@/providers/VideoProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { postbox_slider_params } from "@/constant";
import { Navigation } from "swiper/modules";
import { blogDt } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";

interface blogPropsDt {
    post: blogDt;
}

/* ── shared building blocks (editorial, dark-aware) ── */

const AuthorRow = ({
    img,
    name,
    designation,
    date,
}: {
    img: string;
    name: string;
    designation?: string;
    date: string;
}) => (
    <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
            <Image
                className="h-[42px] w-[42px] rounded-full object-cover ring-1 ring-px-border dark:ring-white/10"
                width={42}
                height={42}
                src={img}
                alt={name}
            />
            <div>
                <h4 className="text-[16px] font-bold leading-none tracking-tight text-px-black dark:text-white">
                    {name}
                </h4>
                <span className="mt-1.5 block text-[13px] font-medium text-px-body dark:text-white/65">
                    {designation}
                </span>
            </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-[14px] text-px-body dark:text-white/65">
            <Clock size={15} className="text-px-primary" />
            <span>{date}</span>
        </div>
    </div>
);

const TagEyebrow = () => (
    <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-px-primary">
        <SquarePen size={15} strokeWidth={2.4} />
        Inspiration
    </span>
);

const PostTitle = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <h3 className="mt-4 font-thunder-med text-[clamp(2rem,3.5vw,3rem)] leading-[0.98] tracking-tight text-px-black dark:text-white">
        <Link href={href} className="transition-colors hover:text-px-primary">
            {children}
        </Link>
    </h3>
);

const ViewMore = ({ href }: { href: string }) => (
    <Link
        href={href}
        className="group/btn mt-7 inline-flex items-center gap-2 rounded-full bg-px-black px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-px-primary dark:bg-white dark:text-px-black dark:hover:bg-px-primary dark:hover:text-white"
    >
        View More
        <ArrowUpRight
            size={18}
            className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
    </Link>
);

const descClass = "mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.8] text-px-body dark:text-white/65";

const BlogStandardPostItem = ({ post }: blogPropsDt) => {
    const { playVideo } = useVideoModal();
    const detailHref = `/blog-details/${post.id}`;

    return (
        <article className="mb-14 border-b border-px-border pb-14 last:mb-0 last:border-0 last:pb-0 dark:border-white/10">
            {/* IMAGE */}
            {post.type === "image" && (
                <>
                    <AuthorRow
                        img="/assets/img/avater/avater-1.png"
                        name={post.authorName}
                        designation={post.designation}
                        date={post.date}
                    />
                    <Link
                        href={detailHref}
                        className="group/thumb block overflow-hidden rounded-[20px] ring-1 ring-px-border dark:ring-white/10"
                    >
                        <Image
                            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-[1.04]"
                            width={704}
                            height={402}
                            src={post.image}
                            alt="Blog Image"
                        />
                    </Link>
                    <div className="mt-8">
                        <TagEyebrow />
                        <PostTitle href={detailHref}>{post.title}</PostTitle>
                        <p className={descClass}>{post.desc}</p>
                        <ViewMore href={detailHref} />
                    </div>
                </>
            )}

            {/* VIDEO */}
            {post.type === "video" && (
                <>
                    <AuthorRow
                        img="/assets/img/avater/avater-1.png"
                        name="Devon Lane"
                        designation="Co-Founder of 170web"
                        date="April 15, 2026"
                    />
                    <div className="relative overflow-hidden rounded-[20px] ring-1 ring-px-border dark:ring-white/10">
                        <Link href={detailHref} className="block">
                            <Image
                                className="h-auto w-full object-cover"
                                width={811}
                                height={463}
                                src={post.image}
                                alt="Blog Image"
                            />
                        </Link>
                        <button
                            type="button"
                            aria-label="Play video"
                            onClick={() => post?.videoId && playVideo(post.videoId)}
                            className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-px-primary text-white shadow-lg transition-transform hover:scale-110"
                        >
                            <Play size={22} className="translate-x-0.5 fill-current" />
                        </button>
                    </div>
                    <div className="mt-8">
                        <TagEyebrow />
                        <PostTitle href={detailHref}>The role of social media in shaping society</PostTitle>
                        <p className={descClass}>
                            A journey of self-discovery and exploration that allows us to align our values, interests,
                            and skills with our professional pursuitsplatea dictumst[…]
                        </p>
                        <ViewMore href={detailHref} />
                    </div>
                </>
            )}

            {/* QUOTE */}
            {post.type === "quote" && (
                <>
                    <AuthorRow
                        img={post.authorImg}
                        name={post.authorName}
                        designation={post.designation}
                        date={post.date}
                    />
                    <figure className="rounded-[20px] bg-px-grey-1 p-9 dark:bg-white/[0.06] md:p-12">
                        <Quote size={40} className="text-px-primary" />
                        <blockquote className="mt-5 text-[1.5rem] font-semibold leading-[1.3] tracking-tight text-px-black dark:text-white md:text-[1.8rem]">
                            {post.desc}
                        </blockquote>
                    </figure>
                    <div className="mt-8">
                        <TagEyebrow />
                        <PostTitle href="#">{post.title}</PostTitle>
                    </div>
                </>
            )}

            {/* SLIDER */}
            {post.type === "slider" && (
                <>
                    <AuthorRow
                        img="/assets/img/avater/avater-1.png"
                        name={post.authorName}
                        designation={post.designation}
                        date={post.date}
                    />
                    <div className="relative">
                        <div className="overflow-hidden rounded-[20px] ring-1 ring-px-border dark:ring-white/10">
                            <Swiper modules={[Navigation]} {...postbox_slider_params}>
                                {post?.images?.map((img: string, i: number) => (
                                    <SwiperSlide key={`${img}-${i}`}>
                                        <Image
                                            width={1137}
                                            height={668}
                                            className="h-auto w-full object-cover"
                                            src={img}
                                            alt="image"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* arrows — class names kept so postbox_slider_params navigation binds */}
                        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-4">
                            <button
                                type="button"
                                aria-label="Previous post"
                                className="postbox-arrow-prev pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-px-black shadow-md transition-colors hover:bg-px-primary hover:text-white dark:bg-px-black-2 dark:text-white"
                            >
                                <ChevronLeft size={18} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next post"
                                className="postbox-arrow-next pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-px-black shadow-md transition-colors hover:bg-px-primary hover:text-white dark:bg-px-black-2 dark:text-white"
                            >
                                <ChevronRight size={18} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <TagEyebrow />
                        <PostTitle href={detailHref}>{post.title}</PostTitle>
                        <p className={descClass}>{post.desc}</p>
                        <ViewMore href={detailHref} />
                    </div>
                </>
            )}
        </article>
    );
};

export default BlogStandardPostItem;
