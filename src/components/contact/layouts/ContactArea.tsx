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
        <div className="pt-[130px] pb-[80px] md:pt-[160px] md:pb-[140px] xl:pt-[200px]">
            {/* Heading */}
            <div className="w-full px-3">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="text-center max-lg:mb-[30px] lg:max-xl:mb-[30px]">
                            <h4 className="font-thunder font-bold uppercase leading-none text-px-black-2 dark:text-white text-[90px] sm:text-[120px] md:text-[180px] lg:text-[230px] xl:text-[300px] 2xl:text-[350px] min-[1600px]:text-[450px] min-[1891px]:text-[480px]">Get in touch</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-center">

                    {/* Left Info Section */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="border-t border-[rgba(30,30,30,0.08)] dark:border-white/[0.08] pb-[50px]">
                            <div>
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
                        <div className="rounded-[20px] bg-[#F7F7F7] dark:bg-[#1C1D20] p-[30px] sm:p-[50px] lg:p-[60px_60px_65px] xl:p-[60px_80px_65px]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
