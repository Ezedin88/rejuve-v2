"use client";
import { useEffect, useState } from "react";
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Formik } from "formik";

import { initialValues } from "@/app/config/initialValues";
import { handleValidation } from "@/app/config/validation";
import Form from "@/app/ui/booking-system/Form/Form";
import { MapApiProvider } from "./reducers/loadMapContext";
import Spinner from "@/app/components/spinner/spinner";
import { IInitialValues } from "@/app/lib/definitions";
import { createOrder, getPaymentIntent, sendEmail } from "@/app/lib/client";
import { CardNumberElement } from "@stripe/react-stripe-js";

function FormSectionWithElements() {
    const [processingPayment, setProcessingPayment] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const cardElement = elements?.getElement(CardNumberElement);

    const handleSubmit = async (values: IInitialValues) => {
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

        const flattenedPriceSum = priceSumOfAllLineItems.flat();

        const totalSum = flattenedPriceSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const tipValue = (Number(tip) / 100) * totalSum;
        const totalWithTip = totalSum + tipValue;
        const isPaymentMethodVisa = values?.paymentMethod === 'Visa';

        // data to be send

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


        if (isPaymentMethodVisa) {
            setProcessingPayment(true);

            if (elements === null || stripe === null) {
                console.log('shokingly null!!!');
                setProcessingPayment(false);
            }

            getPaymentIntent({
                totalValue: totalWithTip,
                email: values?.userData[0]?.billing.email,
                first_name: values?.userData[0]?.billing.first_name,
                last_name: values?.userData[0]?.billing.last_name,
            })
                .then(clientSecret => {
                    if (!clientSecret) {
                        throw new Error('Client secret is not available');
                    }
                    return stripe?.confirmCardPayment(clientSecret, {
                        payment_method: {
                            card: cardElement as any,
                            billing_details: {
                                name: values?.biller_details?.card_holder_name,
                                email: values?.biller_details?.email,
                                address: {
                                    line1: values?.biller_details.address.line1,
                                    // line2: values?.biller_details.address.line2,
                                    city: values?.biller_details.address.city,
                                    state: values?.biller_details.address.state,
                                    postal_code: values?.biller_details.address.postal_code,
                                    country: values?.biller_details.address.country,
                                }
                            },
                        },
                    });
                })
                // @ts-ignore
                .then(({ error, paymentIntent }) => {
                    if (error) {
                        setProcessingPayment(false);
                        alert(JSON.stringify(error));
                        throw error; // Optionally, rethrow the error to handle it further up the chain
                    }

                    if (paymentIntent) {
                        transformedData.forEach(data => {
                            createOrder(data);
                        });
                        if (values?.biller_details?.card_holder_name?.toLowerCase() !== values?.userData[0]?.billing.first_name?.toLocaleLowerCase() + ' ' + values?.userData[0]?.billing.last_name?.toLowerCase()) {
                            sendEmail(`
                                The name on the card does not match the billing information provided.
                                Card Holder Name: ${values?.biller_details?.card_holder_name}
                                User Name: ${values?.userData[0]?.billing.first_name} ${values?.userData[0]?.billing.last_name}
                            `)
                        }
                    }
                    setProcessingPayment(false);
                })
                .catch(error => {
                    // Handle any errors that occurred in the previous promises
                    console.error('Error processing payment:', error);
                    setProcessingPayment(false);
                });

        } else {
            transformedData.forEach((data) => {
                createOrder(data);
            });
        }
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
                        <Form />
                    </MapApiProvider>
                )}
            </Formik>
        </div>
    );
}

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
    return (
        <Elements stripe={stripePromise}>
            <FormSectionWithElements />
        </Elements>
    )
}