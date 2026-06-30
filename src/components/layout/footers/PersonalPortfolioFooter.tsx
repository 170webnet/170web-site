import PersonalPortCopyright from "./subComponents/PersonalPortCopyright";
import PersonalPortTextSlider from "./subComponents/PersonalPortTextSlider";
import FooterContactForm from "@/components/form/FooterContactForm";
import { FooterSocialArrowIcon } from "@/svg/ArrowIcons";
import Link from "next/link";

const socialLinks = ["Linkedin", "Twitter", "Facebook"];

const PersonalPortfolioFooter = () => {
    return (
        <footer className="bg-[#0a0a0a] dark:bg-[#1c1d20]">
            <div className="pt-[90px] pb-[120px]">

                {/* Slider Area */}
                <PersonalPortTextSlider />

                <div className="container-px">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-start-5 col-span-12 xl:col-span-8">
                            <div>

                                {/* Contact Info */}
                                <div>
                                    <div>
                                        <Link
                                            className="inline-block mb-[20px] text-white text-[34px] font-semibold leading-none font-thunder"
                                            href="tel:(510)8956500"
                                        >
                                            (510) 895-6500
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="inline-block mb-[20px] text-white text-[60px] md:text-[90px] xl:text-[130px] font-semibold leading-none font-thunder"
                                            href="mailto:Hello@170web.com"
                                        >
                                            Hello@170web.com
                                        </Link>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <FooterContactForm />

                                {/* Social Links */}
                                <div>
                                    {socialLinks.map((platform) => (
                                        <Link
                                            href="#"
                                            key={platform}
                                            style={{ marginRight: "5px" }}
                                            className="inline-block tracking-[-0.17px] text-white/70 bg-[#121212] dark:bg-white/5 rounded-[72px] py-[14px] px-[15px] md:py-[20px] md:px-[40px] text-[14px] md:text-[17px] font-semibold leading-none hover:text-white hover:bg-px-orange"
                                        >
                                            {platform}
                                            <span className="inline-block ml-[10px]">
                                                <FooterSocialArrowIcon />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <PersonalPortCopyright />
        </footer>
    );
};

export default PersonalPortfolioFooter;
