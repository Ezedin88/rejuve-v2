import Text from "@/app/components/Buttons/Text";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import { IInitialValues } from "@/app/lib/definitions";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
import Image from "next/image";
import React from 'react';

export default function UserDetails() {
    const { values } = useFormikContext<IInitialValues>();
    const { userData } = values || {};

    return (
        <div>
            <FieldArray name="userData">
                {({ remove, push }) => (
                    <div>
                        {userData.length > 0 &&
                            userData.map((_user, index) => (
                                <div className="row" key={index}>
                                    {
                                        index > 0 && (
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="secondary secondary bg-transparent border-2 border-red-400 hover:border-red-500 rounded-[5px] flex gap-[10px] items-center justify-center text-[16px] font-semibold box-border w-[150px] h-[45px] max-sm:w-[200px]
                                                    active:border-red-400
                                                    text-red-400 hover:text-red-500 active-text-red-300
                                                    "
                                                    onClick={() => remove(index)}
                                                >
                                                    <Text className="text-[14px]">Delete Person {index + 1}</Text>
                                                </button>
                                            </div>
                                        )
                                    }
                                    {/* first name */}
                                    <InputLabelWrapper
                                        htmlFor={`userData.${index}.billing.first_name`}
                                        labelName="First name"
                                        labelClassName="primary-input-label"
                                        required={true}
                                        name={`userData.${index}.billing.first_name`}
                                        placeholder="Johnathan"
                                        type="text"
                                        inputClassName="primary-input-box"
                                    />
                                    {/* last name */}
                                    <InputLabelWrapper
                                        htmlFor={`userData.${index}.billing.last_name`}
                                        labelName="Last name"
                                        labelClassName="primary-input-label"
                                        required={true}
                                        name={`userData.${index}.billing.last_name`}
                                        placeholder="Smith"
                                        type="text"
                                        inputClassName="primary-input-box"
                                    />
                                    {/* email */}
                                    <InputLabelWrapper
                                        htmlFor={`userData.${index}.billing.email`}
                                        labelName="Email address"
                                        labelClassName="primary-input-label"
                                        required={true}
                                        name={`userData.${index}.billing.email`}
                                        placeholder="jonathans@gmail.com"
                                        type="email"
                                        inputClassName="primary-input-box"
                                    />
                                    {/* phone number */}
                                    <InputLabelWrapper
                                        htmlFor={`userData.${index}.billing.phone`}
                                        labelName="Phone number"
                                        labelClassName="primary-input-label"
                                        required={true}
                                        name={`userData.${index}.billing.phone`}
                                        placeholder="(123) 456-7890"
                                        type="text"
                                        inputClassName="primary-input-box"
                                    />
                                    {/* Date of Birth */}
                                    <InputLabelWrapper
                                        htmlFor={`userData.${index}.billing.dateOfBirth`}
                                        labelName="Date of Birth"
                                        labelClassName="primary-input-label"
                                        required={true}
                                        name={`userData.${index}.billing.dateOfBirth`}
                                        placeholder="MM/DD/YYYY"
                                        type="date"
                                        dateOfBirth
                                        inputClassName="primary-input-box"
                                    />
                                </div>
                            ))}
                        <button
                            type="button"
                            className="secondary bg-primaryGreen rounded-[5px] flex py-[10px] px-[20px] text-white gap-[10px] items-center justify-center text-[16px] font-semibold box-border w-[250px] h-[55px] max-sm:w-[302px]
                            hover:bg-primaryGreenHover
                              active:bg-primaryGreen
                            "
                            onClick={() =>
                                push({
                                    billing: {
                                        first_name: '',
                                        last_name: '',
                                        email: '',
                                        phone: '',
                                        dateOfBirth: '',
                                        line_items: [{}],
                                    },
                                })
                            }
                        >
                            <Image src="/person.png" alt="person" width={15} height={20} />
                            <Text>Add another person</Text>
                        </button>
                    </div>
                )}
            </FieldArray>
            {/* <button type="submit">Invite</button> */}
        </div>
    );
}
