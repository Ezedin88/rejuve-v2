import { FieldArray, Form as FormikForm, useFormikContext } from 'formik';
import Image from 'next/image';
import UserDetails from './UserDetails';
import Text from '@/app/components/Buttons/Text';
import BookingTimeDatePreference from './BookingTimeDatePreference';
import ChooseLocation from './ChooseLocation';
import { IInitialValues } from '@/app/lib/definitions';
import { useMapApi } from './reducers/loadMapContext';
import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import ChooseTreatment from './ChooseTreatment';
import ChooseProvider from './ChooseProvider';
import AlmostDone from './AlmostDone';

export default function Form() {
  const { dispatch } = useMapApi();
  const handleLoadMapApi = () => {
    dispatch({ type: 'LOAD_MAP_API' });
  }
  const { values } = useFormikContext<IInitialValues>() || {};
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
  }, []);

  return (
    <FormikForm>
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

                  <button
                    type="button"
                    className="secondary bg-primaryGreen rounded-[5px] flex py-[10px] px-[20px] text-white gap-[10px] items-center justify-center text-[16px] font-semibold box-border w-[250px] h-[55px] max-sm:w-[302px] hover:bg-secondaryGreenHover active:bg-primaryGreen max-sm:mx-auto mt-[46px] mb-[56px] max-xls:my-[29px] max-sm:mt-[51px] max-sm:mb-[66px] "
                    onClick={() =>
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
    </FormikForm>
  );
}
