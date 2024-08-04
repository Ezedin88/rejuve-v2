"use client";
import { Formik } from "formik";
import { initialValues } from "@/app/config/initialValues";
import { handleValidation } from "@/app/config/validation";
import Form from "@/app/ui/booking-system/Form/Form";
import { useEffect } from "react";
import { MapApiProvider } from "./reducers/loadMapContext";

export default function FormSection() {
    return (
        <div className="w-full max-w-[1257px] mx-auto">
            <Formik
                initialValues={initialValues}
                validationSchema={handleValidation}
                onSubmit={values => console.log('submitted===>', values)}
            >
                {({ values }) => (
                    <MapApiProvider>
                        <Form />
                    </MapApiProvider>
                )}
            </Formik>
        </div>
    );
}
