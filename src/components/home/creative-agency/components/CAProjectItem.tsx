import { PortfolioProjectDT } from '@/types/portfolio-dt';
import Image from 'next/image';
import Link from 'next/link';

const CAProjectItem: React.FC<PortfolioProjectDT> = ({ id, image, title }) => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div className="mb-[80px]">
                <Link href={`/portfolio-details-1/${id}`}>
                    {/* ripple-image: JS-driven hover effect hook — keep class */}
                    <div className="ripple-image rounded-xl overflow-hidden mb-[25px]">
                        <Image width={436} height={340}
                            className="max-w-full h-auto w-full"
                            src={image}
                            alt={title}
                        />
                    </div>
                </Link>
                <div className="flex items-center justify-center">
                    <h4 className="mb-0 text-[18px] font-semibold leading-none tracking-[-0.03em] text-px-black dark:text-white">
                        {/* px-line-lr: animated underline :after pseudo-element hook — keep class */}
                        <Link className="px-line-lr" href={`/portfolio-details-1/${id}`}>
                            {title}
                        </Link>
                    </h4>
                    <span className="text-[18px] font-normal text-px-body dark:text-white/60 before:content-[''] before:inline-block before:w-[7px] before:h-[2px] before:mx-[10px] before:-translate-y-[4px] before:bg-px-body">
                        Branding
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CAProjectItem;
