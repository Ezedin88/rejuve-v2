import ProductHero from "@/app/ui/booking-system/product-hero";
import WhyRejuve from "@/app/ui/booking-system/WhyRejuve";
import Form from "@/app/ui/booking-system/Form";
import { ProductData } from "@/app/lib/definitions";
import getProductData from "@/app/lib/getProductData";
import FormComponents from "@/app/ui/booking-system";

type Params = {
    params: {
        slug: string
    }
}

export default async function Page({ params }: Params) {
    const { slug } = params;
    const decodedSlug = decodeURIComponent(slug);
    const productData: Promise<ProductData> = getProductData(decodedSlug);
    const product = await Promise.resolve(productData);
    return (
        <>
            <FormComponents product={product} />
        </>
    )
}