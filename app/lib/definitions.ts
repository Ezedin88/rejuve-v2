export interface benefitsTitleProps {
    className: 'primary-why-rejuve-title' | 'secondary-why-rejuve-title';
    convenience_section_title: string;
}

export interface whyRejuveCardContainerProps {
    className: 'primary-why-rejuve-card-container' | 'secondary-why-rejuve-card-container';
    children: React.ReactNode;
}

interface Billing {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
}

interface MetaData {
    key: string;
    value: string;
}

interface LineItem {
    meta_data: MetaData[];
    price: number;
    productName: string;
    product_id: number;
    quantity: number;
    variation_id?: number;
    userIndex: number;
}

interface UserData {
    billing: Billing;
    line_items: LineItem[];
}

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

interface BookingAddress {
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
}

interface BillerDetails {
    name: string;
    email: string;
    address: Address;
}

export interface IInitialValues {
    userData: UserData[];
    bookingAddress: BookingAddress;
    bookingChoice: string;
    clinicChoice: string;
    biller_details: BillerDetails;
    bookingDate: string;
    bookingTime: string;
    provider: string;
    termsAgreed: boolean;
    recieveExclusiveOffers: boolean;
    createAccount: boolean;
    paymentMethod: string;
    specialInstructions: string;
    meta_data: MetaData[];
}