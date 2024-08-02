export default function BookBtn({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <div
            className="
                       text-center
                       lg:font-inter
                       lg:font-normal
                       lg:font-bold
                       lg:text-[16px]
                       lg:leading-[19px]
                       text-white
                       bg-primaryGreen
                       rounded-[5px]
                       p-4
                       w-[166px]
                       h-[59px]
                       cursor-pointer
                       hover:scale-105
                       hover:bg-primaryGreenHover
                       active:scale-100
                       transition
                       duration-200
                    "
        >
            {children}
        </div>
    );
}