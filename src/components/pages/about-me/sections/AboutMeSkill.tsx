import AboutMeSkillItem from "../components/AboutMeSkillItem";

const SKILLS = [
    {
        id: 1,
        title: "Product Design",
        delay: ".3",
        items: ["UX/UI Design", "Prototyping", "Design System", "Developer Handoff"],
    },
    {
        id: 2,
        title: "Brand Design",
        delay: ".5",
        items: ["Logo Design", "Brand Guidelines", "Presentations", "Digital & Print assets"],
    },
    {
        id: 3,
        title: "Motion Design",
        delay: ".7",
        items: ["UI Animations", "Logo Animations", "Illustration Animations", "Explainer Videos"],
    },
    {
        id: 4,
        title: "Web Development",
        delay: ".9",
        items: ["Front-End Development", "WordPress Theme", "SEO"],
    },
];

const AboutMeSkill = () => {
    return (
        <div className="border-t border-[rgba(30,30,30,0.08)] pt-[60px] pb-[40px] dark:border-white/10">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6">
                    {/* Left Title */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="md:mb-[30px]">
                            <span className="inline-block pb-[30px] text-[16px] font-medium uppercase tracking-[-0.03em] text-px-black lg:pb-[20px] dark:text-white">
                                About
                            </span>
                            <h4 className="font-thunder-med text-[80px] font-medium leading-[0.8] tracking-[1px] text-px-black dark:text-white">
                                Skills
                            </h4>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className="grid grid-cols-12 gap-x-6">
                            {SKILLS.map((skill) => (
                                <AboutMeSkillItem
                                    key={skill.id}
                                    title={skill.title}
                                    items={skill.items}
                                    delay={skill.delay}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSkill;