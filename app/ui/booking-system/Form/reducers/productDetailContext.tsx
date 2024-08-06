import { currently_selected_product, ProductData, productInfo } from "@/app/lib/definitions";
import React, { createContext, Dispatch } from "react";

interface productDataContextState {
    productData: productInfo;
    dispatch: Dispatch<ProductDataAction>;
}

type ProductDataAction =
    | { type: "SET_PRODUCT_DATA"; payload: productInfo }
    | { type: "SET_CURRENTLY_SELECTED_PRODUCT"; payload: currently_selected_product };

const defaultState: productDataContextState = {
    productData: {
        productName: '',
        productId: 0,
        slug: '',
        price: '',
        permalink: '',
        image: '',
        short_description: '',
        acf: {
            convenience_section_title: '',
            convenience_list: [
                {
                    icon: '',
                    title: '',
                    description: ''
                }
            ]
        },
        product_home_price: 0,
        home_price_id: 0,
        product_clinic_price: 0,
        clinic_price_id: 0,
        variant_products_info: {
            houseProducts: [
                {
                    productName: '',
                    housePriceId: 0,
                    image: '',
                    product_home_price: 0
                }
            ],
            clinicProducts: []
        },
        currently_selected_product: {
            productName: '',
            product_id: undefined,
            clinic_price_id: undefined,
            home_price_id: undefined,
            productPrice: 0,
            productImage: '',
            type: 'clinic'
        }
    },
    dispatch: () => { }
};

const ProductDataContext = createContext<productDataContextState>(defaultState);

function reducer(state: { productData: productInfo }, action: ProductDataAction): { productData: productInfo } {
    switch (action.type) {
        case "SET_PRODUCT_DATA":
            return { productData: action.payload };
        case "SET_CURRENTLY_SELECTED_PRODUCT":
            return {
                productData: {
                    ...state.productData,
                    currently_selected_product: action.payload
                }
            };
        default:
            return state;
    }
}

export function ProductDataProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    return (
        <ProductDataContext.Provider value={{ productData: state.productData, dispatch }}>
            {children}
        </ProductDataContext.Provider>
    );
}

export function useProductData() {
    const context = React.useContext(ProductDataContext);
    if (!context) {
        throw new Error("useProductData must be used within a ProductDataProvider");
    }
    return context;
}
