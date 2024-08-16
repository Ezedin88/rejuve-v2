import React from 'react';
import { IFaqDetail } from '../lib/definitions';

const Faq = ({ faqData }: { faqData?: IFaqDetail[] }) => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-primaryWhite from-10% via-lightGreenFade/40 via-55% to-primaryWhite to-90% mb-[93px]">
        <div className="max-w-[1480px] flex items-start flex-col w-[90%] xls:w-[85%] mx-auto mt-[170px] gap-[70px] py-7">
          <div className="flex flex-col gap-6 w-full">
            <h3 className="font-bold text-[32px] sm:text-[48px] text-center w-full">
              Frequently Asked Questions
            </h3>
            <p className="text-secondaryDark text-base sm:text-[18px] text-center">
              Here are the answers to some of the most common questions we hear
              from our appreciated customers.
            </p>
          </div>
          {
            faqData ?
              <div className="flex flex-col gap-16">
                {
                  faqData?.flatMap((faq) =>
                    faq?.faq_detail?.faq_list?.map((item, itemIndex) => renderFaqItem(item, itemIndex))
                  )
                }
              </div> : <DefaultFaq />
          }
        </div>
      </section>
    </>
  );
};

export default Faq;

const DefaultFaq = () => {
  return (<div className="flex flex-col gap-16">
    <div className="flex flex-col xls:flex-row justify-center xls:justify-between gap-6">
      <p className="text-primaryGreen tex-base font-bold sm:text-[18px] w-full xls:w-1/4">
        Is IV Therapy Safe?
      </p>
      <p className="text-base sm:text-[18px] text-secondaryDark w-full xls:w-3/4 text-left">
        Yes, we only use reputable and accredited compounding pharmacies
        for our ingredients. These infusions are administered by
        licensed skilled IV specialists.
      </p>
    </div>
    <div className="flex flex-col xls:flex-row justify-center xls:justify-between gap-6">
      <p className="text-primaryGreen tex-base font-bold sm:text-[18px] w-full xls:w-1/4">
        Are there side effects?
      </p>
      <p className="text-base sm:text-[18px] text-secondaryDark w-full xls:w-3/4 text-left">
        Side effects rarely happen if at all. If they do they are
        usually minor and short lived. Bruising or bleeding at IV site,
        warming or cooling sensation in arm, chest or stomach, tasting
        the vitamins or having vitamin smell in your urine. Our licensed
        staff are trained to manage all side effects that may occur.
      </p>
    </div>
    <div className="flex flex-col xls:flex-row justify-center xls:justify-between gap-6">
      <p className="text-primaryGreen tex-base font-bold sm:text-[18px] w-full xls:w-1/4">
        Does IV Treatment hurt?
      </p>
      <p className="text-base sm:text-[18px] text-secondaryDark w-full xls:w-3/4 text-left">
        We use only skilled professionals for IV placement to ensure the
        least amount of pain is felt if any at all. A numbing topical
        cream can be purchased for use to dull the sensation at request.
        Once the IV is in place only a very small straw will be left in
        the vein ensuring a comfortable session.
      </p>
    </div>
  </div>
  )
}

const renderFaqItem = (item: { question: string, answer: string }, index: number) => (
  <div key={index} className="flex flex-col xls:flex-row justify-center xls:justify-between gap-6">
    <p className="text-primaryGreen tex-base font-bold sm:text-[18px] w-full xls:w-1/4">
      {item.question}
    </p>
    <p className="text-base sm:text-[18px] text-secondaryDark w-full xls:w-3/4 text-left">
      {item.answer}
    </p>
  </div>
);