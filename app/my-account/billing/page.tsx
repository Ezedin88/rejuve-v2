'use client';

import CreditCard from '@/app/components/CreditCard';
import AddCard from '@/app/components/Form/AddCard';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Billing = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const newCard = [
    {
      name: 'John Doe',
      number: '1234 5678 9012 3456',
      expiry: '12/24',
    },
    {
      name: 'Jane Doe',
      number: '1234 5678 9012 9012',
      expiry: '05/25',
    },
    {
      name: 'Smith Row',
      number: '1234 5678 9012 1234',
      expiry: '03/25',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {addModalOpen && <AddCard setAddModalOpen={setAddModalOpen} />}

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
            Billing
          </h2>
          <div className="flex flex-col gap-4 py-10 justify-center bg-lightGrayBg max-w-[712px] w-full pl-4 md:pl-[180px]">
            <p className="text-secondaryDark text-sm text-left">
              Summary spent
            </p>
            <p className="w-full text-5xl text-primaryDark text-left font-bold">
              $ 1,560.00
            </p>
          </div>
          <h3 className="text-[32px] font-bold text-primaryDark">My cards</h3>
          <div className="flex gap-5 items-center flex-wrap w-full">
            <div className="flex flex-col gap-3 max-w-[350px]">
              <div className="flex gap-2 items-center text-red-500 self-end">
                <p>Delete</p>
                <div className="w-3 h-3">
                  <Image
                    src={'/images/xMark.svg'}
                    width={10}
                    height={10}
                    quality={100}
                    alt="x mark"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CreditCard card={newCard[0]} />
            </div>
            <div className="flex flex-col gap-3 max-w-[350px]">
              <div className="flex gap-2 items-center text-red-500 self-end">
                <p>Delete</p>
                <div className="w-3 h-3">
                  <Image
                    src={'/images/xMark.svg'}
                    width={10}
                    height={10}
                    quality={100}
                    alt="x mark"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CreditCard card={newCard[1]} />
            </div>
            <div className="flex flex-col gap-3 max-w-[350px]">
              <div className="flex gap-2 items-center text-red-500 self-end">
                <p>Delete</p>
                <div className="w-3 h-3">
                  <Image
                    src={'/images/xMark.svg'}
                    width={10}
                    height={10}
                    quality={100}
                    alt="x mark"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CreditCard card={newCard[2]} />
            </div>
          </div>
          <hr className="border-b border-horizontalLine/50" />
          <button
            onClick={() => setAddModalOpen(true)}
            className="flex items-center justify-between max-w-[470px] text-primaryGreen"
          >
            <h3 className="font-semibold">Add Card</h3>
            <div className="w-5 h-5">
              <Image
                src={'/plus.svg'}
                width={20}
                height={20}
                alt="add card"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
