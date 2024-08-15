'use client';

import Image from 'next/image';
import Link from 'next/link';
import OrderCard from '../../components/OrderCard';
import { useRouter } from 'next/navigation';
import AccountLayout from '../AccountPage';

const Activity = () => {
  const router = useRouter();
  const orders = [
    {
      date: '23.03.2024',
      order: [
        {
          title: '1x Hangover Fix',
          price: 185,
        },
        {
          title: '2x Glucathione',
          price: 100,
        },
      ],
    },
    {
      date: '24.03.2024',
      order: [
        {
          title: '1x Hangover Fix',
          price: 185,
        },
        {
          title: '2x Glucathione',
          price: 100,
        },
      ],
    },
    {
      date: '25.03.2024',
      order: [
        {
          title: '1x Hangover Fix',
          price: 185,
        },
        {
          title: '2x Glucathione',
          price: 100,
        },
      ],
    },
    {
      date: '26.03.2024',
      order: [
        {
          title: '1x Hangover Fix',
          price: 185,
        },
        {
          title: '2x Glucathione',
          price: 100,
        },
      ],
    },
    {
      date: '27.03.2024',
      order: [
        {
          title: '1x Hangover Fix',
          price: 185,
        },
        {
          title: '2x Glucathione',
          price: 100,
        },
      ],
    },
  ];

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
            Activity
          </h2>
        </div>
        <OrderCard orders={orders} />
      </div>
    </AccountLayout>
  );
};

export default Activity;
