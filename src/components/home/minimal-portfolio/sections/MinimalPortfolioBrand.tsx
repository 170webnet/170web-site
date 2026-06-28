import Image from "next/image";

const brandLogos = [
    "logo.png",
    "logo-2.png",
    "logo-3.png",
    "logo-4.png",
    "logo-5.png",
    "logo-6.png",
];

const MinimalPortfolioBrand = () => {
    return (
        <div className="bf-brands-area">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12">
                        <div className="bf-brands-wrap">
                            <span className="bf-brands-title mb-30 inline-block">
                                Trusted by these amazing companies
                            </span>
                            <div className="bf-brands-item-wrap">
                                <div className="grid grid-cols-12 gap-x-[5px]">

                                    {brandLogos.map((logo,index) => (
                                        <div
                                            key={logo}
                                            className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-2"
                                        >
                                            <div className="bf-brands-item mb-5">
                                                <Image width={128} height={30} className="max-w-full h-auto w-auto h-auto"
                                                    src={`/assets/img/update/brands/${logo}`}
                                                    alt={`brand-${index + 1}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBrand;