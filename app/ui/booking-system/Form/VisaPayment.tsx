import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useMapApi } from "./reducers/loadMapContext";
import Text from "@/app/components/Buttons/Text";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import PlacesAutoCompleteComponent from "@/app/components/Form/PlacesAutoComplete";
import Spinner from "@/app/components/spinner/spinner";

export default function VisaPayment() {
    const stripe = useStripe();
    const elements = useElements();
    const cardElement = elements?.getElement(CardNumberElement);
    const { state } = useMapApi();
    const { loadedMapApi } = state;

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                iconColor: 'black',
                color: 'black',
                fontSize: '18px',
                fontFamily: 'Raleway, sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                    color: '#c6c6c6',
                    fontSize: '15px',
                    fontWeight: 'normal',
                },
            },
            invalid: {
                iconColor: '#fa004f',
                color: '#fa004f',
            },
        },
    };

    const addressData = {
        address: 'biller_address.address.line1',
        city: 'biller_address.address.city',
        state: 'biller_address.address.state',
        country: 'biller_address.address.country',
        zipCode: 'biller_address.address.postal_code',
    };

    return (
        <div className="col-start-1 col-end-3 grid grid-cols-2 gap-y-5">
            <div className="card_elements col-start-1 col-end-3">
                <div className="elements_wrapper grid grid-cols-2 max-sm:grid-cols-1 gap-x-[22px] gap-y-[22px] max-xsm:gap-x-0">
                    <CardNumberElement
                        options={{ ...CARD_ELEMENT_OPTIONS, placeholder: '1234 - 4567 - 8901 - 2345' }}
                        className="primary-input-box bg-white col-start-1 col-end-2 max-xsm:col-start-1 max-xsm:col-end-3"
                    />
                    <div className="grid grid-cols-2 max-xsm:w-full gap-[22px]">
                        <CardExpiryElement
                            options={{ ...CARD_ELEMENT_OPTIONS, placeholder: 'MM/YY' }}
                            className="primary-input-box max-xsm:col-start-1 max-xsm:col-end-2 bg-white"
                        />
                        <CardCvcElement
                            options={{ ...CARD_ELEMENT_OPTIONS, placeholder: 'CVC' }}
                            className="primary-input-box bg-white"
                        />
                    </div>
                </div>
            </div>
            <InputLabelWrapper
                wrapperClassName="col-start-1 col-end-3"
                labelName="Card Holder Name"
                placeholder="John Smith"
                inputClassName="primary-input-box"
                name="biller_details.card_holder_name"
                required
                type="input"
                labelClassName="primary-input-label"
            />
            <Text className="mt-10 col-start-1 col-end-3 text-primaryGreen text-[18px] font-bold">Billing Details</Text>
            {/* Address Location */}
            <>
                {loadedMapApi &&
                    <>
                        <PlacesAutoCompleteComponent
                            placeholder='Address Line'
                            addressData={addressData}
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
        </div>
    );
}