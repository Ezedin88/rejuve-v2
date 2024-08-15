import Text from "@/app/components/Buttons/Text";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";

export default function BookingTimeDatePreference() {
    return (
        <>
            <Text className="form-wrapper-title mt-[46px] mb-[24px] max-xls:mt-[26px] max-xls:mb-[24px] max-xsm:mt-[64px] max-xsm:mb-[24px]">Booking Date and Time Preference</Text>
            <PrimaryFormWrapper className="gap-[64px] gap-y-[38px]">
                <InputLabelWrapper inputClassName="primary-input-box" wrapperClassName="max-xsm:col-start-3 max-xsm:col-end-1" name="bookingDate" placeholder="Mar 22,2023" required type="date" labelName="Date" labelClassName="primary-input-label" />
                <InputLabelWrapper inputClassName="primary-input-box" wrapperClassName="max-xsm:col-start-3 max-xsm:col-end-1" name="bookingTime" placeholder="10:30 AM" required type="time" labelName="Time" labelClassName="primary-input-label" />
            </PrimaryFormWrapper>
        </>
    )
}