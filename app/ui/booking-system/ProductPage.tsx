import { ICategorizedTreatments, ITransformedProduct, ProductData } from "@/app/lib/definitions";
import { transformProductInfo } from "@/app/utils/utils";
import ProductHero from "./product-hero";
import WhyRejuve from "./WhyRejuve";
import Form from "@/app/ui/booking-system/Form";
import TreatmentNameIntro from "@/app/ui/booking-system/Form/TreatmentNameIntro";
import { useProductData } from "./Form/reducers/productDetailContext";
import { useEffect, useState } from "react";

export default function ProductPage({ product, categorizedTreatments }: {
    product: ProductData,
    categorizedTreatments: ICategorizedTreatments
}) {
    const [isInitiallyRendered, setIsInitiallyRendered] = useState(false);
    const hasVariations = product?.variations?.length > 2;
    let transformedData: ITransformedProduct | null | undefined = null;
    if (hasVariations) {
        transformedData = transformProductInfo(product?.variations);
    }
    const { dispatch } = useProductData();
    const multiVariantClinicProdut = transformedData?.clinicProducts?.find(item => {
        const cleanedProductName = product?.name.replace(/[\W_]/g, ''); // Remove special symbols and underscores
        const cleanedItemName = item?.productName.replace(/[\W_]/g, ''); // Remove special symbols and underscores
        return cleanedItemName === cleanedProductName;
    });

    const multiVariantHouseProduct = transformedData?.houseProducts?.find(item => {
        const cleanedProductName = product?.name.replace(/[\W_]/g, ''); // Remove special symbols and underscores
        const cleanedItemName = item?.productName.replace(/[\W_]/g, ''); // Remove special symbols and underscores
        return cleanedItemName === cleanedProductName;
    });

    useEffect(() => {
        if (product?.name && !isInitiallyRendered) {
            setIsInitiallyRendered(true);
            dispatch({
                type: "SET_PRODUCT_DATA",
                payload: {
                    categories: product?.categories,
                    productName: product?.name,
                    productId: product?.id,
                    slug: product?.slug,
                    price: multiVariantClinicProdut ? String(multiVariantClinicProdut?.product_clinic_price) : product?.price,
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
                    product_home_price: multiVariantHouseProduct ? multiVariantHouseProduct?.product_home_price : product?.variations?.[1]?.price ?? product?.price,
                    home_price_id: multiVariantHouseProduct ?
                        multiVariantHouseProduct?.housePriceId :
                        product?.variations?.[1]?.id ?? product?.id,
                    product_clinic_price: product?.variations?.[0]?.price ?? product?.price,
                    clinic_price_id: multiVariantClinicProdut ?
                        multiVariantClinicProdut?.clinicPriceId :
                        product?.variations?.[0]?.id ?? product?.id,
                    bookingChoice: product?.bookingChoice ?? 'atourclinics',
                    variant_products_info: transformedData ?? undefined,
                    categorized_products: categorizedTreatments,
                    categoryName: product?.categories?.[0],
                }
            })
        }
    }, [categorizedTreatments, dispatch, product, transformedData]);

    return (
        <>
            <ProductHero />
            <WhyRejuve />
            <TreatmentNameIntro />
            <Form />
        </>
    )
}