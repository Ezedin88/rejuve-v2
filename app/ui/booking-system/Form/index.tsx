"use client";
import MainForm from "@/app/ui/booking-system/Form/Form";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import { initialValues } from "@/app/config/initialValues";
import { handleValidation } from "@/app/config/validation";
import UserDetails from "./UserDetails";
import Form from "@/app/ui/booking-system/Form/Form";
import { IInitialValues } from "@/app/lib/definitions";

export default function FormSection() {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={handleValidation}
                onSubmit={values => console.log('submitted===>', values)}
            >
                {({ values }) => (
                    <Form />
                )}
            </Formik>
        </div>
    );
}
