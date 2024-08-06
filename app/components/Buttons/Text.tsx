export default function Text({
    children,
    textName = '',
    className = '',
    dangerouslySetInnerHTML,
}: {
    children?: React.ReactNode,
    textName?: string,
    className?: string,
    dangerouslySetInnerHTML?: { __html: string | TrustedHTML }
}) {
    return (
        <p className={`${textName ? textName : ''}
                ${className ? className : ''}
            `} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
            {children}
        </p>
    );
}