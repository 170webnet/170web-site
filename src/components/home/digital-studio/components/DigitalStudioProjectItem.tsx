import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const DigitalStudioProjectItem: React.FC<PortfolioProjectDT> = ({ id, title, categories, image, reverse, customClass }) => {

  return (
    <div className="bf-portfolio-3-item mb-80">
      <div className="grid grid-cols-12 gap-x-6 items-center">
        {!reverse ? (
          <>
            <div className="col-span-12 xl:col-span-5 xl:order-0 order-1">
              <div className="bf-portfolio-3-content">
                <h4 className="bf-portfolio-3-title">
                  <SmartLink href={`/portfolio-details-1/${id}`}>{title}</SmartLink>
                </h4>
                <span className="mb-50">
                  {categories.join(", ")}
                </span>
                <SmartLink
                  href={`/portfolio-details-1/${id}`}
                  className="tp-btn tp-btn-border tp-btn-xl inline-flex items-center"
                >
                  <span>
                    <span className="text-1">View project</span>
                    <span className="text-2">View project</span>
                  </span>
                </SmartLink>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-7 xl:order-1 order-0">
              <div className={`bf-portfolio-3-thumb ${customClass}`}>
                <Image className="img-fluid" width={985} height={663} src={image} alt={title} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-12 xl:col-span-7">
              <div className={`bf-portfolio-3-thumb ${customClass}`}>
                <Image className="img-fluid" width={985} height={663} src={image} alt={title} />
              </div>
            </div>

            <div className="col-span-12 xl:col-span-5">
              <div className="bf-portfolio-3-content pl-200">
                <h4 className="bf-portfolio-3-title">
                  <SmartLink href={`/portfolio-details-1/${id}`}>{title}</SmartLink>
                </h4>
                <span className="mb-50">
                  {categories.join(", ")}
                </span>
                <SmartLink
                  href={`/portfolio-details-1/${id}`}
                  className="tp-btn tp-btn-border tp-btn-xl inline-flex items-center"
                >
                  <span>
                    <span className="text-1">View project</span>
                    <span className="text-2">View project</span>
                  </span>
                </SmartLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DigitalStudioProjectItem;