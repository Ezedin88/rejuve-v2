
import { ICategorizedTreatments } from "@/app/lib/definitions";
import CheckMenuContent from "./CheckMenuContent";

async function getProductsWithCategories() {
    const res = await fetch('https://rejuve.com/wp-json/wp/v2/custom/products-with-variations');
    const data = await await res.json();

    return data;
}

export default async function CheckMenuFormContent() {
    const productsWithCategories = await getProductsWithCategories();
    const category_to_display: string[] = ['IV Treatment', 'NAD+', 'Ad-Ons', 'Booster', 'Peptides'];

    const filtered_products = productsWithCategories && Object.keys(productsWithCategories)
        .sort((a, b) => {
            // Prioritize 'IV Treatment' at the start
            if (a === 'IV Treatment') return -1;
            if (b === 'IV Treatment') return 1;

            // Sort alphabetically for other categories
            return a.localeCompare(b);
        })
        .filter(category => category_to_display.includes(category))
        .reduce((obj: ICategorizedTreatments, category) => {
            obj[category] = productsWithCategories[category];
            return obj;
        }, {});

    return (
        <CheckMenuContent filteredProducts={filtered_products} />
    )
}
