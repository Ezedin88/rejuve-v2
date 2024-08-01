import Image from "next/image";

export const SmallIcon = ({ icon, width = 64, height = 64, className = '' }: {
    icon: string,
    width?: number,
    height?: number,
    className?: string
}) => {
    return (
        <Image src={icon} alt="icon" width={width} height={height} className={className} />
    );
};