"use client";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Formik } from "formik";
import { initialValues } from "@/app/config/initialValues";
import { handleValidation } from "@/app/config/validation";
import Form from "@/app/ui/booking-system/Form/Form";
import { MapApiProvider } from "./reducers/loadMapContext";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Spinner from "@/app/components/spinner/spinner";
import { IInitialValues } from "@/app/lib/definitions";
import { createOrder } from "@/app/lib/client";

export default function FormSection() {
    const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);

    useEffect(() => {
        const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
        if (stripeKey) {
            const promise = loadStripe(stripeKey);
            setStripePromise(promise);
        }
    }, []);

    if (!stripePromise) {
        return <div className="h-10 py-10 grid place-content-center bg-lightGreen">
            <Spinner content="Loading form data..." />
        </div>;
    }

    const handleSubmit = (values: IInitialValues) => {
        const { tip } = values ?? {};
        const allLineItems = values?.userData?.map((item) => {
            return item.line_items;
        });

        const priceSumOfAllLineItems = allLineItems?.map((item) => {
            return item.map((item) => {
                // @ts-ignore
                const parsedItem = JSON.parse(item);
                return parsedItem.price * parsedItem.quantity;
            });
        });

        // Flatten the nested array
        const flattenedArray = priceSumOfAllLineItems.flat();

        // Sum the values in the flattened array
        const totalSum = flattenedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const tipValue = (Number(tip) / 100) * totalSum;
        console.log(totalSum);

        const transformedData = values?.userData?.map((item, index) => {
            const { line_items } = item;
            return {
                payment_method: values.paymentMethod,
                set_paid: true,
                billing: {
                    first_name: item.billing.first_name,
                    last_name: item.billing.last_name,
                    address_1: values.bookingAddress.address_1,
                    address_2: values.bookingAddress.address_2,
                    city: values.bookingAddress.city,
                    state: values.bookingAddress.state,
                    postcode: values.bookingAddress.postcode,
                    country: values.bookingAddress.country,
                    email: item.billing.email,
                    phone: item.billing.phone,
                },
                shipping: {
                    first_name: item.billing.first_name,
                    last_name: item.billing.last_name,
                    address_1: values.bookingAddress.address_1,
                    address_2: values.bookingAddress.address_2,
                    city: values.bookingAddress.city,
                    state: values.bookingAddress.state,
                    postcode: values.bookingAddress.postcode,
                    country: values.bookingAddress.country,
                },
                line_items: index === 0 ? allLineItems?.map((item) => {
                    return item.map((item) => {
                        // @ts-ignore
                        const parsedItem = JSON.parse(item);
                        const variationsAreSame = parsedItem?.variation_id?.[0]?.variant_id === parsedItem?.variation_id?.[1]?.variant_id;

                        return {
                            product_id: parsedItem.product_id,
                            quantity: parsedItem.quantity,
                            ...(variationsAreSame ? {} : {
                                variation_id: values?.bookingChoice === 'atourclinics'
                                    ? parsedItem?.variation_id?.[0]?.variant_id
                                    : parsedItem?.variation_id?.[1]?.variant_id
                            })
                        };

                    });
                })?.flat() : line_items.map((item) => {
                    // @ts-ignore
                    const parsedItem = JSON.parse(item);
                    return {
                        product_id: parsedItem.product_id,
                        quantity: parsedItem.quantity,
                        variation_id: parsedItem?.variation_id?.variant_id ?? parsedItem.product_id
                    };
                }),
                fee_lines: index === 0 ? [
                    {
                        name: 'Tip',
                        tax_class: '',
                        tax_status: 'none',
                        total: tipValue.toString(),
                    }
                ] : [],
                meta_data: [
                    {
                        key: 'bookingChoice',
                        value: values.bookingChoice
                    }
                ]
                // shipping_lines:[
                //     {
                //         method_id: 'flat_rate',
                //         method_title: 'Flat Rate',
                //         total: '10.00'
                //     }
                // ]
            }
        });

        transformedData.forEach((data) => {
            createOrder(data);
        });
    }

    return (
        <div className="w-full max-w-[1257px] mx-auto">
            <Formik
                initialValues={initialValues}
                validationSchema={handleValidation}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ }) => (
                    <MapApiProvider>
                        <Elements stripe={stripePromise}>
                            <Form />
                        </Elements>
                    </MapApiProvider>
                )}
            </Formik>
        </div>
    );
}
