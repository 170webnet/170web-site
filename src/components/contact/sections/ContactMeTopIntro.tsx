import Image from "next/image";

const ContactMeTopIntro = () => {
    return (
        <div className="relative pt-[150px] pb-[100px] max-xl:pb-[50px]">
            <div className="mx-auto w-full max-w-[1550px] px-3">
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    <div className="col-span-12 xl:col-span-9">
                        <div>
                            <span className="inline-block mb-[30px] font-medium text-[16px] tracking-[-0.03em] text-px-black dark:text-white">
                                CONTACT ME
                            </span>
                            <h2 className="uppercase font-bold leading-[0.8] font-thunder text-px-black dark:text-white text-[80px] md:text-[100px] lg:text-[135px] xl:text-[140px] 2xl:text-[185px] min-[1600px]:text-[200px] [&_span]:text-px-orange [&_img]:inline [&_img]:translate-y-[-15px] [&_img]:max-md:hidden">
                                Let&apos;s <span>discuss</span> <br />
                                <Image width={140} height={140} src="/assets/img/team/circle-img.png" alt="circle image" /> your project!
                            </h2>
                            <p className="font-medium text-[22px] pl-0 xl:pl-[410px] 2xl:pl-[490px] text-px-black dark:text-white [&_br]:max-md:hidden max-md:hidden">
                                Let&apos;s start a conversation! fill out our <br />
                                contact form and we&apos;ll get back to you as <br />
                                soon as possible
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactMeTopIntro;
