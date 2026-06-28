
import BlogCard from "../shared/components/BlogCard";
import { blogs } from "@/data/blog-data";

const CreativeStudioBlog = () => {
    //blog data
    const displayBlogs = blogs.slice(0, 3); // Display only the first 3 blogs

    return (
        <div className="px-blog-area pt-120 pb-80 px-fade-anim">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                {/* Title */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 xl:col-span-6">
                        <div className="px-blog-title-box">
                            <h4 className="px-section-title ff-thunder fs-100 mb-40">
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