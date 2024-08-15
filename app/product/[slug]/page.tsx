import { ICategorizedTreatments, ProductData } from "@/app/lib/definitions";
import { getProductData, getCategorizedProductData } from "@/app/lib/getProductData";
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

    const treatmentsData: Promise<ICategorizedTreatments> = getCategorizedProductData();
    const categorizedTreatments = await Promise.resolve(treatmentsData);
    return (
        <>
            <FormComponents product={product} categorizedTreatments={categorizedTreatments} slug={decodedSlug} />
        </>
    )
}