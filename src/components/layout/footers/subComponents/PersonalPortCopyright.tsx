import { ScrollLink } from '@/components/common';
import { FooterBackToTopArrow } from '@/svg/ArrowIcons';
import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const PersonalPortCopyright = () => {
    return (
        <div className="px-copyright-3-wrap">
            <div className="container-px">
                <div className="grid grid-cols-12 gap-x-6 items-center">
                    <div className="col-span-12 xl:col-span-4">
                        <div className="px-copyright-3-text text-center lg:text-left">
                            <p>© {getCurrentYear()} <Link href="#">Themepure.</Link> All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xl:col-span-5">
                        <div className="px-copyright-3-menu text-center lg:text-left">
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Projects</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                        <div className="px-copyright-3-backtop smooth text-center lg:text-right">
                            <ScrollLink target='#top'>
                                back to top{" "}
                                <span>
                                    <FooterBackToTopArrow />
                                </span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortCopyright;