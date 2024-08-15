import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { Field } from "formik";

export default function ChooseProvider() {
    return (
        <>
            <Text className="form-wrapper-title mb-[28px]">Choose Provider</Text>
            <PrimaryFormWrapper>
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <Field type="radio" className="primary-rounded-input h-[20px]" id="provider" name="provider" value="Any" />
                    </div>
                    <label htmlFor="provider" className="text-nowrap text-ellipsis overflow-clip max-w-full"><Text className="primary-input-label cursor-pointer text-lightSecondaryDark">Any
                    </Text></label>
                </div>

            </PrimaryFormWrapper>
        </>
    )
}