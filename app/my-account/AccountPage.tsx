'use client';

import Image from 'next/image';
import Link from 'next/link';

type AccountLayoutProps = {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  return (
    <>
      {children ? (
        <div className="flex min-h-screen pt-20 overflow-auto">
          <div className="flex gap-9 w-full relative">
            <div className="hidden sm:flex flex-col max-w-full sm:max-w-[270px] xls:max-w-[380px] h-full bg-lightGrayBg sm:justify-start px-3  py-16 xls:px-16 w-full sticky top-0 left-0">
              {/* Side menu */}
              <div className="flex flex-col gap-5">
                <h2 className="text-[32px] sm:text-5xl font-bold text-primaryDark flex sm:hidden mb-4">
                  My Account
                </h2>
                <Link
                  href="/my-account/activity"
                  className="flex gap-4 items-center justify-between w-full sm:hover:bg-lighterGray active:bg-lighterGray p-0 sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Activity</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/appointments"
                  className="flex gap-[18px] items-center justify-between w-full sm:hover:bg-lighterGray active:bg-lighterGray sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">
                      Appointments
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/billing"
                  className="flex gap-[18px] items-center justify-between w-full hover:bg-lighterGray active:bg-lighterGray p-0 sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Billing</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/profile"
                  className="flex gap-[18px] items-center justify-between w-full hover:bg-lighterGray active:bg-lighterGray p-0 sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Profile</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <button
                onClick={() => console.log('Sign Out')}
                className="flex gap-[18px] items-center w-full sm:p-4 rounded-lg transition-colors duration-200 sm:mt-0 mt-auto"
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
                <span className="text-[18px] font-medium text-primaryGreen">
                  Sign Out
                </span>
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen pt-20 overflow-auto">
          <div className="flex gap-9 w-full relative">
            <div className="flex flex-col max-w-full sm:max-w-[270px] xls:max-w-[380px] bg-lightGrayBg sm:justify-start py-16 px-3  xls:px-16 w-full sticky top-0 left-0">
              {/* Side menu */}
              <div className="flex flex-col gap-5">
                <h2 className="text-[32px] sm:text-5xl font-bold text-primaryDark flex sm:hidden mb-4">
                  My Account
                </h2>
                <Link
                  href="/my-account/activity"
                  className="flex gap-4 items-center justify-between w-full sm:hover:bg-lighterGray active:bg-lighterGray sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Activity</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/appointments"
                  className="flex gap-[18px] items-center justify-between w-full sm:hover:bg-lighterGray active:bg-lighterGray sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">
                      Appointments
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/billing"
                  className="flex gap-[18px] items-center justify-between w-full hover:bg-lighterGray active:bg-lighterGray sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Billing</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <hr className="border-b border-horizontalLine flex sm:hidden" />

                <Link
                  href="/my-account/profile"
                  className="flex gap-[18px] items-center justify-between w-full hover:bg-lighterGray active:bg-lighterGray sm:p-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex gap-[18px] items-center">
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
                    <span className="text-[18px] font-medium">Profile</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <button
                onClick={() => console.log('Sign Out')}
                className="flex gap-[18px] items-center w-full sm:p-4 rounded-lg transition-colors duration-200 mt-auto sm:mt-0"
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
                <span className="text-[18px] font-medium text-primaryGreen">
                  Sign Out
                </span>
              </button>
            </div>
            <div className="hidden sm:flex flex-col gap-5 w-full p-4 sm:p-10 relative mt-8 sm:mt-0">
              <div className="flex gap-3 items-center">
                <h2 className="text-lg sm:text-5xl font-bold text-primaryDark">
                  Account
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <h2>
                  Hello{' '}
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>{' '}
                  (not{' '}
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>
                  ? <span className="text-primaryGreen font-bold">Log out</span>
                  )
                </h2>
                <p className="text-base">
                  From your account dashboard you can view your{' '}
                  <a href="/my-account/activity" className="text-primaryGreen">
                    recent orders
                  </a>
                  , manage your{' '}
                  <a href="/my-account/billing" className="text-primaryGreen">
                    shipping and billing addresses
                  </a>
                  , and{' '}
                  <a href="/my-account/profile" className="text-primaryGreen">
                    edit your password and account details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountLayout;
