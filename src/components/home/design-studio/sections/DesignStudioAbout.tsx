import SmartLink from "@/components/common/SmartLink";
import { AboutBadgeIcon } from "@/svg/AboutBadgeIcon";
import Image from "next/image";

const About = () => {
    return (
        <div className="pt-160 pb-110 md:pb-[80px] lg:pb-[80px] max-[767px]:pb-[80px]">
            <div className="mx-auto w-full max-w-[1750px] px-3">
                <div className="grid grid-cols-12 gap-x-6 items-end">
                    <div className="col-span-12 xl:col-span-9">
                        <div className="p-relative">
                            <h3 className="font-thunder font-bold uppercase tracking-[-0.01em] leading-[0.74] text-px-black dark:text-white text-[85px] mb-[30px] min-[768px]:text-[150px] min-[992px]:text-[200px] min-[992px]:mb-0 min-[1200px]:text-[225px] min-[1400px]:text-[275px] min-[1600px]:text-[322px] min-[1701px]:text-[350px]">
                                <b>We are</b>{" "}
                                <i className="text-px-red not-italic inline-block uppercase tracking-normal text-[80px] leading-[0.87] translate-x-[-30px] min-[768px]:translate-x-[-10px] min-[992px]:translate-x-0">The Creative</i>{" "}
                                <br className="max-[1199px]:hidden" />
                                <em className="text-px-red not-italic relative pl-[330px] max-[1199px]:pl-0">
                                    <Image
                                        className="max-w-full h-auto z-[2] absolute top-[-18%] left-[-15%] min-[1200px]:top-[-46%] min-[1200px]:left-[-19%] min-[1200px]:scale-[0.7] max-[1199px]:hidden"
                                        width={640}
                                        height={340}
                                        src="/assets/img/gift-img/title-img.gif"
                                        alt="gif image"
                                    />
                                    design
                                </em>{" "}
                                <br className="max-[1199px]:hidden" />
                                <b className="p-relative">
                                    studio
                                    <span className="bg-px-black dark:bg-white w-[76%] h-[10px] inline-block absolute bottom-[32%] left-[105%] max-[1199px]:hidden"></span>
                                </b>
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-3">
                        <div className="text-right min-[992px]:max-[1199px]:flex min-[992px]:max-[1199px]:justify-end min-[992px]:max-[1199px]:items-center min-[768px]:max-[991px]:flex min-[768px]:max-[991px]:justify-end min-[768px]:max-[991px]:items-start max-[767px]:flex max-[767px]:justify-end max-[767px]:items-start">
                            <SmartLink className="px-btn-zikzak text-center p-relative mb-90 min-[768px]:mb-0 min-[768px]:mr-[20px] min-[768px]:max-[991px]:translate-y-[-10px] max-[767px]:translate-y-[-10px]" href="/about-us">
                                <span className="btn-text top-[56%]">
                                    About <br /> Us
                                </span>
                                <i className="zikzak-bg">
                                    <AboutBadgeIcon />
                                </i>
                            </SmartLink>
                            <span className="font-thunder font-bold uppercase text-end inline-block leading-[0.81] pb-[17px] text-px-black dark:text-white text-[70px] min-[992px]:text-[100px] min-[1200px]:text-[100px] min-[1400px]:text-[125px] min-[1600px]:text-[125px] min-[1701px]:text-[160px]">/ FROM <br /> VIETNAM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
