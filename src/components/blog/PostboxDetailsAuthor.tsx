import { SiFacebook, SiX, SiDribbble, SiInstagram } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";

// data layer
const authorData = {
    name: "Peter Bowman",
    bio: "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam ligula.",
    image: "/assets/img/blog/blog-details/user-3.jpg",
};

const socialLinks = [
    { id: "facebook", icon: <SiFacebook />, link: "#" },
    { id: "twitter", icon: <SiX />, link: "#" },
    { id: "dribbble", icon: <SiDribbble />, link: "#" },
    { id: "instagram", icon: <SiInstagram />, link: "#" },
];

const PostboxDetailsAuthor = () => {
    return (
        <div className="sidebar-widget-author flex items-start">

            {/* Author Image */}
            <div className="sidebar-widget-author-img">
                <Image
                    width={100}
                    height={100}
                    src={authorData.image}
                    alt={authorData.name}
                />
            </div>

            {/* Content */}
            <div className="postbox-details-content">
                <div className="sidebar-widget-author-content">
                    <span>About Author</span>
                    <h4 className="sidebar-widget-author-name">
                        {authorData.name}
                    </h4>
                    <p>{authorData.bio}</p>
                </div>

                {/* Social */}
                <div className="sidebar-widget-author-social">
                    {socialLinks.map((item) => (
                        <Link key={item.id} href={item.link}>
                            <span>{item.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostboxDetailsAuthor;