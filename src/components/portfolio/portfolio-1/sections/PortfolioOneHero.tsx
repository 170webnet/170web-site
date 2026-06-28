
const PortfolioOneHero = () => {
    return (
        <div id="top" className="pf-hero-area pf-hero-ptb">
            <div className="mx-auto w-full max-w-[1870px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 xl:col-span-6">
                        <div className="pf-hero-content">
                            <p>
                                Digital storytelling with a <br />
                                blendof artistry and precision,
                                ensuring every interaction leaves <br />
                                a lasting impression.
                            </p>
                        </div>
                    </div>
                    <div className="xl:col-start-4 col-span-12 xl:col-span-3">
                        <div className="pf-hero-content flex justify-between">
                            <span>Case studies</span>
                            <span>(6)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioOneHero;