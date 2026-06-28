import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";
import { TextArrowIcon } from "@/svg";

const CreativeAgencyTeam = () => {
    // display team members data
    const teamItems = team_members.slice(0, 4);

    return (
        <div className="px-team-area px-about-5-style px-team-6-pt">
            <div className="mx-auto w-full max-w-[1550px] px-3">

                {/* TOP SECTION */}
                <div className="px-team-top mb-60">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3">
                            <div className="px-team-subtitle-box">
                                <span className="px-section-subtitle">Who we are</span>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9">
                            <div className="grid grid-cols-12 gap-x-6 items-end">
                                <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-8">
                                    <div className="px-team-title-box">
                                        <h3 className="px-section-title ff-thunder fs-100 mb-0">
                                            Meet the <br /> talented team
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-4">
                                    <div className="px-team-link-wrap md:text-right pb-15">
                                        <SmartLink
                                            className="px-about-4-link px-doubble-effect"
                                            href="/team"
                                        >
                                            <span>Discover All</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-12 gap-x-6">
                    {teamItems.map((member) => (
                       <TeamCard key={member.id} {...member}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyTeam;