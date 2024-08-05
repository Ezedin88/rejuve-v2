import Image from 'next/image';

const Parallax = () => {
  return (
    <section className="scroll-container relative flex flex-col items-center bg-lightBlue rounded-xl max-w-hxl max-h-full lg:max-h-[720px] overflow-y-auto overflow-x-hidden gap-0 lg:gap-[50px] mx-auto">
      <div className="top-0 z-0 flex min-h-full lg:min-h-[720px] flex-col justify-center lg:max-h-[720px] lg:flex-row max-h-full w-full mx-auto gap-[60px] bg-lightBlue p-10 lg:sticky rounded-xl">
        <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 flex-1">
          <h1 className="text-[18px] font-semibold text-primaryGreen">
            Discover the Benefits of IV Therapy
          </h1>
          <h2 className="text-[32px] font-bold leading-tight">
            It can dramatically help boost your immune system and provide you
            with the energy and vitamins that you need
          </h2>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            Even if you eat a healthy diet, your body may not absorb all of the
            necessary nutrients. Processed foods and digestive disorders can
            further reduce your nutrient intake. While vitamin supplements can
            help, they are often only absorbed at a rate of about 50%. IV
            therapy delivers vitamins and nutrients directly into your
            bloodstream for an absorption rate of up to 90%
          </p>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            While IV therapy is not a proven preventative measure for disease,
            it can effectively boost your immune system and provide the vitamins
            and energy you need. Ready to experience the benefits of IV therapy?
            Contact our Sherman Oaks IV therapy clinic today to schedule an
            in-clinic appointment or a convenient house-call within the Los
            Angeles area.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 max-h-[352px] lg:max-h-full flex-1">
          <Image
            src={'/images/woman-parallax.png'}
            width={800}
            height={800}
            alt="IV Therapy Benefits Image"
            className="w-full h-full object:cover lg:object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="top-5 z-10 flex min-h-full lg:min-h-[720px] flex-col justify-center lg:max-h-[720px] lg:flex-row max-h-full w-full mx-auto gap-[60px] bg-lightPink p-10 sticky rounded-xl">
        <div className="flex flex-col gap-6 justify-center w-full lg:w-1/2 flex-1">
          <h1 className="text-brightPink text-base sm:text-[18px] font-semibold">
            Does IV Therapy Work?
          </h1>
          <h2 className="text-[24px] sm:text-[32px] font-bold leading-tight">
            Research shows that IV drip therapy is more effective than the oral
            consumption of vitamins
          </h2>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            Studies have shown that IV drip therapy is more effective than
            taking vitamins orally. Unlike oral consumption, IV therapy delivers
            essential vitamins, amino acids, and minerals directly into your
            bloodstream for optimal absorption. This can lead to up to 90% more
            absorption, compared to just 50% with oral consumption. With
            increased cell uptake and immune system support, you may notice the
            benefits of IV therapy for several days after treatment. To achieve
            long-term benefits, regular IV therapy sessions can help you reach
            your health goals. Contact our team at Rejuve to schedule a
            consultation and learn more about how IV therapy can improve your
            overall wellness.
          </p>
        </div>
        <div className="flex flex-col justify-center w-full max-h-[352px] h-full lg:max-h-full lg:w-1/2 flex-1">
          <Image
            src={'/images/smile-parallax.png'}
            width={800}
            height={800}
            alt="IV Therapy Benefits Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="top-10 z-20 flex min-h-full lg:min-h-[680px] flex-col justify-center max-h-full lg:max-h-[720px] lg:flex-row w-full mx-auto gap-[60px] bg-lightGreen p-10 sticky rounded-xl">
        <div className="flex flex-col w-full lg:w-1/2 gap-6 justify-center flex-1">
          <h1 className="text-secondaryGreen text-[18px] font-semibold">
            What is IV Therapy?
          </h1>
          <h2 className="text-[24px] sm:text-[32px] font-bold">
            IV therapy is a restorative treatment
          </h2>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            IV therapy is a restorative treatment that delivers essential
            vitamins, amino acids, and minerals directly into your bloodstream.
            By administering these nutrients through an IV drip, your body can
            absorb them quickly and effectively without losing any through
            digestion.
          </p>
          <p className="text-base sm:text-[18px] text-secondaryDark">
            This treatment involves injecting a fluid containing the necessary
            vitamins and minerals directly into your vein, which enhances the
            therapy&apos;s effectiveness and allows it to travel quickly through
            your bloodstream. Whether you need to replace electrolytes, provide
            antioxidants, or reduce stress, IV therapy can help you feel
            healthier overall. Contact Rejuve today to schedule a free
            consultation and discover how personalized IV therapy sessions can
            help you achieve your health and wellness goals.
          </p>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2 max-h-[352px] lg:max-h-full flex-1">
          <Image
            src={'/images/iv-drip.png'}
            width={800}
            height={800}
            alt="IV Therapy Benefits Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Parallax;
