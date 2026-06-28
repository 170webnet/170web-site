import Image from "next/image";

const TeamHeroSection = () => {
    return (
        <div className="in-team-hero-area pt-150 pb-120">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="col-span-12 xl:col-span-9">
                    <div className="in-team-hero-content">
                        <span className="px-section-subtitle mb-30">OUR TEAM</span>
                        <h2 className="in-team-hero-title">Our <span>Creative</span> <br />
                            <Image width={140} height={140} src="/assets/img/team/circle-img.png" alt="circle image" /> Team members.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamHeroSection;