"use client";
import { ICategorizedTreatments, ProductData } from "@/app/lib/definitions";
import { ProductDataProvider } from "./Form/reducers/productDetailContext";
import ProductPage from "./ProductPage";

export default function FormComponents({ product, categorizedTreatments, slug }: {
    product: ProductData,
    categorizedTreatments: ICategorizedTreatments,
    slug: string
}) {
    return (
        <>
            <ProductDataProvider >
                <ProductPage product={product} categorizedTreatments={categorizedTreatments} slug={slug} />
            </ProductDataProvider>
        </>
    )
}