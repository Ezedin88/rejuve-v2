export default function PrimaryFormWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`primary-form-wrapper ${className}`}>
            {children}
        </div>
    )
}