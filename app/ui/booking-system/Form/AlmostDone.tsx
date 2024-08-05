import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

export default function AlmostDone() {
    const [otherTip, setOtherTip] = useState(0);
    const { setFieldValue } = useFormikContext();
    const tipData = [{
        tip: '5%',
        value: 5,
        name: 'tip'
    },
    {
        tip: '10%',
        value: 10,
        name: 'tip'
    },
    {
        tip: '15%',
        value: 15,
        name: 'tip'
    },
    {
        tip: '20%',
        value: 20,
        name: 'tip'
    }
    ]
    return (
        <>
            <Text className="form-wrapper-title">Almost Done</Text>
            <PrimaryFormWrapper className="grid-cols-2 gap-y-3">
                <div className="tip_radio_container flex flex-col gap-10 col-start-1 col-end-2 ">
                    <Text className="form-wrapper-title text-[16px] leading-[22px]">Tip</Text>
                    <div className="flex gap-22 justify-between">
                        {tipData.map((tip, index) => (
                            <div key={index} className="tip_radio_wrapper flex gap-2">
                                <div className="w-10 h-10">
                                    <Field
                                        type="radio"
                                        id={tip.tip}
                                        name={tip.name}
                                        value={String(tip.value)}
                                        className="primary-rounded-input p-[10.5px] border-primaryGreen border-[1px]"
                                    />
                                </div>
                                <label htmlFor={tip.tip}>{tip.tip}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tip_radio_wrapper col-start-3 col-end-1 flex flex-col gap-5">
                    <div className="other_wrapper flex gap-2">
                        <div className="w-10 h-10">
                            <Field
                                type="radio"
                                id="other"
                                name="tip"
                                value={String(otherTip)}
                                className="primary-rounded-input p-[10.5px] border-primaryGreen border-[1px]"
                            />
                        </div>
                        <label htmlFor={"other"}>Other</label>
                    </div>
                    <Field
                        type="input"
                        name="otherTip"
                        placeholder="Enter tip %"
                        className="primary-input-box"
                        value={otherTip}
                        onChange={(e: any) => {
                            const value = e.target.value;
                            setOtherTip(value);
                            setFieldValue('tip', value);
                        }}
                    />
                    <Text className="form-wrapper-title text-[16px] leading-[22px] font-semibold">Tip total: <span className="primaryGreen">$0</span></Text>
                </div>
            </PrimaryFormWrapper>
        </>
    )
}