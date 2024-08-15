import { SmallIcon } from "../Icons/Icon";
import { ILineItem } from "@/app/lib/definitions";

export default function AccordionHeader({
    title,
    isOpen,
    setIsOpen,
    index,
    setFieldValue,
    line_items,
    set_line_items,
    arrowBgColor
}: {
    index: number,
    title: string,
    isOpen: boolean,
    line_items: ILineItem[],
    set_line_items?: (line_items: ILineItem[]) => void,
    setFieldValue?: (field: string, value: any) => void,
    setIsOpen: () => void,
    arrowBgColor?: string
}) {
    return (
        <>
            <button onClick={(e) => { e.preventDefault(); setIsOpen() }} className='accordion-btn w-full flex'
                style={{ cursor: 'pointer' }}
            >
                <div className="accordion_title_wrapper flex gap-4 max-xsm:flex-wrap mx-auto w-full">
                    <p className="treatment_title w-[250px] max-xsm:w-auto my-auto text-nowrap text-left">Choose {title} {!title.includes('Treatment') && 'Treatment'}</p>
                    <div className="items_wrapper flex gap-4 flex-wrap">
                        {
                            line_items?.length > 0 &&
                            line_items?.map((item, idx: number) => {
                                // @ts-ignore
                                const parsedItem = !set_line_items ? JSON.parse(item) : item;
                                return (
                                    parsedItem?.categoryName && parsedItem?.categoryName === title &&
                                    <div key={idx} className="checked-items flex items-center gap-2">
                                        <p className="product_name">{parsedItem?.productName}</p>
                                        <SmallIcon icon="/closeIcon.svg" width={15} onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const newLineItems = line_items.filter((li, i) => {
                                                // @ts-ignore
                                                const parsedLi = !set_line_items ? JSON.parse(li) : li;
                                                return parsedLi.productName !== parsedItem.productName || i !== idx;
                                            });
                                            setFieldValue && setFieldValue(`userData.${index}.line_items`, newLineItems) ||
                                                set_line_items && set_line_items(newLineItems)
                                                ;
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
                            <div className={`absolute ${arrowBgColor ? "bg-" + "[" + arrowBgColor + "]" : "bg-lightGreen"} w-4 h-4 rotate-45 translate-y-1`}></div>
                        </div>
                        :
                        <div className="relative w-16 flex items-start">
                            <div className="absolute bg-primaryGreen w-4 h-4 rotate-45 translate-y-1"></div>
                            <div className={`absolute ${arrowBgColor ? "bg-" + "[" + arrowBgColor + "]" : "bg-lightGreen"} w-4 h-4 rotate-45`}></div>
                        </div>
                    }
                </div>
            </button>
        </>
    );
}
