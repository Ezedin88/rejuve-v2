export default function Text({
    children,
    textName = '',
    className = ''
}: {
    children: React.ReactNode,
    textName?: string,
    className?: string
}) {
    return (
        <p className={`${textName ? textName : ''}
                ${className ? className : ''}
            `}>
            {children}
        </p>
    );
}