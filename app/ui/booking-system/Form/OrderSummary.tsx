import { useFormikContext } from "formik";
import { IInitialValues } from "@/app/lib/definitions";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import Text from "@/app/components/Buttons/Text";
import { parse } from "path";

export default function OrderSummary() {
    const { values } = useFormikContext<IInitialValues>() ?? {};
    const { userData, bookingChoice, tip } = values ?? {};
    const sumOfAllClinicPrices = userData?.reduce((acc, user) => {
        const { line_items } = user ?? {};
        return line_items?.reduce((acc, item) => {
            // @ts-ignore
            const parsedItem = JSON.parse(item);
            const { variation_id } = parsedItem ?? {};
            const clinicPrice = variation_id?.[0]?.product_clinic_price ?? 0;
            return acc + Number(clinicPrice);
        }, acc);
    }, 0);

    const sumOfAllHousePrices = userData?.reduce((acc, user) => {
        const { line_items } = user ?? {};
        return line_items?.reduce((acc, item) => {
            // @ts-ignore
            const parsedItem = JSON.parse(item);
            const { variation_id } = parsedItem ?? {};
            const housePrice = variation_id?.[1]?.product_home_price ?? 0;
            return acc + Number(housePrice);
        }, acc);
    }, 0);


    const clinicTipAmount = sumOfAllClinicPrices * (Number(tip) / 100);
    const houseTipAmount = sumOfAllHousePrices * (Number(tip) / 100);

    const isClinic = bookingChoice === 'atourclinics';
    return (
        <>
            <Text className="form-wrapper-title">Order Summary</Text>
            <PrimaryFormWrapper className="pt-[23px] bg-extraLightYellow grid-cols-1">
                <div className="summary_box_with_name max-w-[1137px] mx-auto max-xls:max-w[1053px] max-xsm:max-w[301px] w-full grid gap-y-[33px]">
                    <>

                        <div className="grid gap-y-5">
                            {
                                userData?.map((user, userIndex) => {
                                    const { billing, line_items } = user ?? {};
                                    const { first_name } = billing ?? {};
                                    return (
                                        <div key={userIndex}>
                                            <Text className="form-wrapper-ttle text-[16px] leading-[22px] font-semibold pb-[16px]">
                                                {userIndex === 0 ? first_name?.length ? first_name : 'person name not provided' : `Person ${userIndex + 1}`}
                                            </Text>
                                            <div
                                                className="items_price_container bg-lightYellow py-[37px] px-[41px] grid gap-y-[40px]">
                                                {line_items && line_items?.length ? line_items?.map((item, itemIndex) => {
                                                    // @ts-ignore
                                                    const parsedItem = JSON.parse(item);
                                                    console.log('the parsed==>', parsedItem)
                                                    const { variation_id } = parsedItem ?? {};
                                                    const clinicPrice = variation_id?.[0]?.product_clinic_price ?? 0;
                                                    const housePrice = variation_id?.[1]?.product_home_price ?? 0;
                                                    return (
                                                        <div key={itemIndex} className="grid grid-cols-2">
                                                            <div className="item_name_column">
                                                                <Text className="text-[14px] leading-[22px]">{parsedItem?.productName}</Text>
                                                            </div>
                                                            <div className="price_column leading-[22px] text-right">
                                                                <Text className="font-semibold">${isClinic ? clinicPrice ?? parsedItem?.price : housePrice ?? parsedItem?.price}</Text>
                                                            </div>
                                                        </div>
                                                    )
                                                }) :
                                                    <div className="grid grid-cols-2">
                                                        <div className="item_name_column">
                                                            <Text className="text-[14px] leading-[22px]">no products selected</Text>
                                                        </div>
                                                        <div className="price_column leading-[22px] text-right">
                                                            <Text className="font-semibold">-</Text>
                                                        </div>
                                                    </div>}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </>
                    {/* the following will not be looped */}
                    <div className="sub_total_calculation_container max-w-[295px] p-0 m-0 max-xsm:mx-auto ml-auto grid gap-y-[32px] w-full">
                        <div className="name_price_container flex items-center justify-between">
                            <Text className="text-[14px] leading-[22px] text-left">Subtotal</Text>
                            <Text className="font-semibold text-right">${isClinic ? sumOfAllClinicPrices?.toFixed(2) ?? '-' : sumOfAllHousePrices?.toFixed(2) ?? '-'}</Text>
                        </div>
                        <div className="name_price_container flex items-center justify-between">
                            <Text className="text-[14px] leading-[22px] text-left">Tip({tip ?? '-'}%)</Text>
                            <Text className="font-semibold text-right">${isClinic ? clinicTipAmount ?? '0' : houseTipAmount ?? '-'}</Text>
                        </div>
                        <div className="name_price_container flex items-center justify-between border-t-2 border-borderGray pt-2">
                            <Text className="leading-[22px] text-[18px] font-semibold text-left">Total</Text>
                            <Text className="leading-[22px] text-[18px] font-bold text-right">${isClinic ? (sumOfAllClinicPrices + clinicTipAmount)?.toFixed(2) ?? '-' : (sumOfAllHousePrices + houseTipAmount)?.toFixed(2) ?? '-'}</Text>
                        </div>
                    </div>
                </div>
            </PrimaryFormWrapper>
        </>
    )
}