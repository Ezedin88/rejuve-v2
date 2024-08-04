import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SmallIcon } from "../Icons/Icon";

export default function DateComponent({ dateOfBirth, name, className, placeHolder }: { dateOfBirth?: boolean, name: string, className: string, placeHolder: string }) {
    const [startDate, setStartDate] = useState<Date | null>();

    return (
        <div style={{ width: '100%' }} className="w-[100%] customDatePickerWidth">
            <DatePicker
                className={className + " w-[494px] text-datePickerPlaceholder max-sm:w-[100%]"}
                name={name}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText={placeHolder}
                showMonthDropdown
                showYearDropdown
                showYearPicker={false}
                showMonthYearPicker={false}
                showFullMonthYearPicker={false}
                dropdownMode="select"
                peekNextMonth={false}
                maxDate={dateOfBirth ? new Date() : undefined}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
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
                            className="bg-[#f1f1f1] border-[#b9b9b9]
                                border-[1px]
                            text-[#32c0cc] w-[100%] max-w-[100px] px-1 py-2 text-center cursor-pointer"
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
                            className="bg-[#f1f1f1] border-[#b9b9b9]
                            border-[1px]
                        text-[#32c0cc] w-[100%] max-w-[100px] px-1 py-2 text-center cursor-pointer"
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
            />
        </div>
    );
}
