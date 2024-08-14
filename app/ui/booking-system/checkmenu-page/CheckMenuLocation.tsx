import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { SmallIcon } from "@/app/components/Icons/Icon";
import { useMapApi } from "../Form/reducers/loadMapContext";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import Spinner from "@/app/components/spinner/spinner";
import CheckMenuPlacesAutoCompleteComponent from "./CheckMenuAutoComplete";

export default function CheckMenuLocation({
    bookingChoice,
    setBookingChoice,
    setBookingAddress,
    bookingAddress
}: {
    bookingChoice: string,
    bookingAddress: {
        address: string,
        city: string,
        country: string,
        state: string,
        zipCode: string
    },
    setBookingChoice: (bookingChoice: 'atourclinics' | 'housecall') => void,
    setBookingAddress: (address: {
        address: string,
        city: string,
        country: string,
        state: string,
        zipCode: string
    }) => void
}) {
    const isAtClinic = bookingChoice === 'atourclinics';
    const { dispatch, state } = useMapApi();
    const handleLoadMapApi = () => {
        dispatch({ type: 'LOAD_MAP_API' });
    }

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
            version: 'weekly',
            libraries: ['places'],
        });
        loader.load().then(() => {
            handleLoadMapApi();
        });
    }, []);

    const { loadedMapApi } = state;

    const handleBookingChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookingChoice(e.target.value as 'atourclinics' | 'housecall');
    }

    return (
        <div>
            <PrimaryFormWrapper className="grid-cols-2">
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <input type="radio" className="primary-rounded-input h-[20px]" id="atourclinics" name="bookingCheckMenuChoice" value="atourclinics" onChange={handleBookingChoice} />
                    </div>
                    <label htmlFor="atourclinics" className="text-nowrap text-ellipsis overflow-clip max-w-full">
                        <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">Rejuve Clinics
                            &nbsp; <span className="text-brightYellow">At our locations</span></Text></label>
                </div>
                <div className="primary-input-box bg-white flex hover:border-primaryGreen overflow-clip pr-10 max-xsm:col-start-1 max-xsm:-col-end-1 max-xsm:w-full max-xsm:max-w-full">
                    <div className=" flex items-center h-full">
                        <input
                            onChange={handleBookingChoice}
                            name="bookingCheckMenuChoice"
                            type="radio" className="primary-rounded-input h-[20px]" id="housecall" value="housecall" />
                    </div>
                    <label htmlFor="housecall" className="text-nowrap text-ellipsis overflow-clip max-w-full">
                        <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">House call
                            &nbsp; <span className="text-brightYellow">We come to you</span></Text></label>
                </div>
                {isAtClinic &&
                    <div className="w-full col-start-1 col-end-3">
                        <div className="primary-input-box appearance-none bg-white text-primaryDark text-[15px] cursor-not-allowed pr-2 border border-gray-300 rounded overflow-clip text-nowrap w-full max-w-full flex gap-5" id="rejuvelaclinic">
                            <div className=" flex items-center justify-center w-[20px] h-[20px] max-h-full">
                                <SmallIcon icon="/location.svg" height={10} width={25} className="p-0" />
                            </div>
                            <p>Rejuve Clinics Sherman Oaks, <span className="text-lightSecondaryDark text-[13px]">15301 Ventura Blvd Unit U2 Sherman Oaks, CA 91403</span></p>
                        </div>
                    </div>
                }
                {/* location */}
                {/* Street Address 4579 Norman Street*/}
                {!isAtClinic &&
                    <>
                        {loadedMapApi &&
                            <>
                                <div className="flex flex-col">
                                    <label className="primary-input-label mb-1" htmlFor="address">Address Line 1</label>
                                    <CheckMenuPlacesAutoCompleteComponent setBookingAddress={setBookingAddress} />
                                </div>

                                <div className="flex flex-col">
                                    <label className="primary-input-label mb-1" htmlFor="address">Address Line 2</label>
                                    <input
                                        className="primary-input-box"
                                        placeholder="4579 Norman Street"
                                        name="bookingAddress"
                                    />
                                </div>

                                {/* state */}
                                <div className="flex flex-col">
                                    <label className="primary-input-label mb-1" htmlFor="state">State</label>
                                    <input
                                        className="primary-input-box"
                                        placeholder="California"
                                        name="bookingAddress"
                                        value={bookingAddress.state}
                                    />
                                </div>

                                {/* city */}
                                <div className="flex flex-col">
                                    <label className="primary-input-label mb-1" htmlFor="city">City</label>
                                    <input
                                        className="primary-input-box"
                                        placeholder="Los Angeles"
                                        name="bookingAddress"
                                        value={bookingAddress.city}
                                    />
                                </div>
                                {/* country */}
                                <div className="flex flex-col">
                                    <label className="primary-input-label mb-1" htmlFor="country">Country</label>
                                    <input
                                        className="primary-input-box"
                                        placeholder="USA"
                                        name="bookingAddress"
                                        value={bookingAddress.country}
                                    />
                                </div>
                                {/* zip */}
                                <div className="flex flex-col col-start-1">
                                    <label className="primary-input-label mb-1" htmlFor="zip">ZIP Code</label>
                                    <input
                                        className="primary-input-box max-w-[198px]"
                                        placeholder="90029"
                                        name="bookingAddress"
                                        value={bookingAddress.zipCode}
                                    />
                                </div>
                            </>
                            || <Spinner />
                        }
                    </>
                }
            </PrimaryFormWrapper>
        </div>
    )
}