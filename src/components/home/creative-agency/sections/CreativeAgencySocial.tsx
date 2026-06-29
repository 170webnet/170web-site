import { SocialShape } from "@/svg/ShapeIcons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        label: "Insights",
        icon: "/assets/img/social/social-1.png",
        href: "#",
    },
    {
        label: "Social",
        icon: "/assets/img/social/social-2.png",
        href: "#",
    },
    {
        label: "Design",
        icon: "/assets/img/social/social-3.png",
        href: "#",
    },
    {
        label: "Linkedin",
        icon: "/assets/img/social/social-4.png",
        href: "#",
    },
];

const EMAIL = "inquiry@170web.com";

const CreativeAgencySocial = () => {
    return (
        <div className="px-social-area p-relative">

            {/* SHAPE */}
            <span className="px-social-shape">
                <SocialShape />
            </span>

            <div className="px-social-bg" style={{ backgroundColor: "#ff471d" }}>
                <div className="mx-auto w-full max-w-[1550px] px-3">
                    <div className="grid grid-cols-12 gap-x-6 items-center">
                        {/* EMAIL */}
                        <div className="col-span-12 md:col-span-6">
                            <div className="px-social-mail">
                                <Link className="px-line-lr" href={`mailto:${EMAIL}`}>
                                    <span>
                                        <Mail size={18} />
                                    </span>
                                    {EMAIL}
                                </Link>
                            </div>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="col-span-12 md:col-span-6">
                            <div className="px-social-icon md:text-right">
                                {SOCIAL_LINKS.map((item) => (
                                    <Link key={item.label} href={item.href} style={{ marginLeft: "4px" }}>
                                        <Image width={52} height={52} src={item.icon} alt={item.label} />
                                        <span>{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencySocial;