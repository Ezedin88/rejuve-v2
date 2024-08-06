import { BaseProduct, ClinicProduct, HouseProduct, ITransformedProduct, Variation } from "../lib/definitions";

export const transformProductInfo = (variantProducts: Variation[]): ITransformedProduct => {
    const houseProducts: HouseProduct[] = [];
    const clinicProducts: ClinicProduct[] = [];

    variantProducts.forEach(product => {
        const url = new URL(product.permalink);
        const queryParams = new URLSearchParams(url.search);
        const attributeProduct = queryParams.get('attribute_product');
        const attributeType = queryParams.get('attribute_type');

        const productName = decodeURIComponent(attributeProduct ?? '').replace(/\+/g, ' ');

        const productData: BaseProduct = {
            productName: productName,
            image: product.image,
        };

        if (attributeType === 'House') {
            houseProducts.push({
                ...productData,
                housePriceId: product.id,
                product_home_price: Number(product.price)
            });
        } else if (attributeType === 'Clinic') {
            clinicProducts.push({
                ...productData,
                product_clinic_price: Number(product.price)
            });
        }
    });

    return {
        houseProducts,
        clinicProducts
    };
}
