import { SmartLink } from '@/components/common';
import { ServiceDT } from '@/types';
import Image from 'next/image';

// Réplica do `.px-3d-anim` do template: dois elementos empilhados que fazem um
// flip 3D no hover do item (`.group`). O primeiro some girando para cima, o
// último entra girando de baixo.
const anim3dBase =
    "inline-block self-center transform-3d backface-hidden origin-[center_center_-0.2em] transition-[transform,opacity] duration-1000 ease-[cubic-bezier(.33,1,.68,1)]";
const anim3dFirst = `${anim3dBase} group-hover:opacity-0 group-hover:transform-[translate3d(0,-25.5961px,-26.0468px)_rotateX(91deg)]`;
const anim3dLast = `${anim3dBase} absolute left-0 bottom-0 opacity-0 transform-[translate3d(0,25.5961px,-26.0467px)_rotateX(-91deg)] group-hover:opacity-100 group-hover:transform-[translate(0)]`;

const ServiceItem: React.FC<ServiceDT> = ({ id, href, title, images }) => {
    return (
        <div
            key={id}
            className="group flex justify-between items-center py-[15px] border-b border-white/[0.08]"
        >
            <div className="flex items-center">
                <span className="mr-[70px] inline-block text-[18px] font-medium leading-[1.7] uppercase text-[rgba(135,135,135,0.5)] transition-all duration-300 group-hover:text-white xs:mr-[30px]">
                    [0{id}]
                </span>

                <SmartLink href={href}>
                    <h4 className="relative mb-0 overflow-hidden text-[42px] font-bold uppercase leading-none tracking-[-0.07em] text-[#616161] transition-colors duration-1000 ease-[cubic-bezier(.33,1,.68,1)] group-hover:text-white xs:text-[30px]">
                        <span className={anim3dFirst}>{title}</span>
                        <span className={anim3dLast}>{title}</span>
                    </h4>
                </SmartLink>
            </div>

            <div className="relative hidden md:block">
                {images.map((img, index) => (
                    <span
                        key={`${img}-${index}`}
                        className={index === 0 ? anim3dFirst : anim3dLast}
                    >
                        <Image
                            src={img}
                            alt={title}
                            width={120}
                            height={70}
                            className="rounded-[6px]"
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ServiceItem;
