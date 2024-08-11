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
// Ensure stripePromise is defined, even if it's just null initially
export default function FormSection() {
    const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);

    useEffect(() => {
        const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
        if (stripeKey) {
            const promise = loadStripe(stripeKey);
            setStripePromise(promise);
        }
    }, []);

    // Optionally, add a loading state or render a fallback UI while `stripePromise` is being set
    if (!stripePromise) {
        return <div className="h-10 py-10 grid place-content-center bg-lightGreen">
            <Spinner content="Loading form data..." />
        </div>;
    }

    const handleSubmit = (values: IInitialValues) => {
        console.log('submitted', values);
        const { line_items } = values?.userData?.[0];
        const transformedData = {
            payment_method: values.paymentMethod,
            set_paid: true,
            billing: {
                first_name: values.userData[0].billing.first_name,
                last_name: values.userData[0].billing.last_name,
                address_1: values.bookingAddress.address_1,
                address_2: values.bookingAddress.address_2,
                city: values.bookingAddress.city,
                state: values.bookingAddress.state,
                postcode: values.bookingAddress.postcode,
                country: values.bookingAddress.country,
                email: values.userData[0].billing.email,
                phone: values.userData[0].billing.phone,
            },
            shipping: {
                first_name: values.userData[0].billing.first_name,
                last_name: values.userData[0].billing.last_name,
                address_1: values.bookingAddress.address_1,
                address_2: values.bookingAddress.address_2,
                city: values.bookingAddress.city,
                state: values.bookingAddress.state,
                postcode: values.bookingAddress.postcode,
                country: values.bookingAddress.country,
            },
            line_items: line_items.map((item) => {
                // @ts-ignore
                const parsedItem = JSON.parse(item);
                return {
                    product_id: parsedItem.product_id,
                    quantity: parsedItem.quantity,
                };
            }),
            fee_lines: [
                {
                    name: 'Tip',
                    tax_class: '',
                    tax_status: 'none',
                    total: values.tip,
                }
            ],
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

        createOrder(transformedData);
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
