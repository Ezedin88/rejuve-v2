'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AccountLayout from '../page';

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
  });
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
            Profile
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center w-full">
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
                    <g clipPath="url(#clip0_298_55360)">
                      <path
                        d="M21.752 3.90625H2.25195C1.42353 3.90625 0.751953 4.60581 0.751953 5.46875V22.6562C0.751953 23.5192 1.42353 24.2188 2.25195 24.2188H21.752C22.5804 24.2188 23.252 23.5192 23.252 22.6562V5.46875C23.252 4.60581 22.5804 3.90625 21.752 3.90625Z"
                        stroke="#32c0cc"
                        stroke-width="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.751953 10.1562H23.252"
                        stroke="#32c0cc"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75195 6.25V0.78125"
                        stroke="#32c0cc"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.2539 6.25V0.78125"
                        stroke="#32c0cc"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
    </AccountLayout>
  );
};

export default Profile;
