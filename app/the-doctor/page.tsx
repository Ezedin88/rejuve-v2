import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-full bg-gradient-to-b from-primaryWhite from-10% via-lightGreenFade/40 via-55% to-primaryWhite to-90%">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-32 lg:mt-0 mb-14 gap-6 max-w-hxl min-h-screen h-full mx-auto w-[90%] xls:w-[85%]">
          <div className="flex w-full xls:w-1/2 h-full">
            <Image
              src={'/images/the-doctor.png'}
              width={640}
              height={640}
              alt="The Doctor"
              className="w-fll h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 w-full xls:w-1/2">
            <h2 className="text-[32px] xls:text-[40px] font-bold text-primaryDark">
              Dr. Carrie Carda
            </h2>
            <p className="text-base xls:text-[18px] text-secondaryDark font-semibold">
              M.D., MMS, MS, ABAARM
            </p>
            <p className="text-secondaryDark text-base xls:text-[18px]">
              Dr. Carrie Carda has been a practicing MD for over 25 years
              obtaining additional training in hormone therapy for both men and
              women. Her practice is now focused on metabolic medicine,
              anti-aging and running a successful weight loss center. <br />
              Nearly ten years ago she advanced her practice to include board
              certification in anti-aging medicine and has completed two
              Master’s programs from Georgetown University School of Medicine,
              and University of South Florida School of Medicine studying
              Integrative Medicine and Nutrition.
            </p>
            <p className="text-secondaryDark text-base xls:text-[18px]">
              Her knowledge base of herbal medicine and alternative medical
              therapies is extensive. She uses this to blend traditional Western
              medicine with ancient Eastern practices and ideology.
            </p>
            <p className="text-secondaryDark text-base xls:text-[18px]">
              Her passion is optimizing the human body through clean living and
              disease prevention. She believes this can be accomplished by
              educating the public about “self-care” over “healthcare”; through
              nutrition, supplementation, and the emerging field of Regenerative
              Medicine techniques of Ozone, PRP, and cell biologic therapies.
            </p>
          </div>
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

export default page;
