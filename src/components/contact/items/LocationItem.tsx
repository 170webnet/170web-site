import { OfficeLocationDt } from "@/types/contact-dt";
import Link from "next/link";

const LocationItem = ({
    city,
    address,
    phone,
    email,
    directionsLink,
}: OfficeLocationDt) => {
    return (
        <div className="px-contact-info-item">
            <div className="grid grid-cols-12 gap-x-6 items-center">

                {/* City */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <span className="px-contact-info-item-title">{city}</span>
                </div>

                {/* Address */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div className="px-contact-info-item-content">
                        <Link className="px-line-black" href="#">
                            {address.map((line,index) => (
                                <span key={`${line}-${index}`}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div className="px-contact-info-item-content">
                        <Link className="px-line-black" href={`tel:${phone}`}>
                            {phone}
                        </Link>
                        <br />
                        <Link className="px-line-black" href={`mailto:${email}`}>
                            {email}
                        </Link>
                    </div>
                </div>
                {/* Directions */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <div className="px-contact-info-item-btn lg:text-right">
                        <Link href={directionsLink}>Directions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LocationItem;