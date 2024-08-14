"use client";
import { useState, useEffect } from "react";
import AccordionHeader from "@/app/components/Buttons/AccordionHeader";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { ILineItem } from "@/app/lib/definitions";
import BookBtn from "@/app/components/Buttons/book-btn";
import Text from "@/app/components/Buttons/Text";
import { MapApiProvider } from "../Form/reducers/loadMapContext";
import CheckMenuAccordion from "./CheckMenuAccordion";
import CheckMenuLocation from "./CheckMenuLocation";

export default function CheckMenuContent({ filteredProducts }: { filteredProducts: any }) {
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
    const [lineItems, setLineItems] = useState<ILineItem[]>([]);
    const [bookingAddress, setBookingAddress] = useState<{
        address: string;
        city: string;
        country: string;
        state: string;
        zipCode: string;
    }>({
        address: '',
        city: '',
        country: '',
        state: '',
        zipCode: ''
    });
    const [bookingChoice, setBookingChoice] = useState<'atourclinics' | 'housecall'>('atourclinics');
    // Effect to initialize isOpen state based on filteredProducts
    console.log('booking choice', bookingChoice);
    const isClinic = bookingChoice === 'atourclinics';
    useEffect(() => {
        // Create a new object where all values are true
        const initialOpenState = Object.keys(filteredProducts).reduce((acc, category) => {
            acc[category] = true;
            return acc;
        }, {} as { [key: string]: boolean });

        setIsOpen(initialOpenState);
    }, [filteredProducts]);

    const toggle = (category: string) => {
        setIsOpen(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const primaryWrapperBgColors = ['lightyellow', 'lightGreen', 'lightGreen', 'lightGreen'];

    const priceClinicSum = lineItems?.length > 0 ? lineItems?.reduce((acc, item) => {
        if (item?.categoryName === 'Clinic') {
            // @ts-ignore
            return acc + item.variation_id?.[0]?.product_clinic_price;
        }
        return acc;
    }, 0) : [];

    const priceHouseCallSum = lineItems?.length > 0 ? lineItems?.reduce((acc, item) => {
        if (item?.categoryName === 'House Call') {
            // @ts-ignore
            return acc + item.variation_id?.[1]?.product_home_price;
        }
        return acc;
    }) : [];


    return (
        <div className="div_content_wrapper max-w-[1169px] w-full mx-auto">
            <MapApiProvider>
                <CheckMenuLocation setBookingAddress={setBookingAddress} bookingAddress={bookingAddress} bookingChoice={bookingChoice} setBookingChoice={setBookingChoice} />
            </MapApiProvider>
            <div className="grid gap-y-5 my-10">
                {
                    Object.entries(filteredProducts)?.map(([category, products]: any, index: number) => (
                        <div key={category}>
                            <Text className="text-center text-[32px] font-semibold leading-[38.73px] mb-[24px] text-primaryGreen">All {category}</Text>
                            <PrimaryFormWrapper className={`grid-cols-1 bg-[${primaryWrapperBgColors[index % primaryWrapperBgColors.length]}]`}>
                                <div className="max-w-[1013px] w-full mx-auto flex flex-col gap-10">
                                    <AccordionHeader
                                        index={0}
                                        title={category}
                                        isOpen={!!isOpen[category]}
                                        setIsOpen={() => toggle(category)}
                                        line_items={lineItems}
                                        set_line_items={setLineItems}
                                        setFieldValue={() => { }}
                                        arrowBgColor={primaryWrapperBgColors[index % primaryWrapperBgColors.length]}
                                    />
                                    {
                                        isOpen[category] &&
                                        <CheckMenuAccordion
                                            products={products}
                                            category={category}
                                            lineItems={lineItems}
                                            bookingChoice={bookingChoice}
                                            setLineItems={setLineItems}
                                        />
                                    }
                                </div>
                            </PrimaryFormWrapper>
                        </div>
                    ))
                }
            </div>
            {/* order summary */}
            <div className="order_summary px-[60px] bg-extraLightYellow pt-[23px] pb-[44px]">
                <Text className="text-[18px] font-bold leading-[21.78px] mb-[16px]">Order Summary</Text>
                {
                    lineItems.length > 0 ?
                        lineItems?.map((item, index) => (
                            <div className="selected_items px-[41px] flex justify-between bg-lightYellow py-[37px]" key={index}>
                                <Text className="text-[14px]">{item?.productName}</Text>
                                {/* @ts-ignore */}
                                <Text className="text-[14px] font-semibold">${isClinic ? item?.variation_id?.[0]?.product_clinic_price ?? item?.price : item?.variation_id?.[1]?.product_home_price ?? item?.price}</Text>
                            </div>
                        )) : <div className="selected_items px-[41px] flex justify-between bg-lightYellow py-[37px]">
                            <Text className="text-[14px]">No Items Selected</Text>
                            <Text className="text-[14px] font-semibold">$&nbsp;-</Text>
                        </div>
                }
            </div>

            <BookBtn type='submit' className="w-fit mt-[72px] mb-[238px]">
                <Text className='text-center'>
                    Book Appointment
                </Text>
            </BookBtn>
        </div>
    );
}
