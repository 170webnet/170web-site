
export const BackToTopArrow = () => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};
export const FooterBackToTopArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 13V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 7L7 1L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const TextArrowIcon = ({ strokeColor = "currentcolor" }) => {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1M9 1H1M9 1V9" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const FooterSocialArrowIcon = ({ strokeColor = "white" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1" stroke={strokeColor} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1H11V11" stroke={strokeColor} strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const BigArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
            <rect y="4" width="80" height="1" fill="#000" />
            <path d="M77 7.96366L80.5 4.48183L77 1" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const ScrollDownArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
            <rect x="6.25781" width="1.5" height="21" fill="currentColor" />
            <path d="M14.1641 13.6257C10.28 13.6257 7.13714 16.9239 7.13714 21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
            <path d="M7.13672 21C7.13672 16.9239 3.99384 13.6257 0.109797 13.6257" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
        </svg>
    );
};
export const ScrollDownArrowTwoIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 7L7 13L1 7" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const BreadcrumbArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M13 1L7 7L1 1" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const BlogBtnArrowIcon = () => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L11 1M11 1V11M11 1H1" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const HeroArrowIcon = () => {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}
export const HeroArrowIconTwo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1H13V13" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const ServiceArrowIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1H13V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const TestimonialArrowIcon = ({ direction = "next" }) => {
    const isNext = direction === "next";

    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={
                    isNext
                        ? "M1 7H13M13 7L7 1M13 7L7 13"
                        : "M13 7H1M1 7L7 1M1 7L7 13"
                }
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
//end
