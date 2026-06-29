import BlogStandardPostItem from "../BlogStandardPostItem";
import BlogPagination from "../BlogPagination";
import BlogSidebar from "../BlogSidebar";
import { blogs } from "@/data/blog-data";

const BlogStandard = () => {
    // display blog items
    const displayBlogData = blogs.slice(6, 10);

    return (
        <section id="postbox" className="pb-24 pt-2 md:pb-32">
            <div className="mx-auto w-full max-w-[1330px] px-5">
                <div className="grid grid-cols-12 gap-x-10 gap-y-16">
                    {/* posts column */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="flex flex-col">
                            {displayBlogData.map((post) => (
                                <BlogStandardPostItem key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="mt-4 border-t border-px-border pt-10 dark:border-white/10">
                            <BlogPagination />
                        </div>
                    </div>

                    {/* sidebar */}
                    <aside className="col-span-12 lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <BlogSidebar />
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default BlogStandard;
