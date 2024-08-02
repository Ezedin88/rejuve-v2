import * as yup from "yup";

export const billingSchema = yup.object().shape({
    first_name: yup.string()
        .min(3, 'First name must be at least 3 characters')
        .max(50, 'First name must be at most 50 characters')
        .required('First name is required')
        .matches(/^[a-zA-Z]+$/, 'First name must contain only alphabets'),
    last_name: yup.string()
        .min(3, 'Last name must be at least 3 characters')
        .max(50, 'Last name must be at most 50 characters')
        .required('Last name is required')
        .matches(/^[a-zA-Z]+$/, 'Last name must contain only alphabets'),
    email: yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, 'Invalid email address'),
    phone: yup.string()
        .required('Phone number is required')
        .test('len', 'Invalid phone number', val => val && /^[\d+\-()\s]+$/.test(val))  // Allow spaces in the regex
        .test('too-short', 'Number too short', val => val && val.replace(/[^0-9]/g, '').length >= 10)
        .test('too-long', 'Number too long', val => val && val.replace(/[^0-9]/g, '').length <= 20),
    // line_items: yup.array().min(1, 'At least one item is required in line items').required('Line items are required'),
});

export const handleValidation = yup.object().shape({
    userData: yup.array().of(
        yup.object().shape({
            billing: billingSchema,
        })
    ),
    // provider: yup.string().required('Provider is required'),
    // bookingDate: yup.string().required('Booking date is required'),
    // bookingTime: yup.string().required('Booking time is required'),
    // bookingChoice: yup.string().required('Booking location is required'),
    // card_number: yup.string().when('paymentMethod', {
    //     is: (val) => {
    //         return val === 'creditCard'
    //     },
    //     then: (s) => s.required('Card number is required'),
    //     otherwise: (s) => s,
    // }),
    // bookingAddress: yup.object().shape({
    //     address_1: yup.string().when('$bookingChoice', {
    //         is: (val) => {
    //             return val === 'housecall'
    //         },
    //         then: (s) => s.required('Address is required'),
    //         otherwise: (s) => s,
    //     }),
    //     city: yup.string().when('$bookingChoice', {
    //         is: (val) => {
    //             return val === 'housecall'
    //         },
    //         then: (s) => s.required('City is required'),
    //         otherwise: (s) => s,
    //     }),
    //     state: yup.string().when('$bookingChoice', {
    //         is: (val) => {
    //             return val === 'housecall'
    //         },
    //         then: (s) => s.required('State is required'),
    //         otherwise: (s) => s,
    //     }),
    //     postcode: yup.string().when('$bookingChoice', {
    //         is: (val) => {
    //             return val === 'housecall'
    //         },
    //         then: (s) => s.required('Postcode is required'),
    //         otherwise: (s) => s,
    //     }),
    // }),
    // termsAgreed: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
