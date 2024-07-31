export default function Text({ children, textName }: {
    children: React.ReactNode,
    textName: string
}) {
    return (
        <div className="lg:font-inter">
            <p className={`${textName ? textName : ''}`}>
                {children}
            </p>
        </div>
    );
}