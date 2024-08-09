import Image from "next/image";

export const SmallIcon = ({ icon, onClick, width = 64, height = 64, className = '' }: {
    icon: string,
    width?: number,
    height?: number,
    className?: string,
    onClick?: (e: any) => void
}) => {
    return (
        <Image
            onClick={onClick}
            src={icon} alt="icon" width={width} height={height} className={className} />
    );
};