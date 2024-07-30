'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIvExpanded, setIsIvExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const toggleIvExpand = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    e.stopPropagation(); // Stop the event from propagating to the Link
    setIsIvExpanded(!isIvExpanded);
  };

  const toggleAboutExpand = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    e.stopPropagation(); // Stop the event from propagating to the Link
    setIsAboutExpanded(!isAboutExpanded);
  };

  return (
    <header className="w-full h-20 px-8 xls:px-16 border border-[#C0C4CC] bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between gap-10 max-w-[1480px] h-full mx-auto w-full">
        <Link href="/" className="w-34 h-9">
          <Image
            src={'/Logo.svg'}
            width={130}
            height={35}
            quality={100}
            alt="rejuve logo"
            className="w-full h-full object-cover bg-white"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex xls:hidden text-[#32c0cc]"
        >
          {!isOpen ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <ul className="gap-8 text-base hidden xls:flex">
          <li className="group py-7 items-stretch relative">
            <Link
              href="/iv-therapy"
              className="whitespace-nowrap flex gap-2 items-center hover:text-[#32C0CC] transition-colors duration-200"
            >
              <p>IV Therapy</p>
              {/* <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </Link>
            <div className="group-hover:hidden xls:group-hover:block w-screen left-0 right-0 fixed bg-white text-[#282D41] top-[78px] shadow-lg hidden">
              <div className="block w-full mx-auto">
                <div className="w-full flex gap-10 mx-auto xl:pl-16 2xl:pl-32">
                  <div className="grid grid-cols-3 gap-4 py-10 pl-16">
                    <Link href="/hangover-fix" p-2>
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                      <p className="max-w-72 text-[14px] text-[#5A5F73]">
                        Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B
                        complex and more.
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col ml-auto gap-4 w-[416px] bg-[#E3FAFF] justify-center items-start px-16">
                    <h2 className="text-xl text-left font-semibold">
                      Learn more about IV Therapy
                    </h2>
                    <div className="w-72 h-48">
                      <Image
                        src={'/blog.png'}
                        width={288}
                        height={188}
                        alt="blog"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl text-left font-semibold">
                      Get the Best of You Get IV Therapy
                    </h3>
                    <p className="w-full text-balance">
                      If you&apos;ve ever had food poisoning, woken up with a
                      nasty hangover, or had jet lag after
                    </p>
                    <Link
                      href="/learn-more"
                      className="text-xl text-[#32c0cc] font-semibold"
                    >
                      Learn more &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group py-7 items-stretch">
            <Link
              href="/about-us"
              className="whitespace-nowrap flex gap-2 items-center hover:text-[#32C0CC] transition-colors duration-200"
            >
              <p>About Us</p>
              <div className="group-hover:hidden xls:group-hover:block absolute bg-white text-[#282D41] w-80 left-0 top-[78px] shadow-lg hidden">
                <div className="flex flex-col">
                  <Link
                    href="/who-we-are"
                    className="w-full px-4 py-4  hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                  >
                    About Us
                  </Link>
                  <hr className="border border-[#c0c4cc73]" />
                  <Link
                    href="/the-doctor"
                    className="w-full px-4 py-4 hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                  >
                    The Doctor
                  </Link>
                  <hr className="border border-[#c0c4cc73]" />
                  <Link
                    href="/contact-us"
                    className="w-full px-4 py-4  hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          <li className="py-7 items-stretch">
            <Link
              href="tel:(818) 290-7311"
              className="whitespace-nowrap flex gap-2 items-center hover:text-[#32C0CC] transition-colors duration-200"
            >
              Call Us: (818) 290-7311
            </Link>
          </li>
        </ul>

        {isOpen && (
          <div className="flex flex-col gap-6 xls:hidden absolute top-20 left-0 right-0 bg-white shadow-lg p-8 h-screen overflow-y-scroll pb-64">
            <div className="flex justify-between gap-2 items-center hover:text-[#32c0cc]">
              <Link
                href="/iv-therapy"
                className="whitespace-nowrap flex flex-1 gap-2 items-center justify-between transition-colors duration-200"
              >
                <p className="font-semibold text-[18px]">IV Therapy</p>
              </Link>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col cursor-pointer"
                onClick={(e) => toggleIvExpand(e)}
              >
                {isIvExpanded ? (
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>

            {isIvExpanded && (
              <div className="block xls:hidden">
                <p className="font-semibold text-base">
                  Learn more about IV Therapy
                </p>
                <p className="text-[14px] text-[#5A5F73] py-3">
                  If you&apos;ve ever had food poisoning, woken up with a nasty
                  hangover, or had jet lag after
                </p>
                <Link
                  href="/learn-more"
                  className="py-2 text-xl text-[#32c0cc] font-semibold"
                >
                  Learn more &gt;
                </Link>

                <div className="w-full flex flex-col gap-10 mx-auto">
                  <div className="flex flex-col gap-6 pt-10">
                    <Link href="/hangover-fix" p-2>
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                    <Link href="#">
                      <h3 className="text-[16px] font-semibold">
                        Hangover Fix
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <hr className="border-b border-[#C0C4CC]" />

            <div className="flex justify-between gap-2 items-center hover:text-[#32c0cc]">
              <Link
                href="/who-we-are"
                className="whitespace-nowrap flex flex-1 gap-2 items-center justify-between transition-colors duration-200"
              >
                <p className="font-bold text-[18px]">About Us</p>
              </Link>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col cursor-pointer"
                onClick={(e) => toggleAboutExpand(e)}
              >
                {isAboutExpanded ? (
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>

            {isAboutExpanded && (
              <div className="flex flex-col xls:hidden">
                <Link
                  href="/who-we-are"
                  className="w-full py-2 hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/the-doctor"
                  className="w-full py-2 hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                >
                  The Doctor
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full py-2  hover:text-[#32c0cc] font-semibold transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            )}

            <hr className="border-b border-[#C0C4CC]" />

            <Link
              href="tel:(818) 290-7311"
              className="whitespace-nowrap flex gap-2 items-center hover:text-[#32C0CC] transition-colors duration-200 font-semibold"
            >
              Call Us: (818) 290-7311
            </Link>
            <div className="fixed bottom-0 left-0 flex flex-col gap-4 justify-center items-center py-6 w-full mx-auto bg-white">
              <Link
                href="/check-menu"
                className="px-5 py-2 w-fit font-semibold text-4 bg-[#32C0CC] text-white rounded-lg transition-colors hover:bg-[#2aa1ac]"
              >
                Check menu
              </Link>
              <Link
                href="/account"
                className="text-base text-[#32c0cc] font-semibold"
              >
                My Account
              </Link>
            </div>
          </div>
        )}

        <div className="hidden xls:flex gap-4 justify-center items-center h-full">
          <Link
            href="/check-menu"
            className="px-5 py-2 font-semibold text-4 bg-[#32C0CC] text-white rounded-lg transition-colors hover:bg-[#2aa1ac]"
          >
            Check menu
          </Link>
          <Link
            href="/account"
            className="text-base text-[#32c0cc] font-semibold"
          >
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
