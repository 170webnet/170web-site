"use client";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-x-6">

                {/* Email */}
                <div className="col-span-12">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your email *"
                            type="email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your name *"
                            type="text"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Phone */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Your phone *"
                            type="text"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="form-error">{errors.phone.message}</p>
                        )}
                    </div>
                </div>

                {/* Company */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Company name"
                            type="text"
                            {...register("company")}
                        />
                    </div>
                </div>

                {/* Budget */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="tp-contact-form-input mb-20">
                        <input
                            placeholder="Budget"
                            type="text"
                            {...register("budget")}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="col-span-12">
                    <div className="tp-contact-form-input mb-20">
                        <textarea
                            placeholder="Message *"
                            {...register("message")}
                        ></textarea>
                        {errors.message && (
                            <p className="form-error">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button className="w-full" type="submit" aria-label="Send contact message">
                            <span>
                                <span className="text-1">Send Message</span>
                                <span className="text-2">Send Message</span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default ContactForm;
