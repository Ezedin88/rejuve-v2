import { useState } from "react";
import { geocodeByAddress } from "react-places-autocomplete";

export default function useLocationAutoComplete() {
    const [address, setAddress] = useState('');
    const [selectedAddress, setSelectedAddress] = useState({
        address: '',
        city: '',
        country: '',
        state: '',
        zipCode: ''
    });

    const handleChangeAddress = (newAddress: string) => {
        setAddress(newAddress);
    };

    const handleSelectAddress = (newAddress: string) => {
        setAddress(newAddress);
        geocodeByAddress(newAddress)
            .then((results) => {
                const addressComponents = results[0].address_components;
                const formattedAddress = results[0].formatted_address;
                const addressObj = {
                    address: formattedAddress,
                    city: '',
                    country: '',
                    state: '',
                    zipCode: ''
                };

                addressComponents.forEach(component => {
                    const types = component.types;
                    if (types.includes("locality")) {
                        addressObj.city = component.long_name;
                    } else if (types.includes("country")) {
                        addressObj.country = component.long_name;
                    } else if (types.includes("administrative_area_level_1")) {
                        addressObj.state = component.long_name;
                    } else if (types.includes("postal_code")) {
                        addressObj.zipCode = component.long_name;
                    }
                });

                setSelectedAddress(addressObj);
            })
            .catch((error) => console.error("Error", error));
    };

    return {
        address,
        selectedAddress,
        handleChangeAddress,
        handleSelectAddress,
    };
}
