import Text from "../components/Buttons/Text";
import CheckMenuFormContent from "../ui/booking-system/checkmenu-page";

export default function Page() {
    return (
        <div className="mt-40">
            <div className="section_title_wrapper max-w-[732px] mx-auto grid gap-y-[12px] mb-[75px]">
                <Text className="text-[32px] leading-[38.73px] font-semibold text-center">Rejuve Medical Service Menu</Text>
                <p className="text-[20px] leading-[24.2px] text-center">Returning costumer? <span className="text-primaryGreen">Click here</span> to log in. This will auto-fill most of your information for a faster booking.</p>
            </div>
            <CheckMenuFormContent />
            <div className="service_menu_container max-w-[1527px] mx-auto">
                <div className="service_menu_wrapper max-w-[1013px] mx-auto rounded-[12px]">
                    <div className="service_menu_title"></div>
                    <div className="service_menu_content"></div>
                </div>
            </div>
        </div>
    )
}