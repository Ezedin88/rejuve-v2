import { IInitialValues } from "@/app/lib/definitions";
export const initialValues: IInitialValues = {
    userData: [
        {
            billing: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                dateOfBirth: '',
            },
            line_items: [],
        },
    ],
    meta_data: [],
    bookingAddress: {
        address_1: '',
        address_2: '',
        country: '',
        city: '',
        state: '',
        postcode: '',
    },
    bookingChoice: 'atourclinics',
    clinicChoice: '',
    biller_details: {
        card_holder_name: '',
        email: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            state: '',
            country: '',
            postal_code: '',
        },
    },
    bookingDate: '',
    bookingTime: '',
    provider: 'Any',
    termsAgreed: false,
    recieveExclusiveOffers: true,
    createAccount: true,
    paymentMethod: 'Visa',
    specialInstructions: '',
    tip: "5",
};
