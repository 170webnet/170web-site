import { getCurrentYear } from "@/utils/getCurrentYear";
import { SiInstagram, SiDribbble, SiYoutube } from "react-icons/si";
import { ArrowRight, ArrowUp } from "lucide-react";
import { ScrollLink } from "@/components/common";
import Link from "next/link";

/* ------------------ DATA ------------------ */

const socialLinks = [
    { id: "instagram", name: "Instagram", Icon: SiInstagram, href: "#" },
    { id: "dribbble", name: "Dribbble", Icon: SiDribbble, href: "#" },
    { id: "youtube", name: "YouTube", Icon: SiYoutube, href: "#" },
];

const contacts = [
    { label: "+999 23654 2654", href: "tel:+999236542654" },
    { label: "170web@help.com", href: "mailto:170web@help.com" },
];

const metaLabel = "mb-5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45";
const metaLink = "text-[15px] text-white/60 transition-colors hover:text-px-primary";

/* ------------------ MAIN ------------------ */

const DigitalStudioFooter = () => {
    return (
        <footer className="px-3 pb-[30px] pt-[40px]">
            <div className="relative mx-auto w-full max-w-[1750px] overflow-hidden rounded-t-[28px] bg-px-black text-white md:rounded-t-[44px]">
                <div className="mx-auto w-full max-w-[1430px] px-6 pt-[72px] md:px-12 md:pt-[110px]">
                    {/* eyebrow + availability status */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/55">
                        <span className="text-px-primary">Have an idea?</span>
                        <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
                        <span className="inline-flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-px-primary opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-px-primary" />
                            </span>
                            Available for new projects
                        </span>
                    </div>

                    {/* headline — the thesis, set in the studio's display face */}
                    <h2 className="mt-8 max-w-[14ch] font-thunder text-[clamp(3.2rem,8vw,8rem)] font-bold uppercase leading-[0.88] tracking-tight text-white">
                        Let&apos;s create something <span className="text-px-primary">special</span> together
                    </h2>

                    {/* email capture */}
                    <form action="#" className="mt-12 max-w-[620px]">
                        <label htmlFor="footer-email" className={metaLabel}>
                            Newsletter
                        </label>
                        <div className="flex items-center gap-4 border-b border-white/20 pb-4 transition-colors focus-within:border-px-primary">
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="your@email.com"
                                className="h-auto! w-full border-0! bg-transparent! px-0! py-0! text-[18px]! leading-normal! text-white! outline-none placeholder:text-white/35!"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-px-primary text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-px-primary"
                            >
                                <ArrowRight size={20} aria-hidden="true" />
                            </button>
                        </div>
                        <p className="mt-3 text-[13px] text-white/40">
                            No spam — just occasional notes from the studio.
                        </p>
                    </form>

                    {/* meta band */}
                    <div className="mt-[90px] grid grid-cols-1 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
                        <div className="lg:col-span-4">
                            <span className={metaLabel}>Studio</span>
                            <p className="text-[15px] font-semibold text-white">London</p>
                            <p className="mt-1.5 text-[15px] leading-relaxed text-white/55">
                                Germany 785 15th Street
                                <br />
                                Office 478, Berlin
                            </p>
                        </div>

                        <div className="lg:col-span-4">
                            <span className={metaLabel}>Contact</span>
                            <div className="flex flex-col gap-1.5">
                                {contacts.map((item) => (
                                    <Link key={item.href} href={item.href} className={metaLink}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <span className={metaLabel}>Follow</span>
                            <div className="flex flex-col gap-2.5">
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        aria-label={item.name}
                                        className="group inline-flex items-center gap-3 text-[15px] text-white/60 transition-colors hover:text-px-primary"
                                    >
                                        <item.Icon size={16} aria-hidden="true" />
                                        {item.name}
                                        <ArrowUp
                                            size={14}
                                            className="rotate-45 opacity-0 transition-opacity group-hover:opacity-100"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* bottom bar */}
                    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[14px] text-white/45">
                            © {getCurrentYear()}{" "}
                            <Link href="#" className="text-white/70 transition-colors hover:text-px-primary">
                                170web.
                            </Link>{" "}
                            All rights reserved.
                        </p>
                        <ScrollLink target="#hero" aria-label="Back to top">
                            <span className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-px-primary">
                                Back to top
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-px-primary">
                                    <ArrowUp size={15} aria-hidden="true" />
                                </span>
                            </span>
                        </ScrollLink>
                    </div>
                </div>

                {/* signature — oversized studio wordmark, bleeding off the base */}
                <div aria-hidden="true" className="pointer-events-none select-none px-6 md:px-12">
                    <span
                        className="block translate-y-[14%] font-thunder text-[clamp(5rem,23vw,20rem)] font-bold uppercase leading-[0.75] tracking-tight text-transparent"
                        style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)" }}
                    >
                        170web
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default DigitalStudioFooter;
