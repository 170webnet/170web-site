import Link from "next/link";

const PortfolioThreeHero = () => {
    return (
        <div id="top" className="pf-3-hero-ptb pt-200">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="pf-3-hero-content">
                            <h4 className="pf-3-hero-title">
                                recent <span>project.</span>
                            </h4>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="pf-3-hero-social-wrap mb-70">
                            <div className="pf-3-hero-social-text">
                                <span> <i>Know More</i></span>
                            </div>
                            <div className="pf-3-hero-social">
                                <Link href="#">Linkedin</Link>
                                <Link href="#">Instagram</Link>
                                <Link href="#">Dribbble</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeHero;