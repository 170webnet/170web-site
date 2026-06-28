import MinimalPortfolioBlogItem from "../components/MinimalPortfolioBlogItem";
import { SmartLink } from "@/components/common";
import { blogs } from "@/data/blog-data";

const MinimalPortfolioBlog = () => {
    //display items
    const displayBlogItems = blogs.slice(13, 16);

    return (
        <div className="tp-blog-area pt-150 pb-120">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                {/* Header */}
                <div className="grid grid-cols-12 gap-x-6 items-center">
                    <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-6">
                        <div className="tp-blog-tittle-wrap">
                            <h2 className="tp-section-tittle reveal-text mb-50">
                                Blog insight
                            </h2>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-6">
                        <div className="tp-blog-btn sm:text-right mb-45">
                            <SmartLink
                                href="/blog"
                                className="tp-btn inline-flex items-center"
                            >
                                <span>
                                    <span className="text-1">View All</span>
                                    <span className="text-2">View All</span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="grid grid-cols-12 gap-x-6">
                    {displayBlogItems.map((blog) => (
                        <MinimalPortfolioBlogItem {...blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBlog;