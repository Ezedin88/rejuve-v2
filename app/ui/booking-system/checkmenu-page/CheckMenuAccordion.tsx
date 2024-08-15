import Text from "@/app/components/Buttons/Text";
import { ILineItem, IProductTreatment, ITransformedProduct } from "@/app/lib/definitions";
import { transformProductInfo } from "@/app/utils/utils";

export default function CheckMenuAccordion({ products, setLineItems, category, lineItems, bookingChoice }: {
    lineItems: any;
    setLineItems: any;
    category: string;
    products: IProductTreatment[];
    bookingChoice: 'atourclinics' | 'housecall';
}) {
    const isClinic = bookingChoice === 'atourclinics';

    const radio_boxed_treatments = ['IV Treatment', 'NAD+'];

    const multiVariantProduct = products?.[0];
    const { variations } = multiVariantProduct || {};

    let transformedData: ITransformedProduct | null = null;
    const hasManyVariations = variations && variations?.length > 2;
    if (hasManyVariations) {
        transformedData = transformProductInfo(variations);
    }

    const item = [
        {
            "product_id": 543, "name": "Migraine and Pain", "price": "185", "slug": "migraine-and-pain", "permalink": "https://rejuve.com/product/migraine-and-pain/",
            "variations": [{ "id": 691, "name": "Migraine and Pain - Clinic", "price": "185", "permalink": "https://rejuve.com/product/migraine-and-pain/?attribute_type=Clinic", "image": "https://rejuve.com/wp-content/uploads/2024/03/Migraine-Pain-Side.png" }, { "id": 692, "name": "Migraine and Pain - House", "price": "285", "permalink": "https://rejuve.com/product/migraine-and-pain/?attribute_type=House", "image": "https://rejuve.com/wp-content/uploads/2024/03/Migraine-Pain-Side.png" }]
        }];

    const checkBoxHandler = (product: IProductTreatment) => {
        let newLineItems = [...lineItems];
        let lineItemIndex = newLineItems.findIndex((lineItem: IProductTreatment) => lineItem.product_id === product.product_id);
        if (lineItemIndex !== -1) {
            newLineItems.splice(lineItemIndex, 1);
        } else if (!hasManyVariations) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'atourclinics',
                    product_clinic_price: variations?.[0]?.price ?? product?.price,
                    variant_id: variations?.[0]?.id ?? product?.product_id
                }, {
                    type: 'housecall',
                    product_home_price: variations?.[1]?.price ?? product?.price,
                    variant_id: variations?.[1]?.id ?? product?.product_id
                }]
            });
        } else if (hasManyVariations && isClinic) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'atourclinics',
                    // @ts-ignore
                    product_clinic_price: product?.clinicPriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                }, {
                    type: 'atourclinics',
                    // @ts-ignore
                    product_clinic_price: product?.clinicPriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                }],
            });
        } else if (hasManyVariations && !isClinic) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'housecall',
                    // @ts-ignore
                    product_clinic_price: product?.housePriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.housePriceId ?? products?.[0]?.product_id
                }, {
                    type: 'housecall',
                    // @ts-ignore
                    product_clinic_price: product?.housePriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.housePriceId ?? products?.[0]?.product_id
                }],
            });
        }
        setLineItems(newLineItems);
    }

    const radioBoxHandler = (product: IProductTreatment) => {
        // Filter out all items of the current product's category
        let newLineItems = lineItems.filter((lineItem: ILineItem) => lineItem.categoryName !== category);


        if (!hasManyVariations) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'atourclinics',
                    product_clinic_price: variations?.[0]?.price ?? product?.price,
                    variant_id: variations?.[0]?.id ?? product?.product_id
                }, {
                    type: 'housecall',
                    product_home_price: variations?.[1]?.price ?? product?.price,
                    variant_id: variations?.[1]?.id ?? product?.product_id
                }],
            })
        } else if (hasManyVariations && isClinic) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'atourclinics',
                    // @ts-ignore
                    product_clinic_price: product?.clinicPriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                }, {
                    type: 'atourclinics',
                    // @ts-ignore
                    product_clinic_price: product?.clinicPriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                }],
            });
        } else if (hasManyVariations && !isClinic) {
            newLineItems.push({
                product_id: product.product_id,
                productName: product.name,
                price: product?.price,
                quantity: 1,
                categoryName: category,
                variation_id: [{
                    type: 'housecall',
                    // @ts-ignore
                    product_clinic_price: product?.housePriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.housePriceId ?? products?.[0]?.product_id
                }, {
                    type: 'housecall',
                    // @ts-ignore
                    product_clinic_price: product?.housePriceId ?? products?.[0]?.product_id,
                    // @ts-ignore
                    variant_id: product?.housePriceId ?? products?.[0]?.product_id
                }],
            });
        }

        // Update the state with the new array
        setLineItems(newLineItems);
    }

    return (
        <>
            <div className="price_item_wrapper grid gap-y-[24px]">
                {
                    products?.map((product: IProductTreatment) => {
                        const isRadioBoxed = radio_boxed_treatments.includes(category);
                        const { variations: dualVariant } = product ?? {};
                        return (
                            <div key={product?.product_id} className="price_item grid grid-cols-2">
                                <div className="price_item_title flex gap-2 items-center">
                                    <input type={
                                        isRadioBoxed ? 'radio' : 'checkbox'
                                    } name="product" value={product?.product_id} className={`primary-rounded-input h-5 ${!isRadioBoxed && ' rounded-none'} border-footerGray`} onChange={() => isRadioBoxed ? radioBoxHandler(product) : checkBoxHandler(product)}
                                        checked={lineItems.some((lineItem: ILineItem) => Number(lineItem.product_id) === Number(product.product_id))}
                                    />
                                    <Text className="text-[32px]">{product?.name}</Text>
                                </div>
                                <div className="price_item_price  text-right">
                                    <Text className="text-primaryGreen text-[32px]">${isClinic ? dualVariant?.[0]?.price ?? product?.price : dualVariant?.[1]?.price ?? product?.price}</Text>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}