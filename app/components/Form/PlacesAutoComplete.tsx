import PlacesAutocomplete from "react-places-autocomplete";
import { getCode } from "country-list";
import InputLabelWrapper from "./InputLabelWrapper";
import useLocationAutoComplete from "@/app/hooks/LocationAutoComplete";
import { useEffect } from "react";
import { IInitialValues } from "@/app/lib/definitions";
import { useFormikContext } from "formik";

const getCountryCode = (countryName: string) => {
    return countryName === 'United States' ? 'USA' : getCode(countryName) || '';
};

export default function PlacesAutoCompleteComponent({ placeholder, addressData, fromVisaPayment }: {
    placeholder: string;
    addressData: {
        address: string;
        city: string;
        country: string;
        state: string;
        zipCode: string;
    };
    fromVisaPayment?: boolean;
}) {
    const { setFieldValue } = useFormikContext<IInitialValues>();
    const { address, selectedAddress, handleChangeAddress, handleSelectAddress, } = useLocationAutoComplete();
    const { address: selectedAddressData, city, country, state: selectedState, zipCode } = selectedAddress;

    useEffect(() => {
        if (selectedAddressData) {
            setFieldValue(addressData?.address, selectedAddressData);
        }
        if (city) {
            setFieldValue(addressData?.city, city);
        }
        if (country) {
            setFieldValue(addressData?.country, fromVisaPayment ? getCountryCode(country) : country);
        }
        if (selectedState) {
            setFieldValue(addressData?.state, selectedState);
        }
        if (zipCode) {
            setFieldValue(addressData?.zipCode, zipCode);
        }
    }, [selectedAddressData, city, country, selectedState, zipCode, setFieldValue, addressData?.address, addressData?.city, addressData?.country, addressData?.state, addressData?.zipCode, fromVisaPayment]);

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChangeAddress}
            onSelect={handleSelectAddress}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="label_loading_wrapper relative">
                    <InputLabelWrapper
                        inputProps={{
                            ...getInputProps({
                                placeholder,
                                className: "location-search-input primary-input-box"
                            })
                        }}
                        wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3" labelName="Street Address" placeholder="4579 Norman Street" inputClassName="primary-input-box" name="bookingAddress.address_1" required type="input" labelClassName="primary-input-label" />

                    <div className="autocomplete-dropdown-container absolute top-70 z-10" >
                        {loading && <div>Loading...</div>
                        }
                        {
                            suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                                return (
                                    // eslint-disable-next-line
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                        })}
                                    >
                                        <span>{suggestion.description} </span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}