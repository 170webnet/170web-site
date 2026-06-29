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
			className="px-hero-5-area px-hero-5-style px-hero-5-pt pb-40"
			style={{ backgroundColor: heroStyles.sectionBackground || undefined }}
		>
			<div className="mx-auto w-full max-w-[1870px] px-3">
				<div className="grid grid-cols-12 gap-x-6 items-end">

					{/* LEFT IMAGES */}
					<div className="col-span-12 lg:col-span-3 xl:col-span-2 2xl:col-span-3 hidden md:block">
						<div className="px-hero-5-thumb-wrap">
							{HERO_IMAGES.map((item) => (
								<div key={item.src} className="px-hero-5-thumb mt-30 flex items-end">
									<SmartLink href="/portfolio-2">
										<Image width={120} height={100} src={item.src} alt="hero image" />
									</SmartLink>
									<span>{item.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* MAIN CONTENT */}
					<div className="col-span-12 lg:col-span-9 xl:col-span-7 2xl:col-span-7">
						<div className="px-hero-5-content">
							<p>
								170web is a creative studio <br />
								based in London. We think like <br />
								an agency and produce like visuals <br />
								for brands & agencies.
							</p>

							<div className="px-hero-5-list">
								<div className="flex flex-wrap row-cols-xl-3 row-cols-md-3 row-cols-2">

									{/* YEAR */}
									<div className="col-span-12 md:col-span-4 md:order-0 order-1">
										<div className="px-hero-5-content mb-20">
											<span>©{currentYear} Modern Studio</span>
										</div>
									</div>

									{/* SERVICES */}
									<div className="flex-1 order-0">
										<div className="px-hero-5-category-wrap mb-20">
											{SERVICES.map((service) => (
												<div key={service} className="px-hero-5-category">
													<SmartLink href="/service-1">
														<span>
															<Plus />
														</span>
														{service}
													</SmartLink>
												</div>
											))}
										</div>
									</div>

									{/* SOCIAL */}
									<div className="flex-1 order-0">
										<div className="px-hero-5-social-wrap mb-20">
											{SOCIALS.map((social) => (
												<div key={social.name} className="px-hero-5-social">
													<Link className="px-doubble-effect" href={social.href}>
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
						<div className="px-hero-4-video-wrap flex justify-end">
							<div className="px-hero-4-video">
								<div className="text-right hidden xl:block mb-50">
									<Image className="max-w-full h-auto" width={171} height={60} src="/assets/img/shape/shape-1.png" alt="shape" />
								</div>

								<video loop muted autoPlay playsInline>
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