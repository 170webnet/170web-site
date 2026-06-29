import { SiFacebook, SiX, SiDribbble, SiInstagram } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";

// data layer
const authorData = {
    name: "Peter Bowman",
    role: "Senior Writer",
    bio: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam ligula.",
    image: "/assets/img/blog/blog-details/user-3.jpg",
};

const socialLinks = [
    { id: "facebook", name: "Facebook", icon: <SiFacebook size={14} />, link: "#" },
    { id: "twitter", name: "X", icon: <SiX size={14} />, link: "#" },
    { id: "dribbble", name: "Dribbble", icon: <SiDribbble size={14} />, link: "#" },
    { id: "instagram", name: "Instagram", icon: <SiInstagram size={14} />, link: "#" },
];

const PostboxDetailsAuthor = () => {
    return (
        <div className="flex flex-col items-start gap-6 rounded-[20px] bg-px-grey-1 p-7 sm:flex-row sm:items-center md:p-9">
            {/* Author Image */}
            <Image
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-white"
                width={100}
                height={100}
                src={authorData.image}
                alt={authorData.name}
            />

            {/* Content */}
            <div className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-px-primary">
                    About Author
                </span>
                <h4 className="mt-1.5 flex flex-wrap items-baseline gap-x-3 text-[1.35rem] font-bold tracking-tight text-px-black">
                    {authorData.name}
                    <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-px-body">
                        {authorData.role}
                    </span>
                </h4>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-px-body">
                    {authorData.bio}
                </p>

                {/* Social */}
                <div className="mt-5 flex items-center gap-2.5">
                    {socialLinks.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            aria-label={item.name}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-px-black shadow-sm transition-colors hover:bg-px-primary hover:text-white"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostboxDetailsAuthor;
