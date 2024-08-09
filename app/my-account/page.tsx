'use client';

import Image from 'next/image';
import Link from 'next/link';
import OrderCard from '../components/OrderCard';

const page = () => {
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
    <>
      <div className="flex min-h-screen pt-20 overflow-auto">
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
        <div className="flex flex-col gap-9 w-full p-4 md:p-10 relative">
          <h2 className="text-5xl font-bold text-primaryDark">Activity</h2>
          <OrderCard orders={orders} />
        </div>
      </div>
    </>
  );
};

export default page;
