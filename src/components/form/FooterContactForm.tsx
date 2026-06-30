"use client";
import { FooterSocialArrowIcon } from "@/svg/ArrowIcons";
import NiceSelect from "@/ui/NiceSelect";

const FooterContactForm = () => {
    return (
        <form method="POST">
            <div>
                <div className="grid grid-cols-12 gap-x-6">

                    {/* Select */}
                    <div className="col-span-12 xl:col-span-4">
                        <div className="inline-block w-full mb-10">
                            <NiceSelect
                                className="nice-select px-select current"
                                defaultCurrent={0}
                                options={[
                                    { value: "Personal portfolio", text: "Personal portfolio" },
                                    { value: "Digital Agency", text: "Digital Agency" },
                                    { value: "Creative Agency", text: "Creative Agency" },
                                    { value: "New Added", text: "New Added" },
                                    { value: "It Solution", text: "It Solution" }
                                ]}
                                onChange={() => { }}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-span-12 xl:col-span-4">
                        <div className="relative mb-15">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full! h-[56px]! leading-[56px]! bg-transparent! text-white/70! border! border-white/10! rounded-[72px]! pl-[23px]! pr-[55px]! text-[17px]! font-medium! tracking-[-0.17px]! focus:border-white! placeholder:text-white/70! placeholder:text-[17px]! placeholder:font-medium! placeholder:tracking-[-0.17px]!"
                            />
                        </div>
                    </div>{" "}

                    {/* Email */}
                    <div className="col-span-12 xl:col-span-4">
                        <div className="relative mb-15">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full! h-[56px]! leading-[56px]! bg-transparent! text-white/70! border! border-white/10! rounded-[72px]! pl-[23px]! pr-[55px]! text-[17px]! font-medium! tracking-[-0.17px]! focus:border-white! placeholder:text-white/70! placeholder:text-[17px]! placeholder:font-medium! placeholder:tracking-[-0.17px]!"
                            />
                        </div>
                    </div>{" "}

                    {/* Message */}
                    <div className="col-span-12 xl:col-span-12">
                        <div className="relative mb-15">
                            <input
                                type="text"
                                placeholder="How may I help you?"
                                className="w-full! h-[56px]! leading-[56px]! bg-transparent! text-white/70! border! border-white/10! rounded-[72px]! pl-[23px]! pr-[55px]! text-[17px]! font-medium! tracking-[-0.17px]! focus:border-white! placeholder:text-white/70! placeholder:text-[17px]! placeholder:font-medium! placeholder:tracking-[-0.17px]!"
                            />
                            <button
                                type="submit"
                                aria-label="Send contact message"
                                className="absolute top-1/2 right-[8px] -translate-y-1/2 grid place-content-center text-center w-[40px] h-[40px] rounded-full text-px-black bg-white transition-all duration-300 hover:text-white hover:bg-px-orange"
                            >
                                <span>
                                    <FooterSocialArrowIcon strokeColor="currentColor" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FooterContactForm;
