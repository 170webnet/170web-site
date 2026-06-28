
interface AboutServiceItemProps {
    item: {
        id: string;
        title: string;
        desc: string;
    };
}

const AboutServiceItem = ({ item }: AboutServiceItemProps) => {
    return (
        <div className="aus-service-item">
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="aus-service-content flex items-center">
                        <span>{item.id}</span>
                        <h4>{item.title}</h4>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="aus-service-content">
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutServiceItem;