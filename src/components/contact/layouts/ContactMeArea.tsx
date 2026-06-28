import ContactMeForm from "@/components/contact/forms/ContactMeForm";

const ContactMeArea = () => {
    return (
        <div className="tp-contact-me-interest-ptb px-contact-me-style p-relative pb-150">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    <div className="col-span-12 lg:col-span-10">
                        <ContactMeForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMeArea;