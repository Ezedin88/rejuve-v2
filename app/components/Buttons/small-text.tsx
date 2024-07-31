export default function SmallText({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:font-inter">
            <p className="font-inter font-medium text-sm leading-4
            text-secondaryDark
            ">
                {children}
            </p>
        </div>
    );
}