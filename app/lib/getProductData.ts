async function getProductData(productSlug: string) {
    try {
        const res = await fetch(`https://rejuve.com/wp-json/wp/v2/custom/product-by-slug/${productSlug}`);
        return res.json();
    } catch (error) {
        console.log('error', error);
    }
}

async function getCategorizedProductData() {
    try {
        const res = await fetch('https://rejuve.com/wp-json/wp/v2/custom/products-with-variations');
        return res.json();
    } catch (error) {
        console.log('error', error);
    }
}

export { getProductData, getCategorizedProductData };