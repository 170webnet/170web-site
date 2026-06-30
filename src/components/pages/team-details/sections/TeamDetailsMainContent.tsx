import { Mail, Phone } from "lucide-react";
import { SiFacebook, SiX, SiDribbble } from "react-icons/si";

import TeamContactForm from "@/components/form/TeamContactForm";
import { team_members } from "@/data/team-data";

import { IdProps } from "@/types/custom-dt";
import Link from "next/link";
import Image from "next/image";

const TeamDetailsMainContent = ({ id }: IdProps) => {
    const team = team_members.find((item) => item.id === Number(id));

    // contact link: text-14/medium, divider on all but last
    const contactLinkClass =
        "inline-block text-[14px] font-medium tracking-[-0.28px] text-[#111013] dark:text-white [&>svg]:translate-y-[-2px] [&>svg]:mr-[5px] [&:not(:last-of-type)]:mr-[20px] [&:not(:last-of-type)]:pr-[20px] [&:not(:last-of-type)]:border-r [&:not(:last-of-type)]:border-[rgba(17,16,19,0.10)] dark:[&:not(:last-of-type)]:border-white/10";

    // social: 42x42 circle, transparent bg + border, orange fill on hover
    const socialLinkClass =
        "inline-flex items-center justify-center h-[42px] w-[42px] mb-[8px] [&:not(:last-child)]:mr-[3px] rounded-full bg-transparent text-[#1e1e1e] dark:text-white border border-[rgba(17,16,19,0.08)] dark:border-white/10 transition-all hover:text-white hover:border-px-orange hover:bg-px-orange";

    return (
        <section className="pt-[60px] lg:pt-[100px] pb-[70px]">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6">

                    {/* Left Side */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mb-[30px] lg:mb-0">

                            {/* image */}
                            <div className="mb-[40px]">
                                <div className="ripple-image">
                                    {team?.image && <Image className="max-w-full h-auto w-full rounded-none" width={540} height={600}
                                        src={team?.image}
                                        alt={team?.name}
                                    />}
                                </div>
                            </div>

                            {/* contact + social */}
                            <div className="flex justify-between items-center flex-wrap gap-[20px]">

                                <div className="py-[10px] mb-[20px] xl:mb-0 border-t border-b border-[rgba(17,16,19,0.10)] dark:border-white/10">

                                    {team?.phone && (
                                        <Link href={`tel:${team?.phone}`} className={contactLinkClass}>
                                            <Phone />
                                            {team?.phone}
                                        </Link>
                                    )}

                                    {team?.email && (
                                        <Link href={`mailto:${team?.email}`} className={contactLinkClass}>
                                            <Mail color="#FF5722" />
                                            {team?.email}
                                        </Link>
                                    )}
                                </div>

                                <div>
                                    <div className="flex">

                                        {team?.social_links?.facebook && (
                                            <Link href={team?.social_links.facebook} className={socialLinkClass}>
                                                <span>
                                                    <SiFacebook />
                                                </span>
                                            </Link>
                                        )}

                                        {team?.social_links?.twitter && (
                                            <Link href={team?.social_links.twitter} className={socialLinkClass}>
                                                <span>
                                                    <SiX />
                                                </span>
                                            </Link>
                                        )}

                                        {team?.social_links?.dribbble && (
                                            <Link href={team?.social_links?.dribbble || "#"} className={socialLinkClass}>
                                                <span>
                                                    <SiDribbble />
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-span-12 lg:col-span-6">

                        <div className="pl-0 lg:pl-[50px] xl:pl-[70px]">

                            {/* heading */}
                            <div className="mb-[50px]">

                                <span className="inline-block mb-[10px] text-[16px] font-normal text-[#525356] dark:text-white/60">
                                    {team?.role}
                                </span>

                                <h4 className="font-thunder-med text-[70px] font-semibold leading-none text-px-black dark:text-white">
                                    {team?.name}
                                </h4>

                                {team?.bio && (
                                    <p className="text-[#4d5051] dark:text-white/60">
                                        {team?.bio}
                                    </p>
                                )}
                            </div>

                            {/* more details */}
                            <div className="mb-[50px]">

                                <h4 className="text-[24px] font-semibold mb-[18px] tracking-[-0.48px] text-px-black dark:text-white">
                                    More details
                                </h4>

                                <ul className="[&>li]:list-none [&>li]:mb-[12px] [&>li]:text-[16px] [&>li]:font-medium [&>li]:text-[#111013] dark:[&>li]:text-white [&>li>span]:inline-block [&>li>span]:min-w-[100px] [&>li>span]:mr-[40px] [&>li>span]:text-[16px] [&>li>span]:font-normal [&>li>span]:text-[#525356] dark:[&>li>span]:text-white/60">

                                    {team?.location && (
                                        <li>
                                            <span>Location:</span>
                                            {team?.location}
                                        </li>
                                    )}

                                    {team?.role && (
                                        <li>
                                            <span>Position:</span>
                                            {team?.role}
                                        </li>
                                    )}

                                    {team?.email && (
                                        <li>
                                            <span>Email:</span>
                                            {team?.email}
                                        </li>
                                    )}

                                    {team?.phone && (
                                        <li>
                                            <span>Phone:</span>
                                            {team?.phone}
                                        </li>
                                    )}

                                    {team?.age && (
                                        <li>
                                            <span>Age:</span>
                                            {team?.age}
                                        </li>
                                    )}

                                    {team?.qualification && (
                                        <li>
                                            <span>Qualification:</span>
                                            {team?.qualification}
                                        </li>
                                    )}

                                    {team?.gender && (
                                        <li>
                                            <span>Gender:</span>
                                            {team?.gender}
                                        </li>
                                    )}

                                    {team?.experience_years && (
                                        <li>
                                            <span>Experience:</span>
                                            {team?.experience_years}
                                        </li>
                                    )}

                                </ul>
                            </div>

                            {/* experience */}
                            {team?.experiences && team?.experiences.length > 0 && (
                                <div className="mb-[50px]">

                                    <h4 className="text-[24px] font-semibold mb-[18px] tracking-[-0.48px] text-px-black dark:text-white">
                                        Experience
                                    </h4>

                                    <ul className="[&>li]:list-none [&>li]:mb-[12px] [&>li]:text-[16px] [&>li]:font-medium [&>li]:text-[#111013] dark:[&>li]:text-white">
                                        {team?.experiences.map((experience, index) => (
                                            <li key={`${experience}-${index}`}>
                                                {experience}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* skills */}
                            {team?.skills && team?.skills.length > 0 && (
                                <div className="mb-[50px]">

                                    <h4 className="text-[24px] font-semibold mb-[35px] tracking-[-0.48px] text-px-black dark:text-white">
                                        My Skills
                                    </h4>

                                    {team?.skills.map((skill, index) => (
                                        <div
                                            key={`${skill.title}-${index}`}
                                            className="mb-[35px]"
                                        >

                                            <h6 className="text-[16px] font-medium text-[#111013] dark:text-white">
                                                {skill.title}
                                            </h6>

                                            <div className="relative w-full h-[5px] bg-[#d9d9d9]">

                                                <div
                                                    className="overflow-visible flex h-[5px] text-center whitespace-nowrap transition-[0.6s] relative bg-px-orange before:absolute before:content-[''] before:h-[20px] before:w-[1px] before:right-0 before:top-[-8px] before:my-auto before:bg-px-orange"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${skill.value}%`,
                                                    }}
                                                    aria-valuenow={skill.value}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >

                                                    <h6 className="mt-[-29px] font-medium text-[14px] absolute top-0 right-[-15px] uppercase">
                                                        {skill.value}%
                                                    </h6>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* contact form */}
                            <TeamContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamDetailsMainContent;
