import Text from "../Buttons/Text";

export default function ServiceHero({
    serviceMenuTitle = "Rejuve Medical Service Menu",
}: {
    serviceMenuTitle?: string
}) {
    return (
        <div className="section_title_wrapper max-w-[732px] mx-auto grid gap-y-[12px] mb-[75px]">
            <Text className="text-[32px] leading-[38.73px] font-semibold text-center">{serviceMenuTitle}</Text>
            <p className="text-[20px] leading-[24.2px] text-center">Returning costumer? <span className="text-primaryGreen">Click here</span> to log in. This will auto-fill most of your information for a faster booking.</p>
        </div>
    )
}