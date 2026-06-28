import { SmartLink } from "@/components/common";
import { HeroArrowIcon } from "@/svg/ArrowIcons";
import Image from "next/image";

const SERVICES = [
	{
		id:1,
		icon: "/assets/img/service/icon/icon-1.png",
		title: "Brand Strategy",
		href: "/service-2",
	},
	{
		id:2,
		icon: "/assets/img/service/icon/icon-2.png",
		title: "Web Development",
		href: "/service-2",
	},
	{
		id:3,
		icon: "/assets/img/service/icon/icon-3.png",
		title: "UI/UX Design",
		href: "/service-2",
	},
	{
		id:4,
		icon: "/assets/img/service/icon/icon-4.png",
		title: "Digital Marketing",
		href: "/service-2",
	},
];

const CreativeAgencyService = () => {
	return (
		<div className="px-service-5-area">
			<div className="mx-auto w-full max-w-[1550px] px-3">
				<div className="grid grid-cols-12 gap-x-6">
					{SERVICES.map((service) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3" key={service.id}>
							<div className="px-service-5-item mb-25 px-fade-anim">

								{/* ICON */}
								<div className="px-service-5-icon">
									<Image className="img-fluid w-auto h-auto" width={90} height={60} src={service.icon} alt={service.title} />
								</div>

								{/* CONTENT */}
								<div className="px-service-5-content">
									<h4 className="px-service-5-title">
										<SmartLink className="px-line-lr" href={service.href}>
											{service.title}
										</SmartLink>
									</h4>

									<p>
										Brand identity design a the have to success whether you
										breath onfire quanto agency.
									</p>
								</div>
								{/* LINK */}
								<div className="px-service-5-link">
									<SmartLink className="px-doubble-effect" href={service.href}>
										View details
										<i>
											<HeroArrowIcon />
											<HeroArrowIcon />
										</i>
									</SmartLink>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyService;