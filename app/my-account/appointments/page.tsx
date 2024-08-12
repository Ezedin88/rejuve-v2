'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AccountLayout from '../page';

const Appointments = () => {
  const router = useRouter();
  return (
    <AccountLayout>
      <div className="flex flex-col gap-9 w-full p-4 md:p-10 relative mt-8 sm:mt-0">
        <div className="flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex sm:hidden w-6 h-6 transform rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => router.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <h2 className="text-lg sm:text-5xl font-bold text-primaryDark">
            Appointments
          </h2>
        </div>
        <div className="flex flex-col gap-6 p-4 bg-lightGrayBg max-w-[712px] w-full">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between gap-6 items-center">
              <h2 className="text-lg text-primaryDark">Rejuve Clinic</h2>
              <p className="text-secondaryDark text-sm">23.03.2024</p>
            </div>
            <p className="w-full text-center text-[13px] text-secondaryDark">
              3077 North Park Way, San Diego, CA, USA
            </p>
          </div>

          <hr className="border-b border-horizontalLine" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-primaryDark">
                IV Therapy
              </h2>
              <div className="flex flex-col gap-4 bg-[#EAEAEA] rounded p-4">
                <div className="flex gap-4 justify-between items-center text-primaryDark">
                  <p>1x Hangover Fix</p>
                  <p className="font-bold">$185.00</p>
                </div>
                <div className="flex gap-4 justify-between items-center text-primaryDark">
                  <p>1x Anti-Acne</p>
                  <p className="font-bold">$250.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-primaryDark">
                Los Angeles Botox & Dysport
              </h2>
              <div className="flex flex-col gap-4 bg-[#EAEAEA] rounded p-4">
                <div className="flex gap-4 justify-between items-center text-primaryDark">
                  <p>1x Los Angeles Botox & Dysport</p>
                  <p className="font-bold">$185.00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center w-full">
              <div className="flex flex-col gap-3 max-w-[183px] flex-1">
                <h2 className="text-base font-semibold text-primaryDark">
                  Time
                </h2>
                <div className="flex flex-col gap-4 bg-[#EAEAEA] rounded p-4">
                  <p>10:30 AM</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full flex-1">
                <h2 className="text-base font-semibold text-primaryDark">
                  Provider
                </h2>
                <div className="flex flex-col gap-4 bg-[#EAEAEA] rounded p-4">
                  <p>Katie, LME (Licensed Master Esthetician)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Appointments;
