import { ErrorMessage, Field } from "formik";
import Label from "./label";
import Input from "./input";

export default function InputLabelWrapper(
    {
        wrapperClassName = '',
        labelName = '',
        labelClassName = '',
        required,
        htmlFor,
        name,
        placeholder,
        type,
        inputClassName,
        errorClassName,
        dateOfBirth = false
    }: {
        wrapperClassName?: string,
        labelName?: string,
        labelClassName?: string,
        required: boolean,
        htmlFor?: string,
        name: string,
        placeholder: string,
        type: string,
        inputClassName: string,
        errorClassName?: string,
        dateOfBirth?: boolean
    }
) {
    return (
        <div className={`flex flex-col gap-1 relative ${wrapperClassName}`}>
            {labelName ? <Label htmlFor={htmlFor} required={required} labelClassName={labelClassName} labelName={labelName} /> : null}
            <Input inputClassName={inputClassName} name={name} placeholder={placeholder} type={type} dateOfBirth={dateOfBirth} />
            {required ? <ErrorMessage
                name={name}
                component="div"
                className={`field-error text-sm text-red-500 absolute -bottom-6 max-xsm:text-ellipsis text-wrap ${errorClassName}`}
            /> : null}
        </div>
    )
}