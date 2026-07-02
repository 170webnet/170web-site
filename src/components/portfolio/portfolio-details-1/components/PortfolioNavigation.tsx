import { portfolioProjects } from "@/data/portfolio-projects";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/common";

const arrowCircle =
    "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-px-border text-px-black transition-colors duration-300 group-hover:border-px-primary group-hover:bg-px-primary group-hover:text-white dark:border-white/15 dark:text-white";
const eyebrow = "block text-[12px] font-semibold uppercase tracking-[0.18em] text-px-body dark:text-white/50";
const navTitle =
    "mt-2 block font-thunder text-[clamp(2rem,3.6vw,3.4rem)] font-semibold uppercase leading-[0.92] tracking-tight text-px-black transition-colors duration-300 group-hover:text-px-primary dark:text-white";

const PortfolioNavigation = ({ currentId = 1 }: { currentId?: number | string }) => {
    // Neighbors derive from the current project, wrapping at both ends.
    const idx = portfolioProjects.findIndex((p) => p.id === Number(currentId));
    const at = idx === -1 ? 0 : idx;
    const total = portfolioProjects.length;
    const prev = portfolioProjects[(at - 1 + total) % total];
    const next = portfolioProjects[(at + 1) % total];

    return (
        <section className="pb-[120px]">
            <div className="mx-auto w-full max-w-[1230px] px-3">
                <div className="grid grid-cols-1 border-t border-px-border md:grid-cols-2 dark:border-white/10">
                    {/* PREVIOUS */}
                    <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                        <SmartLink
                            href={`/portfolio-details-1/${prev.id}`}
                            aria-label={`Previous project: ${prev.title}`}
                            className="group flex items-center gap-6 border-b border-px-border py-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-px-primary md:border-b-0 md:border-r md:py-16 md:pr-10 dark:border-white/10"
                        >
                            <span className={arrowCircle}>
                                <ArrowUpLeft
                                    size={22}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                            <span className="min-w-0">
                                <span className={eyebrow}>Previous project</span>
                                <span className={navTitle}>{prev.title}</span>
                            </span>
                        </SmartLink>
                    </div>

                    {/* NEXT */}
                    <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                        <SmartLink
                            href={`/portfolio-details-1/${next.id}`}
                            aria-label={`Next project: ${next.title}`}
                            className="group flex items-center justify-end gap-6 py-12 text-right focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-px-primary md:py-16 md:pl-10"
                        >
                            <span className="min-w-0">
                                <span className={eyebrow}>Next project</span>
                                <span className={navTitle}>{next.title}</span>
                            </span>
                            <span className={arrowCircle}>
                                <ArrowUpRight
                                    size={22}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </SmartLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioNavigation;
