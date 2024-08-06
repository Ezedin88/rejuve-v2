import { ITransformedProduct, ProductData } from "@/app/lib/definitions";
import { transformProductInfo } from "@/app/utils/utils";
import ProductHero from "./product-hero";
import WhyRejuve from "./WhyRejuve";
import Form from "@/app/ui/booking-system/Form";
import { useProductData } from "./Form/reducers/productDetailContext";
import { useEffect } from "react";

export default function ProductPage({ product }: {
    product: ProductData
}) {
    const hasVariations = product?.variations?.length > 2;
    let transformedData: ITransformedProduct | null | undefined = null;
    if (hasVariations) {
        transformedData = transformProductInfo(product?.variations);
    }

    const { dispatch } = useProductData();
    useEffect(() => {
        dispatch({
            type: "SET_PRODUCT_DATA",
            payload: {
                categories: product?.categories,
                productName: product?.name,
                productId: product?.id,
                slug: product?.slug,
                price: product?.price,
                permalink: product?.permalink,
                image: product?.image,
                short_description: product?.short_description,
                acf: {
                    convenience_section_title: product?.acf?.convenience_section_title,
                    convenience_list: product?.acf?.convenience_list?.map(item => ({
                        icon: item?.icon?.url,
                        title: item?.title,
                        description: item?.description,
                    }))
                },
                product_home_price: product?.variations?.[1]?.price,
                home_price_id: product?.variations?.[1]?.id,
                product_clinic_price: product?.variations?.[0]?.price,
                clinic_price_id: product?.variations?.[0]?.id,
                variant_products_info: transformedData ?? undefined
            }
        });
    }, [dispatch, product, transformedData]);
    return (
        <>
            <ProductHero />
            <WhyRejuve />
            <Form />
        </>
    )
}