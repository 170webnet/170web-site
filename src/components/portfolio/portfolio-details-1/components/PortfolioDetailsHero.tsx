
const PortfolioDetailsHero = () => {
    return (
        <div className="px-pd-2-ptb px-pd-style pt-200 pb-80">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    <div className="col-span-12 lg:col-span-10">
                        <div className="px-pd-2-top pb-70 text-center">
                            <div className="px-pd-2-categories mb-30 tp_fade_anim" data-delay=".3">
                                <span>Website</span>
                                <span>Services</span>
                            </div>
                            <h3 className="px-pd-2-title tp_fade_anim" data-delay=".5">Olivia Rivers</h3>
                        </div>
                        <div className="px-pd-2-bottom flex justify-between tp_fade_anim" data-delay=".7">
                            <div className="px-pd-2-bottom-item text-center">
                                <span>Client</span>
                                <h6>Envato</h6>
                            </div>
                            <div className="px-pd-2-bottom-item text-center">
                                <span>Role</span>
                                <h6>Branding</h6>
                            </div>
                            <div className="px-pd-2-bottom-item text-center">
                                <span>Duration</span>
                                <h6>8 March 2026</h6>
                            </div>
                            <div className="px-pd-2-bottom-item text-center">
                                <span>Designer</span>
                                <h6>170web</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsHero;