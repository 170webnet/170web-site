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
        <div className="pt-[46px] pb-[35px] lg:pb-[46px] border-b border-[rgba(30,30,30,0.08)] dark:border-white/[0.08]">
            <div className="grid grid-cols-12 gap-x-6 items-center">

                {/* City */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <span className="inline-block mb-[20px] lg:mb-0 text-[28px] lg:text-[30px] xl:text-[44px] font-semibold leading-none tracking-[-1.32px] text-px-black-2 dark:text-white">{city}</span>
                </div>

                {/* Address */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div className="mb-[20px] lg:mb-0">
                        <Link className="px-line-black text-[16px] font-medium tracking-[-0.4px] text-[#686868] hover:text-px-black dark:text-white/60 dark:hover:text-white" href="#">
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
                    <div className="mb-[20px] lg:mb-0">
                        <Link className="px-line-black text-[16px] font-medium tracking-[-0.4px] text-[#686868] hover:text-px-black dark:text-white/60 dark:hover:text-white" href={`tel:${phone}`}>
                            {phone}
                        </Link>
                        <br />
                        <Link className="px-line-black text-[16px] font-medium tracking-[-0.4px] text-[#686868] hover:text-px-black dark:text-white/60 dark:hover:text-white" href={`mailto:${email}`}>
                            {email}
                        </Link>
                    </div>
                </div>
                {/* Directions */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <div className="lg:text-right">
                        <Link className="inline-block px-[35px] py-[11px] rounded-[60px] text-[16px] font-medium tracking-[-0.6px] text-[#686868] border border-[#e5e5e5] hover:border-transparent hover:text-white hover:bg-px-orange dark:text-white dark:border-white/10 dark:hover:border-transparent dark:hover:bg-px-orange" href={directionsLink}>Directions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LocationItem;