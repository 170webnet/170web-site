
import BlogCard from "../shared/components/BlogCard";
import { blogs } from "@/data/blog-data";

const CreativeStudioBlog = () => {
    //blog data
    const displayBlogs = blogs.slice(0, 3); // Display only the first 3 blogs

    return (
        <div className="pt-[120px] pb-[80px] max-[1199px]:pt-[80px] max-[1199px]:pb-0 px-fade-anim">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                        <div>
                            {/* px-section-title.ff-thunder.fs-100: Thunder 100px/600/0.9 uppercase tracking-[1px]; black, white on dark */}
                            <h4 className="font-thunder text-[100px] min-[768px]:max-[991px]:text-[75px] max-[767px]:text-[60px] font-semibold leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white mb-[40px]">
                                Latest Blog
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="grid grid-cols-12 gap-x-6">
                    {displayBlogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeStudioBlog;