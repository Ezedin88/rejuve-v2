import AccordionBody from "@/app/components/Buttons/AccordionBody";
import AccordionHeader from "@/app/components/Buttons/AccordionHeader";
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
                <AccordionHeader title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen &&
                    <AccordionBody />
                }
            </PrimaryFormWrapper>
        </>
    )
}