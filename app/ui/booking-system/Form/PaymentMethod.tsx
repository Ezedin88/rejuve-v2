import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { IInitialValues } from "@/app/lib/definitions";
import { Field, useFormikContext } from "formik";
import VisaPayment from "./VisaPayment";
export default function PaymentMethod() {
    const { values } = useFormikContext<IInitialValues>() || {};

    return (
        <>
            <Text className="form-wrapper-title">Choose your desired payment method:</Text>
            <PrimaryFormWrapper>
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <Field type="radio" className="primary-rounded-input h-[20px]" id="via" name="paymentMethod" value="Visa" />
                    </div>
                    <label htmlFor="via" className="text-nowrap text-ellipsis overflow-clip max-w-full">
                        <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">Credit or Debit Card</Text>
                    </label>
                </div>

                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <Field type="radio" className="primary-rounded-input h-[20px]" id="payAtLocation" name="paymentMethod" value="pay at location" />
                    </div>
                    <label htmlFor="payAtLocation" className="text-nowrap text-ellipsis overflow-clip max-w-full">
                        <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">Pay at Location</Text>
                    </label>
                </div>
                {
                    values?.paymentMethod === 'Visa' && <VisaPayment />
                }
            </PrimaryFormWrapper>
        </>
    );
}