import Image from "next/image";

const stats = [
    {
        id: 1,
        value: "98%",
        label: (
            <>
                Clients Satisfied and <br /> Repeating
            </>
        ),
    },
    {
        id: 2,
        value: "125+",
        label: (
            <>
                Projects Completed in <br /> 24 Countries
            </>
        ),
    },
];

const DigitalStudioAbout = () => {
    return (
        <div className="bf-about-area pt-140 pb-130">
            <div className="mx-auto w-full max-w-[1350px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="bf-about-3-subtile mb-20">
                            <span>About us</span>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <div className="bf-about-3-title-wrap mb-20">
                            <h2 className="bf-about-3-title reveal-text">An independent web design and
                                branding agency in Manchester set up
                                2010 who care, build relationships, have
                                industry experience, and win awards.</h2>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-3">
                        <div className="bf-about-3-thumb mb-30">
                            <Image className="img-fluid" width={256} height={266} src="/assets/img/update/about/abour-3/thumb.jpg" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-4">
                        <div className="bf-about-3-thumb-2 pt-60 ml-50 mb-30">
                            <Image className="img-fluid" width={306} height={400} src="/assets/img/update/about/abour-3/thumb-2.jpg" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <div className="bf-about-3-info-wrap pt-90 ml-35">
                            <div className="bf-about-3-avatar">
                                <Image width={140} height={54} className="mb-15 img-fluid" src="/assets/img/update/about/abour-3/avatar.png" alt="avatar image" />
                                <p>Driven by a passion for innovation, we specialize in
                                    delivering top-quality design solutions</p>
                            </div>
                            <div className="bf-about-3-count-wrap">
                                <div className="grid grid-cols-12 gap-x-6">
                                    {stats.map((item) => (
                                        <div className="col-span-12 md:col-span-6" key={item.id}>
                                            <div className="bf-about-3-count-item mb-30">
                                                <h2 className="bf-about-3-count-title">{item.value}</h2>
                                                <span>{item.label}</span>
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

export default DigitalStudioAbout;