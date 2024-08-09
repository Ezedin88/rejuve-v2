'use client';

import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex pt-20 overflow-auto min-h-screen">
        <div className="flex flex-col max-w-[96px] md:max-w-[200px] xls:max-w-[380px] bg-lightGrayBg justify-start py-16 pl-2 xls:px-16 w-full sticky top-0 left-0">
          <Link
            href="/my-account"
            className="flex gap-[18px] items-center w-full hover:bg-lighterGray active:bg-lighterGray p-4 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6">
              <Image
                src={'/blood-drop 1.svg'}
                width={24}
                height={24}
                quality={100}
                alt="activity"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[18px] font-medium hidden md:flex">
              Activity
            </span>
          </Link>
          <Link
            href="/my-account/appointments"
            className="flex gap-[18px] items-center w-full hover:bg-lighterGray active:bg-lighterGray p-4 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6">
              <Image
                src={'/calendar.svg'}
                width={24}
                height={24}
                quality={100}
                alt="calendar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[18px] font-medium hidden md:flex">
              Appointments
            </span>
          </Link>
          <Link
            href="/my-account/billing"
            className="flex gap-[18px] items-center w-full hover:bg-lighterGray active:bg-lighterGray p-4 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6">
              <Image
                src={'/money-wallet.svg'}
                width={24}
                height={24}
                quality={100}
                alt="wallet"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[18px] font-medium hidden md:flex">
              Billing
            </span>
          </Link>
          <Link
            href="/my-account/profile"
            className="flex gap-[18px] items-center w-full hover:bg-lighterGray active:bg-lighterGray p-4 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6">
              <Image
                src={'/single-man.svg'}
                width={24}
                height={24}
                quality={100}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[18px] font-medium hidden md:flex">
              Profile
            </span>
          </Link>
          <button
            onClick={() => console.log('logout')}
            className="flex gap-[18px] items-center w-full p-4 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6">
              <Image
                src={'/log-out.svg'}
                width={24}
                height={24}
                quality={100}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[18px] font-medium text-primaryGreen hidden md:flex">
              Logout
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-9 w-full p-4 md:p-10 overflow-scroll">
          <h2 className="text-2xl md:text-5xl font-bold text-primaryDark">
            Appointments
          </h2>
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
      </div>
    </div>
  );
};

export default page;
