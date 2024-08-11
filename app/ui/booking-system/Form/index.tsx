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

// Ensure stripePromise is defined, even if it's just null initially
export default function FormSection() {
    const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);

    useEffect(() => {
        const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
        console.log('stripeKey===>', stripeKey);
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

    return (
        <div className="w-full max-w-[1257px] mx-auto">
            <Formik
                initialValues={initialValues}
                validationSchema={handleValidation}
                onSubmit={values => console.log('submitted===>', values)}
            >
                {({ values }) => (
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
