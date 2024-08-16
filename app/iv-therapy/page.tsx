import Image from 'next/image';
import React from 'react';
import ProductCard from '../components/ProductCard';
import Parallax from './parallax';
import DiscoverBenefits from '../components/DiscoverBenefits';
import Faq from '../components/Faq';
import { fetchIvTherapyPageContent, fetchProducts } from '../lib/client';
import FooterHero from '../components/FooterHero';
import IVTherapyHero from '../components/IVTherapy/IvHero';
import IVDripsHero from '../components/FrontPage/IVDripsHero';

const IVTherapy = async () => {
  const productData = await fetchProducts();
  const ivTherapyContent = await fetchIvTherapyPageContent();
  const { hero, iv_therapy_content, benefits_of_iv_therapy } = ivTherapyContent ?? {};

  const { section_title } = iv_therapy_content?.[1] ?? {};
  return (
    <>
      <IVTherapyHero heroContent={hero} />
      <div className="max-w-[1480px] flex items-center flex-col gap-[150px] w-[90%] xls:w-[85%] mx-auto mt-[170px]">
        <IVDripsHero section_title={section_title} />
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

        <DiscoverBenefits ivBenefits={benefits_of_iv_therapy} />
      </div>

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <FooterHero />
    </>
  );
};

export default IVTherapy;
