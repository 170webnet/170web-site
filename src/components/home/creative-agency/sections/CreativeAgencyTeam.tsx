import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";
import { TextArrowIcon } from "@/svg";

const CreativeAgencyTeam = () => {
    // display team members data
    const teamItems = team_members.slice(0, 4);

    return (
        // pt was 330px, sized for the old pinned Step cards that overlapped into this section
        <div className="pt-[120px] max-lg:pt-[80px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">

                {/* TOP SECTION */}
                <div className="mb-[60px] max-sm:mb-[40px]">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3">
                            <div>
                                <span className="inline-block text-[16px] font-medium tracking-[-0.03em] text-px-black dark:text-white max-lg:pt-0 max-lg:pb-[20px] max-lg:mb-0">
                                    Who we are
                                </span>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9">
                            <div className="grid grid-cols-12 gap-x-6 items-end">
                                <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-8">
                                    <div>
                                        <h3 className="font-thunder font-semibold text-[100px] leading-[0.9] tracking-[1px] uppercase mb-0 text-px-black dark:text-white max-md:text-[75px] max-sm:text-[60px]">
                                            Meet the <br /> talented team
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-4">
                                    <div className="md:text-right pb-[15px]">
                                        <SmartLink
                                            className="px-doubble-effect text-px-black dark:text-white"
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
