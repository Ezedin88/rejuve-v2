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

export interface ILineItem {
    meta_data: MetaData[];
    price: number;
    productName: string;
    categoryName?: string;
    product_id: number;
    quantity: number;
    variation_id?: {
        type: bookingChoice;
        variant_id: number;
    };
    userIndex: number;
}

interface UserData {
    billing: Billing;
    line_items: ILineItem[];
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
    country: string;
    city: string;
    state: string;
    postcode: string;
}

interface BillerDetails {
    card_holder_name: string;
    email: string;
    address: Address;
}

export type bookingChoice = 'atourclinics' | 'housecall';
type paymentMethod = 'Visa' | 'pay at location';
export interface IInitialValues {
    userData: UserData[];
    bookingAddress: BookingAddress;
    bookingChoice: bookingChoice;
    clinicChoice: string;
    biller_details: BillerDetails;
    bookingDate: string;
    bookingTime: string;
    provider: string;
    termsAgreed: boolean;
    recieveExclusiveOffers: boolean;
    createAccount: boolean;
    paymentMethod: paymentMethod;
    specialInstructions: string;
    meta_data: MetaData[];
    tip: string;
}

export interface ProductData {
    id: number;
    name: string;
    slug: string;
    categories: string[];
    product_slug: string[];
    price: string;
    permalink: string;
    image: string;
    short_description: string;
    acf: Acf;
    bookingChoice: bookingChoice;
    product_image: ProductImage;
    variations: Variation[];
}

interface Acf {
    convenience_section_title: string;
    convenience_list: ConvenienceList[];
    benefits_of_product_content: BenefitsOfProductContent;
    ingredients_section_title: IngredientsSectionTitle;
    ingredients_list: IngredientsList[];
    content: string;
    scrolling_slider_image: boolean;
    slider_or_image: boolean;
    product_image: ProductImage;
}

interface ConvenienceList {
    icon: Icon;
    title: string;
    description: string;
}

interface Icon {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: Sizes;
}

interface Sizes {
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    medium: string;
    medium_width: number;
    medium_height: number;
    medium_large: string;
    medium_large_width: number;
    medium_large_height: number;
    large: string;
    large_width: number;
    large_height: number;
    _1536x1536: string;
    _1536x1536_width: number;
    _1536x1536_height: number;
    _2048x2048: string;
    _2048x2048_width: number;
    _2048x2048_height: number;
    woocommerce_thumbnail: string;
    woocommerce_thumbnail_width: number;
    woocommerce_thumbnail_height: number;
    woocommerce_single: string;
    woocommerce_single_width: number;
    woocommerce_single_height: number;
    woocommerce_gallery_thumbnail: string;
    woocommerce_gallery_thumbnail_width: number;
    woocommerce_gallery_thumbnail_height: number;
}

interface BenefitsOfProductContent {
    title: string;
    description: string;
    add_benefits_product_image: AddBenefitsProductImage;
    content: string;
}

interface AddBenefitsProductImage {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: Sizes;
}

interface IngredientsSectionTitle {
    title: string;
    description: string;
}

interface IngredientsList {
    select_ingredients_i: string;
    select_title_color_of_ingredients_item: string;
    ingredients_title_tag: string;
    ingredients_title: string;
    ingredients_sub_title: string;
    ingredients_content: string;
}

interface ProductImage {
    large_screen_image_width: string;
    large_screen_image_height: string;
    small_screen_image_width: string;
    small_screen_image_height: string;
}

export interface Variation {
    id: number;
    name: string;
    price: number;
    permalink: string;
    image: string;
}

interface productInfoConvenienceItem {
    icon: string;
    title: string;
    description: string;
}
export interface productInfo {
    productName: string;
    productId: number;
    slug: string;
    price: string;
    permalink: string;
    image: string;
    short_description: string;
    acf: {
        convenience_section_title: string;
        convenience_list: productInfoConvenienceItem[];
    };
    categories: string[];
    product_home_price: number;
    home_price_id: number;
    product_clinic_price: number;
    clinic_price_id: number;
    variant_products_info?: ITransformedProduct;
    bookingChoice: bookingChoice;
    currently_selected_product?: currently_selected_product;
    categorized_products?: ICategorizedTreatments;
    categoryName: string;
}

export interface currently_selected_product {
    productName?: string;
    home_price_id?: number;
    clinic_price_id?: number;
    product_id?: number;
    productPrice?: number;
    productImage?: string;
    categoryName?: string;
    type: 'housecall' | 'atourclinics';
    product_clinic_price?: number;
    product_home_price?: number;
}

export interface BaseProduct {
    productName: string;
    image: string;
}

export interface HouseProduct extends BaseProduct {
    housePriceId: number;
    product_home_price: number;
}

export interface ClinicProduct extends BaseProduct {
    clinicPriceId: number;
    product_clinic_price: number;
}

export interface ITransformedProduct {
    houseProducts: HouseProduct[];
    clinicProducts: ClinicProduct[];
}

export interface IProductTreatment {
    name: string;
    price: string;
    slug: string;
    permalink: string;
    product_id: string;
    variations?: Variation[];
}

export interface ICategorizedTreatments {
    [key: string]: IProductTreatment[];
}

export interface ISectionTitle {
    title: string,
    button: string,
    description: string
}

export interface IBook {
    background_color: string;
    title: string;
    button: {
        title: string;
        url: string;
        target: string
    },
    description: string;
    image: {
        title: string;
        url: string;
        link: string;
    }
}

export interface IAboutUs {
    title: string;
    sub_title: string;
    image: {
        title: string;
        url: string;
        link: string;
    };
    editor: string;
}
export interface IHomePageContent {
    features_title: {
        title: string;
        description: string;
    };
    features: {
        image?: {
            title: string;
            url: string;
            link: string;
        };
        background_color: string;
        title: string;
        sub_title: string;
        button: {
            title: string;
            url: string;
        };
        description: string;
        acf_fc_layout: string;
    }[];
    section_title: ISectionTitle;
    book: IBook[];
    content: IAboutUs;
}

export interface IFrontPageContent {
    hero: {
        title: string;
        button: {
            title: string;
            url: string;
            target: string;
        };
        description: string;
    },
    homepage_content: IHomePageContent[];
}