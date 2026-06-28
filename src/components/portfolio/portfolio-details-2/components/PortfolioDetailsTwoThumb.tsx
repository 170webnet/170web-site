import Image from "next/image";

const images = [
    {
        src: "/assets/img/project/portfolio-details-2/portfolio-details-2-thumb-4.jpg",
        col: "col-span-12 lg:col-span-5",
    },
    {
        src: "/assets/img/project/portfolio-details-2/portfolio-details-2-thumb-5.jpg",
        col: "col-span-12 lg:col-span-7",
    },
];

const PortfolioDetailsTwoThumb = () => {
    return (
        <section className="px-pd-4-thumb-ptb px-pd-style pb-120">
            <div className="mx-auto w-full max-w-[1630px] px-3">
                {/* Main Thumbnail */}
                <div className="grid grid-cols-12 gap-x-[0px]">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="px-pd-4-thumb-wrap fix mb-20">
                            <div className="px-pd-4-thumb-item text-center">
                                <Image width={1606} height={1034} className="img-fluid"
                                    src="/assets/img/project/portfolio-details-2/portfolio-details-2-thumb-3.jpg"
                                    alt="Portfolio project showcase"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Thumbnails */}
                <div className="grid grid-cols-12 gap-x-[20px]">
                    {images.map((image, index) => (
                        <div className={image.col} key={`${image.src}-${index}`}>
                            <div className="px-pd-4-thumb-box mb-20">
                                <Image width={643} height={800} className="img-fluid w-auto h-full"
                                    data-speed=".8"
                                    src={image.src}
                                    alt={`Portfolio preview ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsTwoThumb;