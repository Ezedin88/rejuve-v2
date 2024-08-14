import ServiceHero from "@/app/components/ServiceMenu/ServiceHero";
import CheckMenuFormContent from "../ui/booking-system/checkmenu-page";

export default function Page() {
    return (
        <div className="mt-40">
            <ServiceHero />
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