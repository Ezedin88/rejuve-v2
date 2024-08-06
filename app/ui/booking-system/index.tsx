"use client";
import { ProductData } from "@/app/lib/definitions";
import { ProductDataProvider } from "./Form/reducers/productDetailContext";
import ProductPage from "./ProductPage";

export default function FormComponents({ product }: {
    product: ProductData
}) {
    return (
        <>
            <ProductDataProvider >
                <ProductPage product={product} />
            </ProductDataProvider>
        </>
    )
}