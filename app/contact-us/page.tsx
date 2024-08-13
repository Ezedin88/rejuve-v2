'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    accept: false,
  });

  return (
    <>
      <div className="flex flex-col gap-10 w-full bg-gradient-to-b from-primaryWhite from-10% via-lightGreenFade/40 via-55% to-primaryWhite to-90%">
        <div className="flex flex-col lg:flex-row justify-between mt-32 lg:mt-0 items-center gap-6 lg:gap-10 max-w-hxl h-full min-h-screen mx-auto w-[90%] xls:w-[85%]">
          <div className="flex flex-col gap-8 w-full lg:w-1/2 h-full lg:max-w-[406px]">
            <h2 className="text-primaryGreen font-bold text-[32px] lg:text-48px]">
              Contact us
            </h2>
            <p className="text-secondaryDark text-base lg:text-lg">
              If you have any questions or comments about our service, please
              don&apos;t hesitate to get in touch with us. Our team is always
              here to help and we&apos;ll do our best to respond to your inquiry
              as soon as possible.
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="text-secondaryDark text-base flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <Image
                      src={'/Phone.svg'}
                      width={24}
                      height={24}
                      alt="phone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold">(818) 290-3711</p>
                </div>
              </li>
              <li>
                <div className="text-secondaryDark text-base flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <Image
                      src={'/Email.svg'}
                      width={24}
                      height={24}
                      alt="phone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold">booking@rejuve.com</p>
                </div>
              </li>
              <li>
                <div className="text-secondaryDark text-base flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <Image
                      src={'/Pin.svg'}
                      width={24}
                      height={24}
                      alt="phone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold whitespace-nowrap">
                    15301 Ventura Blvd U2 Sherman Oaks CA 91403
                  </p>
                </div>
              </li>
              <li>
                <div className="text-secondaryDark text-base flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <Image
                      src={'/Clock.svg'}
                      width={24}
                      height={24}
                      alt="phone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold whitespace-nowrap">
                    Tuesday - Saturday: 10:30AM - 7:00PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-6 w-full lg:w-1/2">
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
                  className="p-3 border border-secondaryDark hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
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
                  className="p-3 border border-secondaryDark hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
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
                  className="p-3 border border-secondaryDark hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
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
                  className="p-3 border border-secondaryDark hover:shadow shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
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
              <textarea
                name="message"
                id="message"
                value={userData.message || ''}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    message: e.target.value,
                  })
                }
                placeholder="Type your message..."
                className="p-3 border border-secondaryDark hover:shadow h-full max-h-[112px] shadow-primaryGreen rounded w-full l:w-1/2 hover:border-primaryGreen"
                required
              ></textarea>
            </div>

            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="accept"
                id="accept"
                checked={userData.accept || false}
                className="appearance-none w-6 h-6 border bg-primaryWhite border-horizontalLine checked:border-4 rounded checked:border-primaryGreen"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    accept: e.target.checked,
                  })
                }
                required
              />
              <label htmlFor="accept" className="text-secondaryDark">
                I accept the{' '}
                <a
                  href="/terms-and-conditions"
                  className="text-black underline hover:text-blue-600"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button className="flex bg-primaryGreen px-6 py-3 w-fit text-primaryWhite rounded font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* CTA */}
      <section className="flex flex-col w-full items-center justify-center relative sm:max-h-[972px] h-full">
        <div className="flex h-[103px] bg-transparent w-full"></div>
        <div className="flex flex-col s:flex-row bg-lightGreen w-full">
          <div className="flex flex-col justify-center items-start gap-6 max-w-hxl w-full sm:w-[85%] md:min-h-[630px] max-h-[869px] h-full mx-auto py-12 md:py-0 px-6 sm:px-0">
            <h2 className="font-bold text-[32px] xls:text-[40px] w-full md:w-1/2">
              Look better, feel better, and unlock the full potential of your
              body and mind at
              <span className="text-primaryGreen"> Rejuve</span>
            </h2>
            <p className="text-secondaryDark text-[18px] w-full md:w-1/2">
              At Rejuve, you are part of an elite group of people who take their
              health and happiness seriously, and we make sure to treat you that
              way.
            </p>
            <Link
              href="/iv-therapy"
              className="px-8 py-5 font-semibold text-base bg-primaryGreen rounded mt-8 w-fit text-primaryWhite"
            >
              Book an Appointment
            </Link>
          </div>
          <div className="flex relative md:absolute right-0 bottom-0 self-end w-2/3 md:w-1/2 h-fit xl:h-full">
            <Image
              src={'/images/cta.png'}
              width={913}
              height={950}
              quality={100}
              alt="call to action"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
