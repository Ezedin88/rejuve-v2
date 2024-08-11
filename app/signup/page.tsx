'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryWhite max-w-hxl w-[90%] xls:w-[85%%] mx-auto">
      <div className="flex flex-col justify-between py-8 w-full sm:w-1/2 h-full">
        <div className="flex gap-3 items-center pt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex w-6 h-6 transform rotate-180 cursor-pointer"
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
          <h2 className="text-lg font-bold text-primaryDark">
            Back
          </h2>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full px-5 xls:px-28 py-8 xls:py-20">
          <h1 className="text-[32px] sm:text-5xl font-bold mb-4">Sign Up</h1>
          <div className="flex flex-col w-full">
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div className='flex flex-col gap-1'>
                <label
                  className="text-primaryDark text-sm font-medium after:content-['*'] after:text-primaryGreen after:text-md"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={user.firstName || ''}
                  onChange={(e) => setUser({
                    ...user,
                    firstName: e.target.value,
                  })}
                  required
                  className="w-full px-3 py-3 border border-horizontalLine rounded"
                  placeholder='Johnathan'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  className="text-primaryDark text-sm font-medium after:content-['*'] after:text-primaryGreen after:text-md"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={user.lastName || ''}
                  onChange={(e) => setUser({
                    ...user,
                    lastName: e.target.value,
                  })}
                  required
                  className="w-full px-3 py-3 border border-horizontalLine rounded"
                  placeholder='Smith'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  className="text-primaryDark text-sm font-medium after:content-['*'] after:text-primaryGreen after:text-md"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={user.phone || ''}
                  onChange={(e) => setUser({
                    ...user,
                    phone: e.target.value,
                  })}
                  required
                  className="w-full px-3 py-3 border border-horizontalLine rounded"
                  placeholder='(123) 456-7890'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  className="text-primaryDark text-sm font-medium after:content-['*'] after:text-primaryGreen after:text-md"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.email || ''}
                  onChange={(e) => setUser({
                    ...user,
                    email: e.target.value,
                  })}
                  required
                  className="w-full px-3 py-3 border border-horizontalLine rounded"
                  placeholder='name@example.com'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  className="text-primaryDark text-sm font-medium after:content-['*'] after:text-primaryGreen after:text-md"
                  htmlFor="email"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={user.password || ''}
                  onChange={(e) => setUser({
                    ...user,
                    password: e.target.value,
                  })}
                  required
                  className="w-full px-3 py-3 border border-horizontalLine rounded"
                  placeholder='********'
                />
              </div>
              <button
                className="px-6 py-3 font-semibold text-4 bg-primaryGreen text-primaryWhite rounded transition-colors hover:bg-primaryGreenHover"
                >
                  Sign up
              </button>

              <hr className='border-b border-horizontalLine/50'/>

              <p className="text-center text-secondaryDark">Have an account? <a href="" className='text-primaryGreen font-semibold'> Sign In</a></p>
            </form>
          </div>
        </div>
        <p className='text-secondaryDark text-sm'>© 2023 Rejuve. All rights reserved.</p>
      </div>
      <div className="hidden sm:flex flex-col justify-center w-1/2 h-full">
        <Image src={'/login-page.png'} alt="Login" width={1000} height={2000} className='object-contain w-full h-full'/>
      </div>
    </div>
  );
};

export default SignUpPage;
