import { whyRejuveCardContainerProps } from "@/app/lib/definitions";

export default function WhyRejuveCardContainer({
    className = 'primary-why-rejuve-card-container',
    children
}: whyRejuveCardContainerProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}