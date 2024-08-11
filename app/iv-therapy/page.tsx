'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Parallax from './parallax';
import DiscoverBenefits from '../components/DiscoverBenefits';
import Faq from '../components/Faq';

const IVTherapy = () => {
  const products = [
    {
      title: 'Hangover-Fix',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: "Myer's Cocktail",
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Hangover-Fix',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: "Myer's Cocktail",
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Hangover-Fix',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: "Myer's Cocktail",
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Hangover-Fix',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: "Myer's Cocktail",
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Hangover-Fix',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: "Myer's Cocktail",
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
    {
      title: 'Immunity-Boost',
      description:
        'Ascorbic Acid, Methylcobalamin (B12), Calcium, Vitamin B complex and more.',
      image: '/images/product-01.png',
      link: '',
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-start sm:justify-center mx-auto items-start w-full h-[80vh] sm:h-screen bg-cover mt-5 sm:mt-0 bg-center bg-no-repeat bg-opacity-20 bg-blur-5xl bg-primaryWhite bg-iv-therapy-image relative">
        <div className="iv-hero absolute top-20 sm:relative flex flex-col items-center justify-center gap-8 sm:gap-10 bg-gradient-to-b from-primaryWhite from-70% via-primaryWhite via-80% to-transparent to-100% sm:bg-none h-fit w-full py-0 pt-20 pl-0 sm:pl-[42%] pr-0 sm:pr-[72px] sm:py-[54px] px-8 sm:px-0 max-h-[280px] sm:max-h-full z-20">
          <h2 className="text-[24px] sm:text-[48px] text-center sm:text-left font-bold text-primaryDark leading-tight">
            Get The Best of You Get
            <span className="text-primaryGreen"> Iv Therapy</span>
          </h2>
          <div className="flex flex-col px-6 sm:px-0">
            <p className="text-[12px] sm:text-base text-secondaryDark text-center sm:text-left leading-normal">
              Dehydration can leave you feeling weak and tired, but IV therapy
              can help you recover quickly and get back on your feet. Our
              clients in Los Angeles choose IV therapy for a health boost after
              prolonged sickness, surgery, or a night out with friends. IV
              therapy can also support weight loss efforts and aid in
              post-workout recovery.
            </p>
            <p className="text-[12px] sm:text-base text-secondaryDark text-center sm:text-left leading-normal">
              At Rejuve, our IV therapy sessions are tailored to your individual
              needs. We offer personalized IV protocols to promote hydration and
              provide essential nutrients to your body. Contact our doctors
              today to schedule a free consultation and learn more about how IV
              therapy can help you achieve your wellness goals.
            </p>
          </div>
          <Link
            href="/iv-therapy"
            className="px-8 py-5 min-w-[185px] flex justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded w-fit mx-auto sm:mx-0"
          >
            Explore IV Drips
          </Link>
        </div>
        <div
          className="w-full flex sm:hidden h-full mt-[200px] relative"
          style={{
            backgroundImage: "url('/Iv-therapy-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-primaryWhite from-20% to-primaryWhite/10 to-75%"></div>
        </div>
      </section>

      <div className="max-w-[1480px] flex items-center flex-col gap-[150px] w-[90%] xls:w-[85%] mx-auto mt-[170px]">
        <section className="flex flex-col gap-[107px] w-full min-h-screen relative">
          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-[24px] sm:text-[48px] font-bold text-center max-w-[1236px] text-primaryDark text-balance">
              Chose From Our <br />
              Wide Selection of
              <span className="text-primaryGreen"> IV Drips</span>
            </h2>
            <p className="text-base sm:text-[18px] text-secondaryDark max-w-[1236px] text-center">
              Experience all the benefits of IV therapy in the comfort of your
              own home.
            </p>
          </div>
          <div className="grid grid-cols-2 xls:grid-cols-4 gap-6 gap-y-[61px] place-content-center">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Visit Clinic */}
      <section className="flex w-full mt-[200px] min-h-[900px] bg-lightGrayBg">
        <div className="visit flex flex-col justify-center max-h-full py-9 lg:py-0 lg:max-w-hxl w-[90%] xls:w-[85%] mx-auto items-center lg:flex-row gap-20">
          <div className="flex flex-col justify-center flex-1 w-full gap-6 lg:w-1/2 lg:max-h-[697px] h-1/2 my-auto">
            <h2 className="text-[40px] xls:text-5xl font-bold text-left leading-tight">
              Revitalize Your Body with
              <span className="text-primaryGreen"> IV Therapy</span> in Sherman
              Oaks - Rejuve Medical Clinic
            </h2>
            <p className="text-base xls:text-[18px] text-secondaryDark">
              Our clients in Sherman Oaks and throughout Los Angeles opt for IV
              therapy drips for health boosts after prolonged sickness, surgery,
              or a night out with friends. Athletes also rely on IV therapy to
              recover from intense workouts and promote more effective weight
              loss. No matter what your health and wellness goals are, our
              doctors can recommend the perfect IV cocktail to help you achieve
              them.
            </p>
            <div className="flex gap-6 items-start w-full mt-5 xls:mt-14">
              <div className="flex flex-col gap-4 w-1/2">
                <h3 className="text-xl text-primaryGreen font-bold">
                  Personalized IV protocols
                </h3>
                <p className="text-[14px] xls:text-base text-secondaryDark">
                  At Rejuve, we offer personalized IV protocols tailored to your
                  individual needs, ensuring that you receive the desired
                  effects throughout your body. Contact us today to schedule a
                  free consultation and discover how our IV therapy sessions can
                  help you
                </p>
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <h3 className="text-xl text-primaryGreen font-bold">
                  For a fast recovery
                </h3>
                <p className="text-[14px] xls:text-base text-secondaryDark">
                  Are you tired of feeling weak and exhausted from dehydration
                  caused by food poisoning, hangovers, or jet lag? Rejuve, a
                  California-regulated medical clinic, offers world-class IV
                  Therapy to help you get back on your feet and feel energized.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:h-full lg:w-1/2 max-h-[256px] lg:max-h-[697px] h-full my-auto rounded-xl flex-1 items-center justify-center">
            <Image
              src={'/images/clinic-sofa.png'}
              width={800}
              height={697}
              quality={100}
              alt="rejuve clinic"
              className="w-full h-full object-center object-cover lg:object-fill rounded-xl"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1480px] flex items-center h-full flex-col w-[90%] xls:w-[85%] mx-auto mt-[170px] gap-[200px]">
        {/* <WhyRejuve /> */}
        {/* Parallax */}
        <Parallax />

        <DiscoverBenefits />
      </div>

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <section className="flex flex-col w-full items-center justify-center relative sm:max-h-[972px] h-full mt-10 xls:mt-[200px]">
        <div className="flex h-[103px] bg-transparent w-full"></div>
        <div className="flex flex-col s:flex-row bg-lightBlue w-full">
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

export default IVTherapy;
