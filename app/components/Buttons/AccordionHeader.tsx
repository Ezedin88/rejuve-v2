import { SmallIcon } from "../Icons/Icon";

export default function AccordionHeader({
    title,
    isOpen,
    setIsOpen
}: {
    title: string,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}
) {
    return (
        <>
            <button onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen) }} className='accordion-btn w-full flex'
                style={{ cursor: 'pointer' }}
            >
                <div className="accordion_title_wrapper flex gap-4 max-xsm:flex-wrap mx-auto w-full">
                    <p className="treatment_title w-[250px] max-xsm:w-auto my-auto text-nowrap">Choose {title} Treatment</p>
                    <div className="items_wrapper flex gap-4 flex-wrap">
                        <div className="checked-items flex items-center gap-2"><p className="product_name">item1</p><SmallIcon icon="/closeIcon.svg" width={15} /></div>
                    </div>
                </div>
                <div className="accordion_arrows flex items-center">
                    {isOpen ? <div className="relative w-16 flex items-center">
                        <div className="absolute bg-primaryGreen  
                            w-4 h-4 rotate-45">
                        </div>
                        <div className="absolute bg-lightGreen w-4  
                            h-4 rotate-45 translate-y-1">
                        </div>
                    </div> : <div className="relative w-16 flex items-start">
                        <div className="absolute bg-primaryGreen  
                            w-4 h-4 rotate-45 translate-y-1">
                        </div>
                        <div className="absolute bg-lightGreen w-4  
                            h-4 rotate-45">
                        </div>
                    </div>
                    }
                </div>
            </button>
        </>
    )
}