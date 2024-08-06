import { ProductData, productInfo } from "@/app/lib/definitions";
import React, { createContext, Dispatch } from "react";

interface productDataContextState {
    productData: productInfo;
    dispatch: Dispatch<{ type: string, payload: productInfo }>;
}

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
        }
    },
    dispatch: () => { }
};

const ProductDataContext = createContext<productDataContextState>(defaultState);

function reducer(state: {
    productData: productInfo
}, action: {
    type: string,
    payload: productInfo
}) {
    switch (action.type) {
        case "SET_PRODUCT_DATA":
            return { productData: action.payload };
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