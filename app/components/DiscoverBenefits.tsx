import React from 'react';

const DiscoverBenefits = () => {
  return (
    <>
      <div className="flex flex-col xls:flex-row gap-[52px] justify-center">
        <div className="flex flex-col gap-6 w-full xls:w-1/2">
          <h3 className="text-[32px] sm:text-[40px] font-bold text-primaryDark">
            Discover the Benefits of
            <span className="text-brightYellow"> IV Therapy </span> for Improved
            Well-Being
          </h3>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            IV therapy provides a safe and effective way to deliver essential
            vitamins and minerals directly into your bloodstream. With faster
            absorption and targeted delivery, IV drip therapy can offer quick
            relief from symptoms and boost your energy levels. Whether
            you&apos;re looking to replenish electrolytes or improve your
            overall health and well-being, IV therapy can help. Plus, with
            minimal risks and easy, quick treatments, IV therapy is a low-risk
            option for relief. Contact our IV therapy clinic today to learn more
            and schedule your appointment.
          </p>
        </div>
        <div className="flex flex-col gap-10 relative w-full xls:w-1/2">
          <div className="flex flex-col gap-4 pl-8 border-l-2 border-primaryGreen">
            <h3 className="text-[32px] text-primaryDark font-bold">
              Fight Hangovers
            </h3>
            <p className="text-secondaryDark">
              May help you to quickly and effectively fight hangover symptoms
            </p>
          </div>
          <div className="flex flex-col gap-4 pl-8 ">
            <h3 className="text-[32px] text-primaryDark font-bold">
              Anti-Aging
            </h3>
            <p className="text-secondaryDark">
              May help lessen the appearance of fine lines and wrinkles
            </p>
          </div>
          <div className="flex flex-col gap-4 pl-8 ">
            <h3 className="text-[32px] text-primaryDark font-bold">
              Weight Loss
            </h3>
            <p className="text-secondaryDark">May help aid weight loss</p>
          </div>
          <div className="flex flex-col gap-4 pl-8 ">
            <h3 className="text-[32px] text-primaryDark font-bold">
              Immune System
            </h3>
            <p className="text-secondaryDark">
              May boost your immune system by providing it with essential
              vitamins and minerals that help fortify the immune response
            </p>
          </div>
          <div className="flex flex-col gap-4 pl-8 ">
            <h3 className="text-[32px] text-primaryDark font-bold">Energy</h3>
            <p className="text-secondaryDark">
              May provide you with energy, increase concentration, and may even
              help you beat your jet lag
            </p>
          </div>
          <div className="flex w-full absolute bottom-0 right-0 left-0 min-h-[100px] bg-primaryWhite opacity-60"></div>
        </div>
      </div>
    </>
  );
};

export default DiscoverBenefits;
