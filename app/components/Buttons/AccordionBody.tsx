import { Field } from "formik";

export default function AccordionBody() {
    return (
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
    )
}