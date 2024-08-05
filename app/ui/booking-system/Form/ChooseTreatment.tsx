import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { SmallIcon } from "@/app/components/Icons/Icon";
import { Field } from "formik";
import { useState } from "react";

export default function ChooseTreatment({ title }: { title: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Text className="form-wrapper-title">Choose Treatments</Text>
            <PrimaryFormWrapper className="grid-cols-1 items-center pt-[34.5px] pb-[31.5px] max-xsm:pt-[33.5px] max-xsm:pb-[32.5]">
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
                {isOpen &&
                    <div className="accordion_data w-full px-10 max-xsm:px-0">
                        <div className="treatment_data grid grid-cols-2 gap-[62px] max-xls:gap-[61.5px] max-xsm:grid-cols-1 max-xsm:gap-[12px]">
                            <div className="name_price_wrapper flex justify-between">
                                <div className="name flex gap-2 items-center">
                                    <Field type="checkbox" name="treatment" value="item1" id="item1" className="primary-rounded-input p-2 rounded-none before:rounded-none checked:border-placeholderText border-placeholderText" />
                                    <label htmlFor="item1" className="product_name">item1</label>
                                </div>
                                <div className="price flex items-center">
                                    <p>$250</p>
                                </div>
                            </div>
                            <div className="name_price_wrapper flex justify-between">
                                <div className="name flex gap-2">
                                    <Field type="checkbox" name="treatment" value="item1" id="item1" />
                                    <label htmlFor="item1" className="product_name">item1</label>
                                </div>
                                <div className="price flex items-center">
                                    <p>$250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </PrimaryFormWrapper>
        </>
    )
}