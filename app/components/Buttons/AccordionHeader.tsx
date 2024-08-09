import { useFormikContext } from "formik";
import { SmallIcon } from "../Icons/Icon";
import { IInitialValues } from "@/app/lib/definitions";

export default function AccordionHeader({
    title,
    isOpen,
    setIsOpen,
    index
}: {
    index: number,
    title: string,
    isOpen: boolean,
    setIsOpen: () => void
}) {
    const { values, setFieldValue } = useFormikContext<IInitialValues>() || {};
    const { userData } = values ?? {};
    const { line_items } = userData?.[index] ?? {};
    return (
        <>
            <button onClick={(e) => { e.preventDefault(); setIsOpen() }} className='accordion-btn w-full flex'
                style={{ cursor: 'pointer' }}
            >
                <div className="accordion_title_wrapper flex gap-4 max-xsm:flex-wrap mx-auto w-full">
                    <p className="treatment_title w-[250px] max-xsm:w-auto my-auto text-nowrap">Choose {title} {!title.includes('Treatment') && 'Treatment'}</p>
                    <div className="items_wrapper flex gap-4 flex-wrap">
                        {/* <div className="checked-items flex items-center gap-2"><p className="product_name">item1</p><SmallIcon icon="/closeIcon.svg" width={15} /></div> */}
                        {
                            line_items?.length > 0 &&
                            line_items?.map((item, index) => {
                                // @ts-ignore
                                const parsedItem = JSON.parse(item);
                                return (
                                    <div key={index} className="checked-items flex items-center gap-2">
                                        <p className="product_name">{parsedItem?.productName}</p>
                                        <SmallIcon icon="/closeIcon.svg" width={15} onClick={(e) => {
                                            e.stopPropagation();
                                            const newLineItems = line_items.filter((_, i) => i !== index);
                                            setFieldValue(`userData.${index}.line_items`, newLineItems);
                                        }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="accordion_arrows flex items-center">
                    {isOpen ?
                        <div className="relative w-16 flex items-center">
                            <div className="absolute bg-primaryGreen w-4 h-4 rotate-45"></div>
                            <div className="absolute bg-lightGreen w-4 h-4 rotate-45 translate-y-1"></div>
                        </div>
                        :
                        <div className="relative w-16 flex items-start">
                            <div className="absolute bg-primaryGreen w-4 h-4 rotate-45 translate-y-1"></div>
                            <div className="absolute bg-lightGreen w-4 h-4 rotate-45"></div>
                        </div>
                    }
                </div>
            </button>
        </>
    );
}
