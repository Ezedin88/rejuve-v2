import { ICategorizedTreatments, ProductData } from "@/app/lib/definitions";
import getProductData, { getCategorizedProductData } from "@/app/lib/getProductData";
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
    const treatmentsData = getCategorizedProductData();
    const treatments: Promise<ICategorizedTreatments> = await Promise.resolve(treatmentsData);
    const categorizedTreatments = await Promise.resolve(treatments);
    return (
        <>
            <FormComponents product={product} categorizedTreatments={categorizedTreatments} />
        </>
    )
}