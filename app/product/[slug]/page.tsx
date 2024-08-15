import Faq from "@/app/components/Faq";
import FooterHero from "@/app/components/FooterHero";
import { getFaqData } from "@/app/lib/client";
import { ICategorizedTreatments, ProductData } from "@/app/lib/definitions";
import { getProductData, getCategorizedProductData } from "@/app/lib/getProductData";
import FormComponents from "@/app/ui/booking-system";

type Params = {
    params: {
        slug: string
    }
}

export interface IFaqDetail {
    faq_detail: {
        choose_product_category: string[];
        faq_list: {
            question: string;
            answer: string;
        }[]
    }
}[]

export default async function Page({ params }: Params) {
    const { slug } = params;
    const decodedSlug = decodeURIComponent(slug);
    const productData: Promise<ProductData> = getProductData(decodedSlug);
    const product = await Promise.resolve(productData);

    const treatmentsData: Promise<ICategorizedTreatments> = getCategorizedProductData();
    const categorizedTreatments = await Promise.resolve(treatmentsData);

    const faqData = await getFaqData();
    // get faq detail data only for the current product category
    const faqForCurrentProduct = faqData.filter((faq) => faq.faq_detail.choose_product_category.includes(
        product?.categories?.map((category) => category).join(',')
    ));

    return (
        <>
            <FormComponents product={product} categorizedTreatments={categorizedTreatments} slug={decodedSlug} />
            <Faq faqData={faqForCurrentProduct} />
            <FooterHero />
        </>
    )
}