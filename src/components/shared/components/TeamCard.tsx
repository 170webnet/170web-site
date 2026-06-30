import { SiFacebook, SiX, SiInstagram } from "react-icons/si";


import { SmartLink } from "@/components/common";
import { TeamItemDT } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
    // each link: w-45/h-46 circle, white bg, black icon; orange fill + reveal staggered on card hover
    const linkClass =
        "block h-[46px] w-[45px] my-[6px] mx-0 leading-[44px] text-center rounded-full relative text-px-black bg-white opacity-0 invisible translate-y-[-20px] transition-all duration-200 ease-in-out hover:bg-px-orange group-hover/team:opacity-100 group-hover/team:visible group-hover/team:translate-y-0 [&>span]:inline-flex [&>span]:items-center [&>span]:justify-center [&>span]:h-full";
    return (
        <div className="absolute top-[15px] right-[20px]">
            <Link href="#" className={`${linkClass} delay-[0.1s]`}>
                <span>
                    <SiFacebook />
                </span>
            </Link>
            <Link href="#" className={`${linkClass} delay-[0.2s]`}>
                <span>
                    <SiX />
                </span>
            </Link>
            <Link href="#" className={`${linkClass} delay-[0.3s]`}>
                <span>
                    <SiInstagram />
                </span>
            </Link>
        </div>
    );
};

const TeamCard: React.FC<TeamItemDT> = ({ id, image, name, role, animation }) => {

    return (
        <div className={`col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 2xl:col-span-3 ${animation}`}>
            <div className="group/team mb-[30px]">
                <div className="relative mb-[25px]">
                    {/* ripple-image: JS-driven hover effect hook — keep class */}
                    <div className="ripple-image">
                        {/* SOCIAL */}
                        <div>
                            <SocialLinks />
                        </div>
                        <Image className="max-w-full h-auto w-full" width={362} height={420} src={image} alt={name} />
                    </div>
                </div>

                <div>
                    <h4 className="text-[20px] font-semibold leading-none mb-0 tracking-[-0.03em] text-px-black dark:text-white">
                        <SmartLink className="px-line-lr" href={`/team-details/${id}`}>
                            {name}
                        </SmartLink>
                    </h4>
                    <span className="text-[14px] font-normal leading-none text-px-body dark:text-white/50">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
