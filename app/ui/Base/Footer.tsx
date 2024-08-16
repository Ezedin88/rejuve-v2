import { fetchOptions } from '@/app/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = async () => {

  const firstMenu = await fetchOptions();
  const footer_first_menu = firstMenu?.footer_first_menu;
  const footer_second_menu = firstMenu?.footer_second_menu;

  const { page_link } = footer_first_menu ?? {};
  const { page_link: second_page_link } = footer_second_menu ?? {};
  return (
    <footer className="flex flex-col bottom-0 w-full h-full xls:h-[475px] px-5 xls:px-[85px] pt-16 pb-10 bg-primaryDark">
      <div className="flex flex-col xls:flex-row gap-[70px] xls:gap-[128px] items-start justify-start mb-10">
        {/* Newsletter */}
        <div className="flex flex-col xls:w-1/3 w-full gap-6 items-start justify-start">
          <div className="flex w-[150px] h-[40px]">
            <Image
              src={'/Logo.svg'}
              width={150}
              height={40}
              quality={100}
              alt="Rejuve Clinics Logo"
              className="w-full h-full object-cover bg-cover"
            />
          </div>
          <h3 className="text-base font-bold text-primaryWhite">
            Join our newsletter and get the latest updates!
          </h3>
          <div className="flex flex-col xls:flex-row w-full gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full xls:w-[356px] h-[50px] px-4 bg-transparent border border-horizontalLine rounded-lg"
            />
            <button className="px-8 py-4 w-fit bg-primaryGreen rounded-lg text-primaryWhite font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-footerGrayText text-[12px] w-full xls:max-w-[500px]">
            By subscribing you agree to with our
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-primaryGreen underline"
            >
              {' '}
              Privacy Policy{' '}
            </Link>
            and provide consent to receive updates from our company.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 xls:grid-cols-3 justify-between items-start gap-10px gap-y-10 flex-wrap w-full whitespace-nowrap">
          <div className="flex flex-col gap-6 xls:max-w-[500px] w-full max-w-full xls:w-1/3">
            <h4 className="font-semibold text-primaryWhite">{footer_first_menu?.title}</h4>
            <ul className="flex flex-col gap-4 justify-start items-start">
              {page_link?.map((item: any) => (
                <li key={item.id} className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200">
                  <Link href={`/product/${item.post_title}`}>
                    {item.post_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start flex-col items-start gap-6 w-full xls:w-1/3">
            <h4 className="font-semibold text-primaryWhite">{footer_second_menu?.title}</h4>
            <ul className="flex flex-col gap-4 justify-start items-start">
              {
                second_page_link?.map((item: any, key: number) => {
                  return (
                    <li className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200" key={key}>
                      <Link href={`/${item?.post_name}`}>{item?.post_title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start w-full xls:w-fit col-span-2 xls:col-span-1">
            <div className="flex flex-col justify-start gap-6 w-full">
              <h4 className="font-semibold text-primaryWhite">Follow Us</h4>
              <ul className="flex flex-row xls:flex-col gap-4 items-start w-full">
                <div className="flex flex-col gap-4 w-1/2 xls:w-full">
                  <li className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200 w-full">
                    <Link
                      href="https://fb.com/rejuve"
                      className="flex items-center gap-3"
                    >
                      <div className="flex w-6 h-6 p-0.5">
                        <Image
                          src={'/images/fb.svg'}
                          width={24}
                          height={24}
                          quality={100}
                          alt="facebook icon"
                          className="w-full h-full bg-cover"
                        />
                      </div>
                      <p>Facebook</p>
                    </Link>
                  </li>
                  <li className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200 w-full">
                    <Link
                      href="https://instagram.com/rejuve"
                      className="flex items-center gap-3"
                    >
                      <div className="flex w-6 h-6 p-0.5">
                        <Image
                          src={'/images/ig.svg'}
                          width={24}
                          height={24}
                          quality={100}
                          alt="facebook icon"
                          className="w-full h-full bg-cover"
                        />
                      </div>
                      <p>Instagram</p>
                    </Link>
                  </li>
                </div>

                <div className="flex flex-col gap-4 w-1/2 xls:w-full">
                  <li className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200 w-full">
                    <Link
                      href="https://twitter.com/rejuve"
                      className="flex items-center gap-3"
                    >
                      <div className="flex w-6 h-6 p-0.5">
                        <Image
                          src={'/images/tw.svg'}
                          width={24}
                          height={24}
                          quality={100}
                          alt="facebook icon"
                          className="w-full h-full bg-cover"
                        />
                      </div>
                      <p>Twitter</p>
                    </Link>
                  </li>
                  <li className="text-footerGrayText hover:text-primaryGreen transition-colors duration-200 w-full">
                    <Link
                      href="https://youtube.com/rejuve"
                      className="flex items-center gap-3"
                    >
                      <div className="flex w-6 h-6 p-0.5">
                        <Image
                          src={'/images/yt.svg'}
                          width={24}
                          height={24}
                          quality={100}
                          alt="facebook icon"
                          className="w-full h-full bg-cover"
                        />
                      </div>
                      <p>YouTube</p>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-b-0.5 border-secondaryDark mt-4" />

      <div className="flex flex-col-reverse xls:flex-row gap-10 justify-between items-center mt-8 text-[14px]">
        <p className="text-footerGrayText">
          &copy; 2023 Rejuve. All rights reserved.
        </p>
        <ul className="text-footerGrayTextText flex gap-6 items-center whitespace-nowrap flex-wrap">
          <li className="text-footerGrayText underline hover:text-primaryGreen">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="text-footerGrayText underline hover:text-primaryGreen">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </li>
          <li className="text-footerGrayText underline hover:text-primaryGreen">
            <Link href="/cancellation-policy">Cancellation Policy</Link>
          </li>
          <li className="text-footerGrayText underline hover:text-primaryGreen">
            <Link href="/hipaa-privacy">Hipaa/Privacy</Link>
          </li>
          <li className="text-footerGrayText underline hover:text-primaryGreen">
            <Link href="/research">Research</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
