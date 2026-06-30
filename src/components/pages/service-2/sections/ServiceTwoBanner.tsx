import Image from "next/image";

const ServiceTwoBanner = () => {
    return (
        <div className="pb-[100px]">
            <div className="overflow-hidden mb-[20px]">
                <Image className="max-w-full h-auto w-auto" data-speed="0.1" src="/assets/img/banner/banner-3-1.jpg" alt="banner image" width={1689} height={924} />
            </div>
            <div>
                <div className="mx-auto w-full max-w-[1830px] px-3">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-12">
                            <div className="flex justify-start md:justify-between items-center [&_span]:text-[14px] [&_span]:font-medium [&_span]:leading-[1] [&_span]:uppercase [&_span]:font-sans [&_span]:text-[#1E1E1E] dark:[&_span]:text-white">
                                <span>A</span>
                                <span>collective</span>
                                <span>of</span>
                                <span>the</span>
                                <span>best</span>
                                <span>independent</span>
                                <span>premium</span>
                                <span>publishers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoBanner;
