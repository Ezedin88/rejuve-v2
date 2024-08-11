'use client';

import CreditCard from '@/app/components/CreditCard';
import AddCard from '@/app/components/Form/AddCard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AccountLayout from '../page';

const Billing = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const router = useRouter();
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
    <AccountLayout>
      {addModalOpen && <AddCard setAddModalOpen={setAddModalOpen} />}

      <div className="flex flex-col gap-4 w-full p-4 md:p-10 relative mt-8 mb-4 sm:mt-0">
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
            Billing
          </h2>
        </div>
        <div className="flex flex-col gap-4 py-10 justify-center bg-lightGrayBg max-w-[712px] w-full pl-4 md:pl-[180px]">
          <p className="text-secondaryDark text-sm text-left">Summary spent</p>
          <p className="w-full text-5xl text-primaryDark text-left font-bold">
            $ 1,560.00
          </p>
        </div>
        <h3 className="text-[32px] font-bold text-primaryDark">My cards</h3>
        <div className="flex gap-3 items-center flex-wrap w-full">
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
          className="flex items-center max-w-[470px] text-primaryGreen"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8497 4.7392C11.8497 4.30291 11.496 3.94922 11.0597 3.94922C10.6235 3.94922 10.2698 4.3029 10.2698 4.7392V10.2691H4.7399C4.30361 10.2691 3.94992 10.6228 3.94992 11.059C3.94992 11.4953 4.30361 11.849 4.7399 11.849H10.2698V17.3789C10.2698 17.8152 10.6235 18.1689 11.0597 18.1689C11.496 18.1689 11.8497 17.8152 11.8497 17.3789V11.849H17.3796C17.8159 11.849 18.1696 11.4953 18.1696 11.059C18.1696 10.6228 17.8159 10.2691 17.3796 10.2691H11.8497V4.7392Z"
              fill="#32C0CC"
            />
          </svg>
          <h3 className="font-semibold">Add Card</h3>
        </button>
      </div>
    </AccountLayout>
  );
};

export default Billing;
