import Text from "@/app/components/Buttons/Text";
import InputLabelWrapper from "@/app/components/Form/InputLabelWrapper";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import React from 'react';

export default function UserDetails({ remove, index }: {
    remove: (index: number) => void;
    index: number;
}) {

    return (
        <div>
            <div>
                <div className="user_details_wrapper" key={index}>
                    <div className="row grid gap-y-[28px] max-xsm:gap-y-[23px]" key={index}>
                        <Text className="form-wrapper-title max-xls:text-center">Fill out your details</Text>
                        <PrimaryFormWrapper>
                            {/* first name */}
                            <InputLabelWrapper
                                wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3"
                                htmlFor={`userData.${index}.billing.first_name`}
                                labelName="First name"
                                labelClassName="primary-input-label "
                                required={true}
                                name={`userData.${index}.billing.first_name`}
                                placeholder="Johnathan"
                                type="text"
                                inputClassName="primary-input-box max-xlsm:grid"
                            />
                            {/* last name */}
                            <InputLabelWrapper
                                wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3"
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
                                wrapperClassName="max-[350px]:col-start-1 max-[350px]:col-end-3"
                                htmlFor={`userData.${index}.billing.email`}
                                labelName="Email address"
                                labelClassName="primary-input-label"
                                required={true}
                                name={`userData.${index}.billing.email`}
                                placeholder="jonathans@gmail.com"
                                type="email"
                                inputClassName="primary-input-box bg-white"
                            />
                            {/* phone number */}
                            <InputLabelWrapper
                                wrapperClassName="max-[350px]:col-start-1 max-[350px]:col-end-3"
                                htmlFor={`userData.${index}.billing.phone`}
                                labelName="Phone number"
                                labelClassName="primary-input-label"
                                required={true}
                                name={`userData.${index}.billing.phone`}
                                placeholder="(123) 456-7890"
                                type="text"
                                inputClassName="primary-input-box"
                                errorClassName="max-sm:-bottom-10 max-xxsm:-bottom-6"
                            />
                            {/* Date of Birth */}
                            <InputLabelWrapper
                                wrapperClassName="max-xsm:col-start-1 max-xsm:col-end-3"
                                htmlFor={`userData.${index}.billing.dateOfBirth`}
                                labelName="Date of Birth"
                                labelClassName="primary-input-label"
                                required={false}
                                name={`userData.${index}.billing.dateOfBirth`}
                                placeholder="MM/DD/YYYY"
                                type="date"
                                dateOfBirth
                                inputClassName="primary-input-box"
                            />
                        </PrimaryFormWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
}
