import { OfficeLocationDt } from "@/types/contact-dt";
import LocationItem from "../items/LocationItem";

const officeLocations: OfficeLocationDt[] = [
    {
        id:1,
        city: "London",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@170web.com",
        directionsLink: "#",
    },
    {
        id:2,
        city: "New York",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@170web.com",
        directionsLink: "#",
    },
    {
        id:3,
        city: "Singapore",
        address: ["28 Foubert’s Place", "London W1F 7PR"],
        phone: "+44 (0)20 3667 7446",
        email: "london@170web.com",
        directionsLink: "#",
    },
];

interface bgColorProps {
    sectionBgColor?: string;
}

const OfficeLocationsSection: React.FC<bgColorProps> = ({ sectionBgColor }) => {
    return (
        <div
            className="pt-[120px] pb-[130px]"
            style={{ backgroundColor: sectionBgColor }}>
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">

                        {/* Heading */}
                        <div className="mb-[20px]">
                            <h4 className="uppercase font-semibold leading-none font-thunder text-px-black-2 dark:text-white text-[55px] md:text-[90px] lg:text-[120px] xl:text-[120px] 2xl:text-[140px]">
                                Let&apos;s Work Together
                            </h4>
                        </div>

                        {/* Locations */}
                        <div className="border-t border-[#1e1e1e14] dark:border-white/[0.08]">
                            {officeLocations.map((location) => (
                                <LocationItem key={location.id} {...location} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocationsSection;
