import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";

const AboutUsTeam = () => {
    // We are slicing the team_members array to get only the last 4 members for the About Us page
    const teamItems = team_members.slice(8, 12);

    return (
        <div className="px-team-area px-team-inner-ptb pt-130 px-fade-anim">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                {/* TOP SECTION */}
                <div className="px-team-top mb-60">
                    <div className="grid grid-cols-12 gap-x-6 items-end">

                        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-8">
                            <div className="px-team-title-box">
                                <h3 className="px-section-title ff-thunder fs-100 mb-0">
                                    Meet the <br /> talented team
                                </h3>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-4">
                            <div className="px-team-link md:text-right pb-15">
                                <SmartLink
                                    className="px-about-4-link text-black px-doubble-effect inline-flex items-center"
                                    href="/team"
                                >
                                    <span>Discover All</span>
                                    <i>
                                        {/* icons unchanged */}
                                        <svg width="10" height="10" viewBox="0 0 10 10">
                                            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" />
                                        </svg>
                                        <svg width="10" height="10" viewBox="0 0 10 10">
                                            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" />
                                        </svg>
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-12 gap-x-6">
                    {teamItems.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsTeam;