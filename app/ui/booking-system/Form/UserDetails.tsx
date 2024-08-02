import { IInitialValues } from "@/app/lib/definitions";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
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
                                                    className="secondary"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        )
                                    }
                                    <div className="col">
                                        <label htmlFor={`userData.${index}.billing.first_name`}>Name</label>
                                        <Field
                                            name={`userData.${index}.billing.first_name`}
                                            placeholder="Jane Doe"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name={`userData.${index}.billing.first_name`}
                                            component="div"
                                            className="field-error"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor={`userData.${index}.billing.email`}>Email</label>
                                        <Field
                                            name={`userData.${index}.billing.email`}
                                            placeholder="jane@acme.com"
                                            type="email"
                                        />
                                        <ErrorMessage
                                            name={`userData.${index}.billing.email`}
                                            component="div"
                                            className="field-error"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor={`userData.${index}.billing.phone`}>Phone</label>
                                        <Field
                                            name={`userData.${index}.billing.phone`}
                                            placeholder="Phone"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name={`userData.${index}.billing.phone`}
                                            component="div"
                                            className="field-error"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor={`userData.${index}.billing.phone`}>Date of Birth</label>
                                        <Field
                                            name={`userData.${index}.billing.dateOfBirth`}
                                            placeholder="Phone"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name={`userData.${index}.billing.line_items`}
                                            component="div"
                                            className="field-error"
                                        />
                                    </div>
                                </div>
                            ))}
                        <button
                            type="button"
                            className="secondary"
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
                            + Add User
                        </button>
                    </div>
                )}
            </FieldArray>
            <button type="submit">Invite</button>
        </div>
    );
}
