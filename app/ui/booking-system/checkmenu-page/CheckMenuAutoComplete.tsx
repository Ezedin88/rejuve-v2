import { useEffect } from "react";
import { getCode } from "country-list";
import PlacesAutocomplete from "react-places-autocomplete";
import useLocationAutoComplete from "@/app/hooks/LocationAutoComplete";

const getCountryCode = (countryName: string) => {
    return countryName === 'United States' ? 'USA' : getCode(countryName) || '';
};

export default function CheckMenuPlacesAutoCompleteComponent({
    setBookingAddress
}: {
    setBookingAddress: (address: {
        address: string,
        city: string,
        country: string,
        state: string,
        zipCode: string
    }) => void;
}) {
    const { address, selectedAddress, handleChangeAddress, handleSelectAddress, } = useLocationAutoComplete();
    const { address: selectedAddressData, city, country, state: selectedState, zipCode } = selectedAddress;

    useEffect(() => {
        setBookingAddress({
            address: selectedAddressData,
            city,
            country,
            state: selectedState,
            zipCode
        });
    }, [selectedAddressData, city, country, selectedState, zipCode, setBookingAddress]);

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChangeAddress}
            onSelect={handleSelectAddress}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="label_loading_wrapper relative">
                    <input {...getInputProps({ placeholder: "Enter your address" })} className="primary-input-box" />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style
                                    })}
                                    key={suggestion.placeId}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}