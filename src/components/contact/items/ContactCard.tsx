import { ContactLocation } from "@/types/contact-dt";
import Image from "next/image";
import Link from "next/link";

const ContactCard = ({
    city,
    email,
    phone,
    image,
    mapLink,
    speed,
    isActive,
    extraClass,
}: ContactLocation) => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 mb-30">
            <div
                className={`tp-contact-us-content text-center ${extraClass ?? ""}`}
                data-speed={speed}
            >
                <div className="tp-contact-us-thumb flex justify-center">
                    <Image className="img-fluid w-full h-auto" width={356} height={244} src={image} alt={city} />
                </div>

                <div className="tp-contact-us-bottom">
                    <div className="tp-contact-us-info-details">
                        <h4 className="tp-contact-us-info-title">{city}</h4>

                        <Link href={`mailto:${email}`}>{email}</Link>
                        <Link href={`tel:${phone}`}>{phone}</Link>
                    </div>

                    <div className="tp-contact-us-btn">
                        <Link
                            className={`tp-btn-yellow-green w-full ${isActive ? "active" : ""
                                }`}
                            target="_blank"
                            href={mapLink}
                        >
                            <span>
                                <span className="text-1">View Location</span>
                                <span className="text-2">View Location</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;