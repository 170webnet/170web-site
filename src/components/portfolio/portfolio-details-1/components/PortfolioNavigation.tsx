import { PortfolioNextArrowIcon, PortfolioPrevArrowIcon } from "@/svg/ArrowIcons";
import Link from "next/link";

const PortfolioNavigation = () => {
  return (
    <div className="px-pd-2-np-ptb px-pd-style pb-120">
      <div className="mx-auto w-full max-w-[1230px] px-3">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-12">
            <div className="px-pd-2-np-content flex justify-center items-center flex-wrap">

              <div
                className="tp_fade_anim"
                data-delay=".3"
                data-fade-from="top"
                data-ease="bounce"
              >
                <Link href="#">
                  <span>
                    <PortfolioPrevArrowIcon />
                  </span>
                  Prev Work
                </Link>
              </div>

              <div
                className="tp_fade_anim"
                data-delay=".5"
                data-fade-from="top"
                data-ease="bounce"
              >
                <Link href="#">
                  Next Work
                  <span>
                    <PortfolioNextArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioNavigation;