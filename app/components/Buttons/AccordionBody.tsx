import { ClinicProduct, HouseProduct, IInitialValues, IProductTreatment, ITransformedProduct } from "@/app/lib/definitions";
import { useProductData } from "@/app/ui/booking-system/Form/reducers/productDetailContext";
import { transformProductInfo } from "@/app/utils/utils";
import { Field, useFormikContext } from "formik";
import { useCallback, useEffect } from "react";

export default function AccordionBody({ index, products, category }: { index: number, products: IProductTreatment[], category: string }) {
    const { setFieldValue, values } = useFormikContext<IInitialValues>();
    const { userData, bookingChoice } = values || {};
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    const radio_boxed_treatments = ['IV Treatment', 'NAD+'];
    const is_radio_boxed = radio_boxed_treatments.includes(category);

    const multiVariantProduct = products?.[0];
    const { variations } = multiVariantProduct || {};

    let transformedData: ITransformedProduct | null = null;
    const hasManyVariations = variations && variations?.length > 2;
    if (hasManyVariations) {
        transformedData = transformProductInfo(variations);
    }

    const isClinic = bookingChoice === 'atourclinics';
    const { productData } = useProductData();
    const { currently_selected_product } = productData || {};
    const { clinic_price_id, home_price_id, product_id, productPrice } = currently_selected_product || {};

    const handleCheckboxChange = (event: { target: { checked: boolean; }; },
        product: any, category: string) => {
        const { checked } = event.target;
        const { variations } = product ?? {};

        // Parse the current line items from Formik values
        const currentLineItems = values.userData?.[index]?.line_items?.map(item => JSON.parse(item.toString()));

        // Filter out items from the specified category
        const updatedLineItems = currentLineItems?.filter(item => {
            const isSameCategory = item.categoryName === category;
            return !isSameCategory;
        }) ?? [];

        if (is_radio_boxed && checked) {
            if (!hasManyVariations) {
                // Add the newly selected item
                updatedLineItems?.push({
                    product_id: product?.product_id,
                    productName: product?.name,
                    price: product?.price,
                    quantity: 1,
                    categoryName: category, // Add category information
                    variation_id: [{
                        type: 'atourclinics',
                        variant_id: variations?.[0]?.id ?? product?.product_id
                    }, {
                        type: 'housecall',
                        variant_id: variations?.[1]?.id ?? product?.product_id
                    }],
                });
            }

            if (hasManyVariations && bookingChoice === 'atourclinics') {
                if (checked) {
                    // Add the newly selected item
                    updatedLineItems.push({
                        product_id: products?.[0]?.product_id,
                        productName: product?.productName,
                        price: product?.product_clinic_price,
                        quantity: 1,
                        categoryName: category, // Add category information
                        variation_id: [{
                            type: 'atourclinics',
                            variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                        }, {
                            type: 'atourclinics',
                            variant_id: product?.clinicPriceId ?? products?.[0]?.product_id
                        }],
                    });
                }
            }

            if (hasManyVariations && bookingChoice === 'housecall') {
                if (checked) {
                    // Add the newly selected item
                    updatedLineItems.push({
                        product_id: products?.[0]?.product_id,
                        productName: product?.productName,
                        price: product?.product_home_price,
                        quantity: 1,
                        categoryName: category, // Add category information
                        variation_id: [{
                            type: 'housecall',
                            variant_id: product?.housePriceId ?? products?.[0]?.product_id
                        }, {
                            type: 'housecall',
                            variant_id: product?.housePriceId ?? products?.[0]?.product_id
                        }],
                    });
                }
            }

            if (!hasManyVariations && !is_radio_boxed && checked) {
                // Add the newly selected item
                updatedLineItems.push({
                    product_id: product?.product_id,
                    productName: product?.name,
                    price: product?.price,
                    quantity: 1,
                    category: category, // Add category information
                    variation_id: [{
                        type: 'atourclinics',
                        variant_id: !hasManyVariations ? variations?.[0]?.id : product?.product_id
                    }, {
                        type: 'housecall',
                        variant_id: !hasManyVariations ? variations?.[1]?.id : product?.product_id
                    }],
                });
            }
        }

        // Update Formik field value
        setFieldValue(`userData[${index}].line_items`, updatedLineItems?.map(item => JSON.stringify(item)));
    };




    return (
        <div className="accordion_data w-full px-10 max-xsm:px-0">
            <h1>line items</h1>
            {
                JSON.stringify(values.userData[index].line_items)
            }
            <div className="treatment_data grid grid-cols-2 gap-[62px] max-xls:gap-[61.5px] max-xsm:grid-cols-1 max-xsm:gap-[12px]">
                {
                    !hasManyVariations ?
                        sortedProducts?.map((product: IProductTreatment, i: number) => {
                            const { variations, price } = product ?? {};
                            const hasVariations = variations && variations?.length > 0 && variations?.length! > 2;
                            const clinic_price = hasVariations ? variations?.[0]?.price : price;
                            const house_price = hasVariations ? variations?.[1]?.price : price;
                            const clinic_id = hasVariations ? variations?.[0]?.id : product_id;
                            const house_id = hasVariations ? variations?.[1]?.id : product_id;
                            return (
                                <div className="name_price_wrapper flex justify-between" key={i}>
                                    <div className="name flex gap-2 items-center">
                                        <h1>{product?.product_id}</h1>
                                        {
                                            is_radio_boxed ? (
                                                <Field
                                                    type='checkbox'
                                                    name={`userData[${index}].line_items`}
                                                    value={JSON.stringify({
                                                        product_id: product?.product_id,
                                                        productName: product?.name,
                                                        price: product?.price,
                                                        quantity: 1,
                                                        variation_id: [{
                                                            type: 'atourclinics',
                                                            variant_id: clinic_id
                                                        }, {
                                                            type: 'housecall',
                                                            variant_id: house_id
                                                        }],
                                                        categoryName: category
                                                    })}
                                                    id={`product-${i}`}
                                                    className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                    checked={values.userData[index].line_items?.some((item: any) => {
                                                        const parsedItem = JSON.parse(item);
                                                        return parsedItem.product_id === product?.product_id;
                                                    })}
                                                    onChange={(e: any) => handleCheckboxChange(e, product, category)}
                                                />
                                            ) : (
                                                <Field
                                                    type='checkbox'
                                                    name={`userData[${index}].line_items`}
                                                    value={JSON.stringify({
                                                        product_id: product?.product_id,
                                                        productName: product?.name,
                                                        price: product?.price,
                                                        quantity: 1,
                                                        variation_id: [{
                                                            type: 'atourclinics',
                                                            variant_id: clinic_id
                                                        }, {
                                                            type: 'housecall',
                                                            variant_id: house_id
                                                        }],
                                                        categoryName: category
                                                    })}
                                                    id={`product-${i}`}
                                                    className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                />
                                            )
                                        }

                                        <label htmlFor={`product-${i}`} className="product_name">{product?.name}</label>
                                    </div>
                                    <div className="price flex items-center">
                                        <p>${isClinic ? clinic_price ?? price : house_price ?? price}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        bookingChoice === 'atourclinics' ?
                            transformedData?.clinicProducts?.map((product: ClinicProduct, i: number) => {
                                return (
                                    <div className="name_price_wrapper flex justify-between" key={i}>
                                        <div className="name flex gap-2 items-center">
                                            <h1>{product?.clinicPriceId}</h1>
                                            {
                                                is_radio_boxed ? (
                                                    <Field
                                                        type='checkbox'
                                                        name={`userData[${index}].line_items`}
                                                        value={JSON.stringify({
                                                            product_id: products?.[0]?.product_id,
                                                            productName: product?.productName,
                                                            price: product?.clinicPriceId,
                                                            quantity: 1,
                                                            variation_id: [{
                                                                type: 'atourclinics',
                                                                variant_id: product?.clinicPriceId
                                                            }, {
                                                                type: 'atourclinics',
                                                                variant_id: product?.clinicPriceId
                                                            }],
                                                            categoryName: category
                                                        })}
                                                        id={`product-${i}`}
                                                        className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                        checked={values.userData[index].line_items?.some((item: any) => {
                                                            const parsedItem = JSON.parse(item);
                                                            return parsedItem?.variation_id?.[0]?.variant_id === product?.clinicPriceId;
                                                        })}
                                                        onChange={(e: any) => handleCheckboxChange(e, product, category)}
                                                    />
                                                ) : (
                                                    <Field
                                                        type='checkbox'
                                                        name={`userData[${index}].line_items`}
                                                        value={JSON.stringify({
                                                            product_id: products?.[0]?.product_id,
                                                            productName: product?.productName,
                                                            price: product?.product_clinic_price,
                                                            quantity: 1,
                                                            variation_id: [{
                                                                type: 'atourclinics',
                                                                variant_id: product?.clinicPriceId
                                                            }, {
                                                                type: 'housecall',
                                                                variant_id: product?.clinicPriceId
                                                            }],
                                                            categoryName: category,
                                                        })}
                                                        id={`product-${i}`}
                                                        className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                    />
                                                )
                                            }

                                            <label htmlFor={`product-${i}`} className="product_name">{product?.productName}</label>
                                        </div>
                                        <div className="price flex items-center">
                                            <p>${product?.product_clinic_price}</p>
                                        </div>
                                    </div>
                                )
                            }) : transformedData?.houseProducts?.map((product: HouseProduct, i: number) => {
                                return (
                                    <div className="name_price_wrapper flex justify-between" key={i}>
                                        <div className="name flex gap-2 items-center">
                                            <h1>{product?.housePriceId}</h1>
                                            {
                                                is_radio_boxed ? (
                                                    <Field
                                                        type='checkbox'
                                                        name={`userData[${index}].line_items`}
                                                        value={JSON.stringify({
                                                            product_id: products?.[0]?.product_id,
                                                            productName: product?.productName,
                                                            price: product?.housePriceId,
                                                            quantity: 1,
                                                            variation_id: [{
                                                                type: 'atourclinics',
                                                                variant_id: product?.housePriceId
                                                            }, {
                                                                type: 'atourclinics',
                                                                variant_id: product?.housePriceId
                                                            }],
                                                            categoryName: category
                                                        })}
                                                        id={`product-${i}`}
                                                        className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                        checked={values.userData[index].line_items?.some((item: any) => {
                                                            const parsedItem = JSON.parse(item);
                                                            return parsedItem?.variation_id?.[0]?.variant_id === product?.housePriceId;
                                                        })}
                                                        onChange={(e: any) => handleCheckboxChange(e, product, category)}
                                                    />
                                                ) : (
                                                    <Field
                                                        type='checkbox'
                                                        name={`userData[${index}].line_items`}
                                                        value={JSON.stringify({
                                                            product_id: products?.[0]?.product_id,
                                                            productName: product?.productName,
                                                            price: product?.product_home_price,
                                                            quantity: 1,
                                                            variation_id: [{
                                                                type: 'atourclinics',
                                                                variant_id: product?.housePriceId
                                                            }, {
                                                                type: 'housecall',
                                                                variant_id: product?.housePriceId
                                                            }],
                                                            categoryName: category
                                                        })}
                                                        id={`product-${i}`}
                                                        className={`primary-rounded-input p-2 ${!is_radio_boxed && 'rounded-none before:rounded-none'} checked:border-placeholderText border-placeholderText`}
                                                    />
                                                )
                                            }

                                            <label htmlFor={`product-${i}`} className="product_name">{product?.productName}</label>
                                        </div>
                                        <div className="price flex items-center">
                                            <p>${product?.product_home_price}</p>
                                        </div>
                                    </div>
                                )
                            })
                }
            </div>
        </div>
    );
}
