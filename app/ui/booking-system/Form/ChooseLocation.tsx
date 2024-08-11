import { Field, useFormikContext } from "formik";

import Text from "@/app/components/Buttons/Text";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { SmallIcon } from "@/app/components/Icons/Icon";
import { IInitialValues } from "@/app/lib/definitions";
import Spinner from "@/app/components/spinner/spinner";
import PlacesAutoCompleteComponent from '@/app/components/Form/PlacesAutoComplete';
import { useMapApi } from "./reducers/loadMapContext";
import { useProductData } from "./reducers/productDetailContext";
import { useEffect, useState } from "react";

export default function ChooseLocation() {
    const { dispatch, productData } = useProductData();
    const { values, setFieldValue } = useFormikContext<IInitialValues>();
    const { state } = useMapApi();
    const [isInitiallyRendered, setIsInitiallyRendered] = useState(false);
    const { loadedMapApi } = state;
    const { bookingChoice } = values;
    const isAtClinic = bookingChoice === "atourclinics";
    // set field values
    const { currently_selected_product } = productData || {};
    const { type } = currently_selected_product || {};

    // First effect: Update Formik values based on `type`
    useEffect(() => {
        if (type !== undefined) {
            setFieldValue('bookingChoice', type ?? 'atourclinics');
            setFieldValue('clinicChoice', type === 'atourclinics'
                ? 'Rejuve Clinics Sherman Oaks, 15301 Ventura Blvd Unit U2 Sherman Oaks, CA 91403'
                : ''
            );
        }

        if (currently_selected_product?.productName && !isInitiallyRendered) {
            setFieldValue('userData[0].line_items', [JSON.stringify({
                product_id: currently_selected_product?.product_id,
                productName: currently_selected_product?.productName,
                price: String(currently_selected_product?.productPrice),
                quantity: 1,
                categoryName: currently_selected_product?.categoryName || '',
                variation_id: [{
                    type: 'atourclinics',
                    variant_id: currently_selected_product?.clinic_price_id,
                    product_clinic_price: currently_selected_product?.product_clinic_price
                }, {
                    type: 'housecall',
                    variant_id: currently_selected_product?.home_price_id,
                    product_home_price: currently_selected_product?.product_home_price
                }],
            })]);
            setIsInitiallyRendered(true);
        }

    }, [type]);

    useEffect(() => {
        if (bookingChoice) {
            dispatch({
                type: 'SET_CURRENTLY_SELECTED_PRODUCT',
                payload: {
                    ...currently_selected_product,
                    type: bookingChoice ?? 'atourclinics'
                }
            })
        }
    }, [bookingChoice])


    return (
        <div>
            <Text className="form-wrapper-title">Choose Location</Text>
            <PrimaryFormWrapper>
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <Field type="radio" className="primary-rounded-input h-[20px]" id="atourclinics" name="bookingChoice" value="atourclinics" />
                    </div>
                    <label htmlFor="atourclinics" className="text-nowrap text-ellipsis overflow-clip max-w-full"><Text className="primary-input-label cursor-pointer text-lightSecondaryDark">Rejuve Clinics
                        &nbsp; <span className="text-brightYellow">At our locations</span></Text></label>
                </div>
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <Field type="radio" className="primary-rounded-input h-[20px]" id="housecall" name="bookingChoice" value="housecall" />
                    </div>
                    <label htmlFor="housecall" className="text-nowrap text-ellipsis overflow-clip max-w-full"><Text className="primary-input-label cursor-pointer text-lightSecondaryDark">House call
                        &nbsp; <span className="text-brightYellow">We come to you</span></Text></label>
                </div>
                {isAtClinic &&
                    <div className="w-full col-start-1 col-end-3">
                        <Field as="div" className="primary-input-box appearance-none bg-white text-primaryDark text-[15px] cursor-not-allowed pr-2 border border-gray-300 rounded overflow-clip text-nowrap w-full max-w-full flex gap-5" id="rejuvelaclinic" name="rejuvelaclinic">
                            <div className=" flex items-center justify-center w-[20px] h-[20px] max-h-full">
                                <SmallIcon icon="/location.svg" height={10} width={25} className="p-0" />
                            </div>
                            <p>Rejuve Clinics Sherman Oaks, <span className="text-lightSecondaryDark text-[13px]">15301 Ventura Blvd Unit U2 Sherman Oaks, CA 91403</span></p>
                        </Field>
                    </div>
                }
                {/* location */}
                {/* Street Address 4579 Norman Street*/}
                {!isAtClinic &&
                    <>
                        {loadedMapApi &&
                            <>
                                <PlacesAutoCompleteComponent
                                    placeholder='Address Line'
                                    addressData={
                                        {
                                            address: "bookingAddress.address_1",
                                            city: "bookingAddress.city",
                                            country: "bookingAddress.country",
                                            state: "bookingAddress.state",
                                            zipCode: "bookingAddress.postcode"
                                        }
                                    }
                                />
                                {/* Address Line 2 */}
                                <InputLabelWrapper wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3" labelName="Address Line 2" placeholder="4579 Norman Street" inputClassName="primary-input-box" name="bookingAddress.address_2" required type="input" labelClassName="primary-input-label" />
                                {/* state California and city Los Angeles*/}
                                <InputLabelWrapper wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3" labelName="state" placeholder="california" inputClassName="primary-input-box" name="bookingAddress.state" required type="input" labelClassName="primary-input-label" />
                                <InputLabelWrapper wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3" labelName="city" placeholder="Los Angeles" inputClassName="primary-input-box" name="bookingAddress.city" required type="input" labelClassName="primary-input-label" />
                                {/* ZIP Code 90029*/}
                                {/* country */}
                                <InputLabelWrapper labelName="country" inputClassName="primary-input-box" name="bookingAddress.country" placeholder="USA" required type="input" labelClassName="primary-input-label" />
                                {/* ZIP Code required */}
                                <InputLabelWrapper wrapperClassName="col-start-1 max-xsm:col-start-2" labelName="ZIP Code" inputClassName="primary-input-box max-w-[198px]" name="bookingAddress.postcode" placeholder="90029" required type="input" labelClassName="primary-input-label" />
                            </>
                            || <Spinner />
                        }
                    </>
                }</PrimaryFormWrapper>
        </div>
    )
}