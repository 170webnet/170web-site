import BlogStandardPostItem from "../BlogStandardPostItem";
import BlogPagination from "../BlogPagination";
import BlogSidebar from "../BlogSidebar";
import { blogs } from "@/data/blog-data";

const BlogStandard = () => {
    // display blog items
    const displayBlogData = blogs.slice(6, 10);

    return (
        // --postbox area start-- 
        <section id="postbox" className="postbox-ptb pt-110 pb-120">
            <div className="mx-auto w-full max-w-[1330px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                        <div className="postbox-wrapper">

                            {displayBlogData.map((post) => (
                                <BlogStandardPostItem key={post.id} post={post} />
                            ))}
                            <div className="basic-pagination-wrap">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12 xl:col-span-6">
                                        <BlogPagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogStandard;