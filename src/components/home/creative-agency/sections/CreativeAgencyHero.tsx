"use client";
import { Plus } from "lucide-react";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { HeroArrowIcon } from "@/svg/ArrowIcons";
import { SmartLink } from "@/components/common";

import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
	{ src: "/assets/img/hero/hero-5/hero-1.jpg", label: "[01]" },
	{ src: "/assets/img/hero/hero-5/hero-2.jpg", label: "[02]" },
	{ src: "/assets/img/hero/hero-5/hero-3.jpg", label: "[03]" },
];

const SERVICES = [
	"Brand Design",
	"Motion Graphics",
	"Art Direction",
];

const SOCIALS = [
	{ name: "linkedin", href: "#" },
	{ name: "Instagram", href: "#" },
	{ name: "Twitter", href: "#" },
];

const CreativeAgencyHero = () => {
	const currentYear = new Date().getFullYear();
	const isDarkTheme = useIsDarkRoute();

	const heroStyles = {
		sectionBackground: !isDarkTheme ? "#FFF5F3" : null
	}

	return (
		<div
			id="top"
			className="pb-[80px] lg:pb-[40px] pt-[100px] lg:pt-[160px] xl:pt-[330px] 2xl:pt-[450px] bg-[#FFF5F3] dark:bg-transparent"
			style={{ backgroundColor: heroStyles.sectionBackground || undefined }}
		>
			<div className="mx-auto w-full max-w-[1870px] px-3">
				<div className="grid grid-cols-12 gap-x-6 items-end">

					{/* LEFT IMAGES */}
					<div className="col-span-12 lg:col-span-3 xl:col-span-2 2xl:col-span-3 hidden md:block">
						<div className="md:flex lg:block md:mb-[30px] lg:mb-0">
							{HERO_IMAGES.map((item) => (
								<div key={item.src} className="mt-[30px] flex items-end md:mr-[30px] lg:mr-0">
									<SmartLink href="/portfolio-2">
										<Image width={120} height={100} src={item.src} alt="hero image" />
									</SmartLink>
									<span className="ml-[10px] mb-[10px] inline-block font-medium text-[14px] leading-none tracking-[-0.01em] uppercase text-px-body dark:text-white/60 [writing-mode:sideways-lr]">
										{item.label}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* MAIN CONTENT */}
					<div className="col-span-12 lg:col-span-9 xl:col-span-7 2xl:col-span-7">
						<div>
							<p className="font-medium text-[28px] md:text-[36px] xl:text-[34px] 2xl:text-[36px] leading-[1.1] tracking-[-0.04em] text-px-black dark:text-white mb-[50px] lg:mb-[170px] [&_br]:hidden md:[&_br]:inline">
								170web is a creative studio <br />
								based in London. We think like <br />
								an agency and produce like visuals <br />
								for brands & agencies.
							</p>

							<div>
								<div className="flex flex-wrap">

									{/* YEAR */}
									<div className="basis-full md:basis-1/3 md:order-none order-1">
										<div className="mb-[20px]">
											<span className="inline-block font-medium text-[14px] leading-[1.3] tracking-[-0.01em] uppercase text-px-body dark:text-white/60">
												©{currentYear} Modern Studio
											</span>
										</div>
									</div>

									{/* SERVICES */}
									<div className="flex-1 order-none">
										<div className="mb-[20px]">
											{SERVICES.map((service) => (
												<div key={service} className="group">
													<SmartLink
														href="/service-1"
														className="inline-block font-medium text-[14px] leading-[1.3] tracking-[-0.01em] uppercase text-px-body dark:text-white/60"
													>
														<span className="hidden md:inline-block shrink-0 -translate-y-[2px] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-x-[10px]">
															<Plus />
														</span>
														{service}
													</SmartLink>
												</div>
											))}
										</div>
									</div>

									{/* SOCIAL */}
									<div className="flex-1 order-none">
										<div className="mb-[20px]">
											{SOCIALS.map((social) => (
												<div key={social.name}>
													<Link
														className="px-doubble-effect font-medium text-[14px] leading-[1.3] tracking-[-0.01em] uppercase text-px-body dark:text-white/60"
														href={social.href}
													>
														{social.name}
														<i>
															<HeroArrowIcon />
															<HeroArrowIcon />
														</i>
													</Link>
												</div>
											))}
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					{/* VIDEO */}
					<div className="col-span-12 xl:col-span-3 2xl:col-span-2">
						<div className="flex justify-end">
							<div className="w-full xl:w-auto mb-0">
								<div className="text-right hidden xl:block mb-[50px]">
									<Image className="max-w-full h-auto" width={171} height={60} src="/assets/img/shape/shape-1.png" alt="shape" />
								</div>

								<video className="w-full h-full md:mt-[40px] lg:mt-[40px] xl:w-auto xl:h-auto xl:mt-0" loop muted autoPlay playsInline>
									<source
										src="https://html.aqlova.com/videos/170web/banner-4-1.mp4"
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyHero;