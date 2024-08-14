import AccordionBody from "@/app/components/Buttons/AccordionBody";
import AccordionHeader from "@/app/components/Buttons/AccordionHeader";
import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { useState } from "react";
import { useProductData } from "./reducers/productDetailContext";
import { ICategorizedTreatments, IInitialValues } from "@/app/lib/definitions";
import { Field, useFormikContext } from "formik";

export default function ChooseTreatment({ index }: { index: number }) {
    const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
    const [bookingChoice, setBookingChoice] = useState<'atourclinics' | 'housecall'>('atourclinics');
    const { productData } = useProductData();
    const { categorized_products = {} } = productData || {};
    const { values, setFieldValue } = useFormikContext<IInitialValues>() || {};
    const { userData } = values ?? {};
    const { line_items } = userData?.[index] ?? {};

    const category_to_display: string[] = ['IV Treatment', 'NAD+', 'Ad-Ons', 'Booster', 'Peptides'];
    const filtered_products = categorized_products && Object.keys(categorized_products)
        .sort((a, b) => {
            // Prioritize 'IV Treatment' at the start
            if (a === 'IV Treatment') return -1;
            if (b === 'IV Treatment') return 1;

            // Sort alphabetically for other categories
            return a.localeCompare(b);
        })
        .filter(category => category_to_display.includes(category))
        .reduce((obj: ICategorizedTreatments, category) => {
            obj[category] = categorized_products[category];
            return obj;
        }, {});

    const toggleCategory = (category: string) => {
        setOpenCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    return (
        <>
            <Text className="form-wrapper-title mt-[64px] mb-[28px] max-xls:mt-[49px] max-xsm:mt-[24px] max-xsm:mb-[28px]">Choose Treatments</Text>
            <div className="flex flex-col gap-[12px]">
                {
                    Object.entries(filtered_products)?.map(([category, products]) => (
                        <div key={category}>
                            <PrimaryFormWrapper className="grid-cols-1 items-center pt-[34.5px] pb-[31.5px] max-xsm:pt-[33.5px] max-xsm:pb-[32.5]">
                                <AccordionHeader
                                    index={index}
                                    title={category}
                                    isOpen={!!openCategories[category]}
                                    setIsOpen={() => toggleCategory(category)}
                                    line_items={line_items}
                                    setFieldValue={setFieldValue}
                                />
                                {openCategories[category] && // Show AccordionBody only if the category is open
                                    <AccordionBody index={index} products={products} category={category} />
                                }
                            </PrimaryFormWrapper>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
