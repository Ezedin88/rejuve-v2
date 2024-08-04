import { Field } from "formik";
import Date from "@/app/components/Form/Date";

export default function Input({
    name, placeholder, type, inputClassName, dateOfBirth = false,
    inputProps
}: {
    name: string,
    placeholder: string,
    type: string,
    inputClassName: string,
    dateOfBirth?: boolean,
    inputProps?: any
}) {
    if (type === "date") return <Date dateOfBirth={dateOfBirth} name={name} className={inputClassName} placeHolder={placeholder} />
    return (
        <Field
            name={name}
            placeholder={placeholder}
            type={type}
            className={inputClassName}
            {...inputProps ?? null}
        />
    )
};