import React from "react";
import { useField, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SmallIcon } from "../Icons/Icon";

const CustomDatePicker = ({ field, form, ...props }: {
    field: any,
    form: any,
    className: string
}) => {
    const { setFieldValue } = form;
    return (
        <DatePicker
            {...field}
            {...props}
            selected={field.value}
            onChange={(date) => setFieldValue(field.name, date)}
            customInput={
                <input className={props.className + " w-[494px] text-datePickerPlaceholder max-sm:w-[100%]"} />
            }
        />
    );
};

export default function DateComponent({ dateOfBirth, name, className, placeHolder, type }: {
    dateOfBirth?: boolean,
    name: string,
    className: string,
    placeHolder: string,
    type: string
}) {
    return (
        <div style={{ width: '100%' }} className="w-[100%] customDatePickerWidth">
            {type === "date" &&
                <Field
                    name={name}
                    className={className}
                    component={CustomDatePicker}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={placeHolder}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={dateOfBirth ? new Date() : undefined}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                    }: {
                        date: Date,
                        changeYear: (year: number) => void,
                        changeMonth: (month: number) => void,
                        decreaseMonth: () => void,
                        increaseMonth: () => void
                    }) => (
                        <div className="custom-header bg-orange-#fff">
                            <button onClick={(e) => {
                                e.preventDefault();
                                decreaseMonth();
                            }}>
                                <SmallIcon icon="/chevron-left.png" width={10} height={10} />
                            </button>
                            <select
                                value={date.getFullYear()}
                                onChange={({ target: { value } }) => changeYear(parseInt(value))}
                                className="bg-[#f1f1f1] border-[#b9b9b9] border-[1px] text-[#32c0cc] w-[100%] max-w-[100px] px-1 py-2 text-center cursor-pointer"
                            >
                                {Array.from({ length: 100 }, (_, i) => (
                                    <option key={i} value={i + date.getFullYear() - 50}>
                                        {i + date.getFullYear() - 50}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={date.getMonth()}
                                onChange={({ target: { value } }) => changeMonth(parseInt(value))}
                                className="bg-[#f1f1f1] border-[#b9b9b9] border-[1px] text-[#32c0cc] w-[100%] max-w-[100px] px-1 py-2 text-center cursor-pointer"
                            >
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i} value={i}>
                                        {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                    </option>
                                ))}
                            </select>
                            <button onClick={increaseMonth}>
                                <SmallIcon icon="/chevron-right.png" width={10} height={10} />
                            </button>
                        </div>
                    )}
                    isClearable
                />}
            {
                type === "time" &&
                <Field
                    showTimeSelect
                    showTimeSelectOnly
                    timeCaption="Provider Time"
                    name={name}
                    className={className}
                    component={CustomDatePicker}
                    placeholderText={placeHolder}
                    dropdownMode="select"
                    isClearable
                />
            }
        </div>
    );
}
