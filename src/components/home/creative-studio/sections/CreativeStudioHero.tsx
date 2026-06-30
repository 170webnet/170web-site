import Image from "next/image";

const Hero = () => {
    return (
        <div className="border-b border-[rgba(30,30,30,0.06)] dark:border-white/10 pt-175 pb-30 lg:pb-0">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 xl:col-span-9">
                        <div>
                            <h3 className="shrink-0 mb-0 font-thunder font-bold uppercase tracking-[-0.01em] leading-[0.74] text-[85px] md:text-[150px] lg:text-[200px] xl:text-[225px] 2xl:text-[300px] text-px-black dark:text-white [&_i]:not-italic [&_i]:text-px-red [&_em]:not-italic [&_em]:text-px-red">
                                We are{" "}
                                <i className="inline-block uppercase tracking-normal leading-[0.87] text-[58px] translate-x-[-30px] md:translate-x-[-10px] max-md:translate-x-0">
                                    The Creative
                                </i>{" "}
                                <br />
                                <em className="relative pl-0 lg:pl-0 xl:pl-[240px]">
                                    <Image
                                        width={200}
                                        height={200}
                                        src="/assets/img/gift-img/title-img-2.gif"
                                        alt="gif image"
                                        className="hidden xl:block absolute z-[2] top-[2%] left-0 max-xl:top-[-11%] xl:scale-[0.7]"
                                    />
                                    design
                                </em>{" "}
                                <br />
                                studio
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-3">
                        <div className="relative text-right lg:flex lg:justify-end lg:items-center">
                            <Image
                                width={500}
                                height={300}
                                src="/assets/img/gift-img/title-img.gif"
                                alt="gif image"
                                className="mb-[40px] inline-block max-w-none h-auto w-auto translate-x-[-300px] xl:max-w-full xl:translate-x-0 lg:max-w-full lg:translate-x-[-120px]"
                            />
                            <span className="relative inline-block uppercase text-right font-bold font-thunder leading-[0.81] pb-[17px] text-[70px] md:text-[100px] lg:text-[130px] text-px-black dark:text-white [&>i]:absolute [&>i]:bottom-[16%] [&>i]:w-[76%] [&>i]:right-full [&>i]:h-[10px] [&>i]:mr-[15px] [&>i]:inline-block [&>i]:bg-px-black [&>i]:dark:bg-white max-md:[&>i]:hidden">
                                <i></i>/ FROM <br /> London
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
