"use client";
import { ICategorizedTreatments, ProductData } from "@/app/lib/definitions";
import { ProductDataProvider } from "./Form/reducers/productDetailContext";
import ProductPage from "./ProductPage";

export default function FormComponents({ product, categorizedTreatments }: {
    product: ProductData,
    categorizedTreatments: ICategorizedTreatments
}) {
    return (
        <>
            <ProductDataProvider >
                <ProductPage product={product} categorizedTreatments={categorizedTreatments} />
            </ProductDataProvider>
        </>
    )
}