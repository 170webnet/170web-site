import { ContactForm, ContactInfoItem, SocialLinkItem } from "../sections/index";

/* =======================
   Data Configuration
======================= */
const contactInfoData = [
    {
        id: 1,
        title: "inquires",
        content: "contact@170web.com",
        href: "mailto:contact@170web.com",
        colClass: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12",
    },
    {
        id: 2,
        title: "Raleigh",
        content: `125 N. Harrington Street 
Raleigh, NC 27603 
919-833.6413`,
        href: "#",
        colClass: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12 xl:col-span-6",
    },
    {
            id: 3,
        title: "Raleigh",
        content: `125 N. Harrington Street 
Raleigh, NC 27603 
919-833.6413`,
        href: "#",
        colClass: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12 xl:col-span-6",
    },
];

const socialLinks = [
    { id: "linkedin", name: "LinkedIn", href: "#" },
    { id: "instagram", name: "Instagram", href: "#" },
    { id: "twitter", name: "Twitter", href: "#" },
];

const ContactArea = () => {
    return (
        <div className="px-contact-ptb pt-200 pb-140">
            {/* Heading */}
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="px-contact-heading text-center">
                            <h4 className="px-contact-title">Get in touch</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-center">

                    {/* Left Info Section */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="px-contact-wrap pb-50">
                            <div className="px-contact-inf-box">
                                <div className="grid grid-cols-12 gap-x-6">
                                    {contactInfoData.map((item) => (
                                        <ContactInfoItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="px-contact-inf-social">
                                {socialLinks.map((social) => (
                                    <SocialLinkItem key={social.id} {...social} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="px-contact-wrapper">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
