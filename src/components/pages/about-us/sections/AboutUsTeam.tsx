import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";

const AboutUsTeam = () => {
    // We are slicing the team_members array to get only the last 4 members for the About Us page
    const teamItems = team_members.slice(8, 12);

    return (
        <div className="pt-[60px] md:pt-[130px] lg:pt-[100px] xl:pt-[100px] 2xl:pt-[130px] px-fade-anim">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                {/* TOP SECTION */}
                <div className="mb-[40px] md:mb-[60px]">
                    <div className="grid grid-cols-12 gap-x-6 items-end">

                        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-8">
                            <div>
                                <h3 className="font-thunder text-[60px] md:text-[75px] xl:text-[100px] font-semibold leading-[0.9] tracking-[1px] uppercase text-px-black dark:text-white mb-0">
                                    Meet the <br /> talented team
                                </h3>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-4">
                            <div className="md:text-right pb-[15px]">
                                <SmartLink
                                    className="text-px-black dark:text-white px-doubble-effect inline-flex items-center"
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
