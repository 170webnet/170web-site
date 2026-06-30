import BlogCard from "../../../shared/components/BlogCard";
import { blogs } from "@/data/blog-data";

const Blog = () => {
    //blog data
    const displayBlogs = blogs.slice(0, 3); // Display only the first 3 blogs

    return (
        <div className="pt-[80px] pb-0 xl:pt-[120px] xl:pb-[80px] px-fade-anim">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                        <div>
                            <h4 className="mb-[40px] font-thunder text-[60px] md:text-[75px] lg:text-[100px] font-semibold leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white">
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

export default Blog;
