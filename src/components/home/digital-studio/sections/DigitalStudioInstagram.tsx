/* eslint-disable @next/next/no-img-element */
import { InstragramIcon } from "@/svg/SocialIcons";
import Link from "next/link";

const instagramImages = [
    "/assets/img/update/instagram/insta-inner-1.jpg",
    "/assets/img/update/instagram/insta-inner-2.jpg",
    "/assets/img/update/instagram/insta-inner-3.jpg",
    "/assets/img/update/instagram/insta-inner-4.jpg",
    "/assets/img/update/instagram/insta-inner-5.jpg",
    "/assets/img/update/instagram/insta-inner-6.jpg",
    "/assets/img/update/instagram/insta-inner-7.jpg",
];
const DigitalStudioInstagram = () => {
    return (
        <div className="bf-instagram-area bf-instagram-ptb text-center">
            <div className="bf-instagram-thumb-wrap p-relative">

                {/* Inner Images */}
                {instagramImages.map((img, index) => (
                    <div
                        key={img}
                        className={`bf-instagram-thumb-inner-${index + 1} hidden xl:block`}
                    >
                        <img src={img} alt={`instagram-${index + 1}`} />
                    </div>
                ))}

                {/* Instagram Icon */}
                <div className="bf-instagram-thumb-inner-8 hidden xl:block">
                    <Link href="#" className="inline-flex transition-transform duration-200 hover:scale-110">
                        <InstragramIcon />
                    </Link>
                </div>

                {/* Main Image */}
                <div className="bf-instagram-thumb">
                    <img src="/assets/img/update/instagram/insta-1.jpg" alt="instagram-main" />
                </div>

                {/* Content */}
                <div className="bf-instagram-content-wrap text-left">
                    <div className="bf-instagram-title-box">
                        <span className="bf-instagram-subtitle">INSTAGRAM</span>
                        <h4 className="bf-instagram-title">@170webagency</h4>
                    </div>

                    <div className="bf-instagram-content">
                        <p>
                            Become a part of our stories! <br /> Join the adventure.
                        </p>
                        <Link href="#" className="tp-btn inline-flex items-center">
                            <span>
                                <span className="text-1">Follow Us</span>
                                <span className="text-2">Follow Us</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioInstagram;