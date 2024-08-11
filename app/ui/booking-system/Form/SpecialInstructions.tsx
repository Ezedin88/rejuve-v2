import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";

export default function SpecialInstructions() {
    return (
        <PrimaryFormWrapper>
            <Text className="col-start-1 col-end-3 text-primaryGreen text-[18px] font-semibold text-left w-full">Special instructions:</Text>
            <textarea className="w-full h-[223px] max-xls: p-3 border border-borderGray focus:border-primaryGreen outline-none rounded-md col-start-1 col-end-3" />
        </PrimaryFormWrapper>
    )
}