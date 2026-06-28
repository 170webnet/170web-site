import { contactLocations } from "@/data/contact-locations";
import ContactCard from "../items/ContactCard";

const ContactUsInfoArea = () => {
    return (
        <div className="tp-contact-us-info-area pb-120">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    {contactLocations.map((location) => (
                        <ContactCard key={location.id} {...location} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsInfoArea;