import Text from "@/app/components/Buttons/Text";
import PrimaryFormWrapper from "@/app/components/Form/PrimaryFormWrapper";
import { Field } from "formik";
import Link from "next/link";


export default function Agreement() {
    return (
        <PrimaryFormWrapper className="bg-white grid-cols-1 gap-y-2 pl-0 ml-0">
            <AgreementFields FieldContent={
                <Field type="checkbox" className="primary-rounded-input rounded-none before:rounded-none h-[20px]" id="policies" name="policy" value="housecall" required />
            }
                LableContent={
                    <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">
                        I agree to the
                        <SpanLink>ToS</SpanLink>,
                        <SpanLink>Privacy Policy</SpanLink>,
                        <SpanLink>Consent To Treat</SpanLink>, and &nbsp;
                        <SpanLink>Cancellation Policy *</SpanLink>
                    </Text>
                }
                htmlFor="policies"
            />

            <AgreementFields
                FieldContent={
                    <Field type="checkbox" className="primary-rounded-input rounded-none before:rounded-none h-[20px]" id="exclusiveOffers" name="recieveExclusiveOffers" />
                }
                LableContent={
                    <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">
                        Sign-up to receiving exclusive offers and service updates! <span className="font-semibold">(recommended)</span>
                    </Text>
                }
                htmlFor="exclusiveOffers"
            />

            <AgreementFields
                FieldContent={
                    <Field type="checkbox" className="primary-rounded-input rounded-none before:rounded-none h-[20px]" id="createAccount" name="createAccount" />
                }
                LableContent={
                    <Text className="primary-input-label cursor-pointer text-lightSecondaryDark">
                        Create an account for me and send me secure login details to my e-mail. <span className="font-semibold">(recommended)</span>
                    </Text>
                }
                htmlFor="createAccount"
            />

        </PrimaryFormWrapper >
    );
}

const AgreementFields = (
    { FieldContent, LableContent, htmlFor }: { FieldContent: JSX.Element; LableContent: JSX.Element; htmlFor: string }
) => {
    return (
        <div className="primary-input-box border-white bg-white flex  overflow-clip pr-10 pl-0 max-w-full w-full 
              max-w-[100%]
              max-xls:max-w-[100%]
              max-sm:max-w-[100%] max-xsm:max-w-[100%%]
              max-xls:w-[100%]">
            <div className="flex items-center h-full">
                {FieldContent}
            </div>
            <label htmlFor={`${htmlFor}`} className="text-ellipsis overflow-clip max-w-full">
                {LableContent}
            </label>
        </div>
    );
};

const SpanLink = ({ children }: { children: string }) => {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <span className="text-primaryGreen" onClick={handleClick}>
            <Link href="#" className="cursor-default">{children}</Link>
        </span>
    );
};
