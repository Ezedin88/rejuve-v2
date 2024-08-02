import { Form as FormikForm } from "formik";
import UserDetails from "./UserDetails";

export default function Form() {
    return (
        <FormikForm>
            <UserDetails />
        </FormikForm>
    )
}