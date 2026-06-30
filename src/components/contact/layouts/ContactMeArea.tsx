import ContactMeForm from "@/components/contact/forms/ContactMeForm";

const ContactMeArea = () => {
    return (
        <div className="relative pb-[150px]">
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