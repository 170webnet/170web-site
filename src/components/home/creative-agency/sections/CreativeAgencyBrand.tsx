"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const brandLogosDark = [
	"/assets/img/brand/brand-1-1.png",
	"/assets/img/brand/brand-1-2.png",
	"/assets/img/brand/brand-1-3.png",
	"/assets/img/brand/brand-1-4.png",
	"/assets/img/brand/brand-1-5.png",
	"/assets/img/brand/brand-1-6.png",
];
const brandLogosWhite = [
	"/assets/img/brand/brand-white/brand-1.png",
	"/assets/img/brand/brand-white/brand-2.png",
	"/assets/img/brand/brand-white/brand-3.png",
	"/assets/img/brand/brand-white/brand-4.png",
	"/assets/img/brand/brand-white/brand-5.png",
	"/assets/img/brand/brand-white/brand-6.png",
];

const CreativeAgencyBrand = () => {
	const isDarkTheme = useIsDarkRoute();
	const brands = isDarkTheme ? brandLogosWhite : brandLogosDark

	return (
		<div className="pt-[40px] pb-[80px] lg:pt-[80px] lg:pb-[80px] xl:pt-[120px] xl:pb-[120px]">
			<div className="mx-auto w-full max-w-[1550px] px-3">
				<div className="grid grid-cols-12 gap-x-[0px]">
					{brands.map((img, index) => (
						<div
							key={img}
							className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-2"
						>
							<div className="grid place-content-center text-center w-full min-h-[140px] p-[20px] mb-[5px] xl:mb-0 bg-transparent border border-[#ECECEC] dark:border-white/10">
								<Image className="max-w-full h-auto" width={90} height={40} src={img} alt={`brand-${index + 1}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyBrand;