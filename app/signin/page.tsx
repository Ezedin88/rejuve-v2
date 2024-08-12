'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignInPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryWhite max-w-hxl w-[90%] xls:w-[85%%] mx-auto">
      <div className="flex flex-col justify-between py-8 w-full sm:w-1/2 h-full">
        <div className="flex gap-3 items-center">
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
          <h1 className="text-[32px] sm:text-5xl font-bold mb-4">Sign In</h1>
          <div className="flex flex-col w-full">
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
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
              <div className="flex flex-col gap-4">
                <button
                  className="px-6 py-3 font-semibold text-4 bg-primaryGreen text-primaryWhite rounded transition-colors hover:bg-primaryGreenHover"
                  >
                    Sign in
                </button>

                <hr className='border-b border-horizontalLine/50'/>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-3 text-base bg-lightGrayBg text-primaryDark rounded transition-colors "
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.7902C21 15.9402 18.79 21.0002 12.13 21.0002C7.12461 21.0334 3.03852 17.0055 3 12.0002C3.03852 6.99485 7.12461 2.96694 12.13 3.0002C14.2007 3.00788 16.2085 3.71237 17.83 5.0002C17.942 5.09173 18.0109 5.22581 18.02 5.3702C18.0206 5.51629 17.963 5.65661 17.86 5.7602C17.209 6.3554 16.5882 6.98285 16 7.6402C15.8289 7.8285 15.5422 7.85456 15.34 7.7002C14.4161 7.01648 13.2888 6.66418 12.14 6.7002C9.18528 6.7002 6.79 9.09548 6.79 12.0502C6.79 15.0049 9.18528 17.4002 12.14 17.4002C15.14 17.4002 16.41 16.1202 17.07 13.8502H12.5C12.2239 13.8502 12 13.6263 12 13.3502V10.7002C12 10.424 12.2239 10.2002 12.5 10.2002H20.5C20.7302 10.1987 20.9244 10.3713 20.95 10.6002C20.9871 10.9957 21.0038 11.3929 21 11.7902Z" fill="black"/>
                    </svg>
                    <p>Log in with Google</p>
                </button>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-3 text-base bg-lightGrayBg text-primaryDark rounded transition-colors "
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="black"/>
                    </svg>
                    <p>Log in with Facebook</p>
                </button>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-3 text-base bg-lightGrayBg text-primaryDark rounded transition-colors "
                  >
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84571 5.56554C8.95891 5.66535 9.10991 5.71103 9.25951 5.6907C10.2606 5.5061 11.1561 4.95307 11.7695 4.1407C12.3659 3.38801 12.7151 2.46946 12.7695 1.5107C12.774 1.35182 12.7041 1.19994 12.5806 1.09994C12.4571 0.999931 12.294 0.963241 12.1395 1.0007C11.1746 1.25266 10.3116 1.7977 9.66951 2.5607C9.05941 3.29777 8.70811 4.21468 8.66951 5.1707C8.66811 5.32164 8.73241 5.46573 8.84571 5.56554ZM16.202 8.22622C15.6104 8.78139 14.6795 9.65493 14.6795 11.5107C14.6656 13.1676 15.5755 14.6945 17.0395 15.4707C17.2206 15.5525 17.3377 15.732 17.3395 15.9307C17.3395 16.0007 15.2395 21.0007 12.7195 21.0007C12.1678 21.0007 11.8001 20.8268 11.3974 20.6364C10.9095 20.4057 10.37 20.1507 9.38951 20.1507C8.42311 20.1507 7.88231 20.3984 7.38458 20.6264C6.96045 20.8207 6.56766 21.0007 5.96952 21.0007C3.64952 21.0007 0.499523 16.1407 0.499523 11.7507C0.459663 10.5107 0.767973 9.28443 1.38952 8.2107C2.26612 6.72503 3.82713 5.77567 5.54952 5.6807C6.36119 5.6807 7.02563 5.9196 7.65411 6.14557C8.21811 6.34834 8.75311 6.5407 9.33951 6.5407C9.89941 6.5407 10.3512 6.36538 10.8468 6.17306C11.449 5.93943 12.1158 5.6807 13.1195 5.6807C14.9495 5.6807 16.6795 7.0007 16.6795 7.5907C16.6795 7.77817 16.4776 7.96766 16.202 8.22622Z" fill="black"/>
                    </svg>
                    <p>Log in with Apple</p>
                </button>
              </div>
              <a href="#" className="text-primaryDark text-center underline">Forgot your password?</a>
              <p className="text-center text-secondaryDark">Don&apos;t have an account? <a href="" className='text-primaryGreen font-semibold'> Sign Up</a>
              </p>
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

export default SignInPage;
