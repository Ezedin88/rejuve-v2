'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
  });
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

        <div className="flex flex-col gap-9 w-full p-4 md:p-10 overflow-scroll max-w-[790px]">
          <h2 className="text-5xl font-bold text-primaryDark">Profile</h2>
          <div className="flex flex-col gap-4 py-10 justify-center w-full">
            <form className="flex flex-col gap-6 w-full p-8 rounded-lg bg-lightGrayBg">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="firstName"
                    className="text-sm text-primaryDark font-medium after:content-['*'] after:text-primaryGreen after:font-bold"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={userData.firstName || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        firstName: e.target.value,
                      })
                    }
                    placeholder="Enter your first name"
                    className="p-3 border border-horizontalLine hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="lastName"
                    className="text-sm text-primaryDark font-medium after:content-['*'] after:text-primaryGreen after:font-bold"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={userData.lastName || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        lastName: e.target.value,
                      })
                    }
                    placeholder="Enter your last name"
                    className="p-3 border border-horizontalLine hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="email"
                    className="text-sm text-primaryDark font-medium after:content-['*'] after:text-primaryGreen after:font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email address"
                    className="p-3 border border-horizontalLine hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="phone"
                    className="text-sm text-primaryDark font-medium after:content-['*'] after:text-primaryGreen after:font-bold"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={userData.phone || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="(123) 456-7890"
                    className="p-3 border border-horizontalLine hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="message"
                  className="text-sm text-primaryDark font-medium after:content-['*'] after:text-primaryGreen after:font-bold"
                >
                  Message
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    name="dob"
                    id="dob"
                    value={userData.dob || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        dob: e.target.value,
                      })
                    }
                    placeholder="05/04/1989"
                    className="p-3 border border-horizontalLine hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                    required
                  />
                  <div className="flex absolute top-[30%] w-4 h-4 right-10">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_298_55360)">
                        <path
                          d="M21.752 3.90625H2.25195C1.42353 3.90625 0.751953 4.60581 0.751953 5.46875V22.6562C0.751953 23.5192 1.42353 24.2188 2.25195 24.2188H21.752C22.5804 24.2188 23.252 23.5192 23.252 22.6562V5.46875C23.252 4.60581 22.5804 3.90625 21.752 3.90625Z"
                          stroke="#32c0cc"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.751953 10.1562H23.252"
                          stroke="#32c0cc"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.75195 6.25V0.78125"
                          stroke="#32c0cc"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.2539 6.25V0.78125"
                          stroke="#32c0cc"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_298_55360">
                          <rect width="24" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="flex bg-primaryGreen/40 px-6 py-3 w-fit text-primaryWhite rounded font-bold self-end"
              disabled
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
