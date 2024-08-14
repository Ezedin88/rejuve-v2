import { FieldArray, Form as FormikForm, useFormikContext } from 'formik';
import Image from 'next/image';
import UserDetails from './UserDetails';
import Text from '@/app/components/Buttons/Text';
import BookingTimeDatePreference from './BookingTimeDatePreference';
import ChooseLocation from './ChooseLocation';
import { IInitialValues } from '@/app/lib/definitions';
import { useMapApi } from './reducers/loadMapContext';
import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import ChooseTreatment from './ChooseTreatment';
import ChooseProvider from './ChooseProvider';
import AlmostDone from './AlmostDone';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import SpecialInstructions from './SpecialInstructions';
import Agreement from './Agreement';
import BookBtn from '@/app/components/Buttons/book-btn';
import { SmallIcon } from '@/app/components/Icons/Icon';
import { set } from 'react-datepicker/dist/date_utils';

export default function Form() {
  const [hasErrors, setHasErrors] = useState(false);
  const { dispatch } = useMapApi();
  const handleLoadMapApi = () => {
    dispatch({ type: 'LOAD_MAP_API' });
  }
  const { values, errors, setFieldValue } = useFormikContext<IInitialValues>() || {};

  const { userData: user_data_errors } = errors ?? {};

  const noUserDataErrors =
    !user_data_errors ||
    Object.keys(user_data_errors).length === 0;

  useEffect(() => {
    if (!noUserDataErrors) {
      setHasErrors(false);
    }
  }, [noUserDataErrors]);

  const { userData } = values || {};

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      version: 'weekly',
      libraries: ['places'],
    });
    loader.load().then(() => {
      handleLoadMapApi();
    });

    // get bookingChoice from localStorage
    const bookingChoice = localStorage.getItem('bookingChoice') as 'atourclinics' | 'housecall' | null;
    const isChoiceClinic = bookingChoice === 'atourclinics';
    const localLineItems = localStorage.getItem('lineItems');
    if (bookingChoice) {
      setFieldValue('bookingChoice', bookingChoice);
      if (isChoiceClinic) {
        setFieldValue('clinicChoice', '15301 Ventura Blvd U2 Sherman Oaks CA 91403');
      } else {
        setFieldValue('clinicChoice', '');
      }
    }

    if (localLineItems) {
      const itemsFromLocalStorage = JSON.parse(localLineItems);
      const formattedLineItems = Array.isArray(itemsFromLocalStorage) && itemsFromLocalStorage?.map(items => JSON.stringify(items));
      setFieldValue('userData[0].line_items', formattedLineItems);
    }

    localStorage.removeItem('lineItems');
    localStorage.removeItem('bookingChoice');
  }, []);

  return (
    <FormikForm className='mb-[157px] max-xls:mb-[125px] max-xsm:mb-[137px]'>
      <FieldArray name="userData">
        {({ remove, push }) => (
          <>
            {userData.length > 0 &&
              userData.map((_user, index) => (
                <div key={index}>
                  {index > 0 && (
                    // remove user button
                    <div className="more_user_wrapper flex justify-between">
                      <div className="col">
                        <Text className="text-[14px] font-semibold">
                          Person {index + 1}
                        </Text>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary secondary bg-transparent border-2 border-red-400 hover:border-red-500 rounded-[5px] flex gap-[10px] items-center justify-center text-[16px] font-semibold box-border w-[150px] h-[45px] max-sm:w-[150px]
                                                            active:border-red-400
                                                            text-red-400 hover:text-red-500 active-text-red-300
                                                            "
                          onClick={() => remove(index)}
                        >
                          <Text className="text-[14px]">Delete Person {index + 1}</Text>
                        </button>
                      </div>
                    </div>
                  )
                  }
                  <UserDetails remove={remove} index={index} />
                  {index === 0 ? <ChooseLocation /> : null}
                  <ChooseTreatment index={index} />
                  {
                    hasErrors &&
                    <div className="warning_info_wrapper flex gap-3 mt-3 text-footerGrayText text-[16px]">
                      <SmallIcon icon='/info_icon.svg' width={20} />
                      <Text>Please fill your information before adding another person.</Text>
                    </div>
                  }
                  <button
                    type="button"
                    className="secondary bg-primaryGreen rounded-[5px] flex py-[10px] px-[20px] text-white gap-[10px] items-center justify-center text-[16px] font-semibold box-border w-[250px] h-[55px] max-sm:w-[302px] hover:bg-secondaryGreenHover active:bg-primaryGreen max-sm:mx-auto mt-[46px] mb-[56px] max-xls:my-[29px] max-sm:mt-[51px] max-sm:mb-[66px] "
                    onClick={() => {
                      if (!noUserDataErrors) {
                        setHasErrors(true);
                        return;
                      }
                      if (noUserDataErrors) {
                        push({
                          billing: {
                            first_name: '',
                            last_name: '',
                            email: '',
                            phone: '',
                            dateOfBirth: '',
                            line_items: [{}],
                          },
                        })
                      }
                    }
                    }
                  >
                    <Image
                      src="/person.png"
                      alt="person"
                      width={15}
                      height={20}
                    />
                    <Text>Add another person</Text>
                  </button>
                </div>
              ))}
          </>
        )}
      </FieldArray>

      <ChooseProvider />
      <BookingTimeDatePreference />
      <AlmostDone />
      <OrderSummary />
      <PaymentMethod />
      <SpecialInstructions />
      <Agreement />
      <BookBtn type='submit'>
        <Text className='flex items-center gap-2'>
          <SmallIcon icon='/lock_icon.svg' height={15} width={15} />
          Book and Pay
        </Text>
      </BookBtn>
    </FormikForm>
  );
}
