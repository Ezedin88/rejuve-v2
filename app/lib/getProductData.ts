export default async function getProductData(productSlug: string) {
    try {
        const res = await fetch(`https://rejuve.md/wp-json/wp/v2/custom/product-by-slug/${productSlug}`);
        return res.json();
    } catch (error) {
        console.log('error', error);
    }

}