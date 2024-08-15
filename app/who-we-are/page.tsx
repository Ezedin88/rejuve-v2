import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-primaryWhite from-10% via-lightGreenFade/40 via-55% to-primaryWhite to-90%">
        <div className="flex flex-col md:flex-row justify-start items-center min-h-screen sm:justify-between gap-10 max-w-hxl mx-auto w-[90%] xls:w-[85%]">
          <div className="flex flex-col w-full md:w-1/2 gap-6 mt-32 md:mt-0">
            <h2 className="text-[32px] lg:text-[56px] font-bold text-left text-primaryDark leading-tight">
              We provide you with the most cutting-edge treatments
            </h2>
            <p className="text-secondaryDark text-base md:text-[18px]">
              We leave no stone unturned in our pursuit to provide you with the
              most cutting-edge treatments, administered by our industry-leading
              staff in a safe, clean, and luxurious clinical environment.
            </p>
          </div>
          <div className="flex max-w-[616px] max-h-[640px] w-full md:w-1/2">
            <Image
              src={'/images/doctors.png'}
              width={616}
              height={640}
              alt="doctors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center mt-[78px] items-center sm:justify-between gap-10 max-w-hxl mx-auto w-[90%] xls:w-[85%]">
        <section className="flex flex-col justify-between lg:flex-row gap-10 py-[112px]">
          <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-center text-primaryDark">
            <p className="text-base font-semibold text-left">Our Values</p>
            <h3 className="text-[32px] lg:text-[48px] leading-tight font-bold">
              Honesty, integrity, and excellence
            </h3>
          </div>
          <p className="flex w-full lg:w-1/2 text-secondaryDark lg:max-w-[584px]">
            We utilize a transparent system - our core values include honesty,
            integrity, and excellence. We are honest, don&apos;t overcharge, and
            will never pressure clients towards services they don&apos;t need or
            desire. The ultimate patient experience is our top priority and the
            heart of what we do here at Rejuve. We combine effective
            communication, medical expertise, and dedicated work to guarantee
            patient success, and will go above and beyond to ensure that results
            always exceed expectations. Excellence is our objective, and we
            provide our patients with outstanding services that are ethical and
            safe.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-20 py-5 lg:py-[110px] px-5 lg:px-16 bg-lightGrayBg w-full">
          <div className="w-full lg:w-1/2 lg:max-h-[640px]">
            <Image
              src={'/images/woman-feel.png'}
              width={650}
              height={640}
              quality={100}
              alt="woman smiling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-[32px] sm:text-[40px] text-primaryDark font-bold leading-tight">
              Committed to enhancing the way you feel
            </h3>
            <p className="text-base sm:text-[18px] text-secondaryDark">
              We have raised the bar when it comes to advancing your healthy
              lifestyle with an extensive list of therapies and services
              designed to help you boost and maintain your overall well-being.
            </p>
            <p className="text-base sm:text-[18px] text-secondaryDark">
              Rejuve&apos;s treatments are provided in a high-end, discrete, and
              comfortable atmosphere. When you come to Rejuve, you are part of
              an elite group of people who take their health and happiness
              seriously, and we make sure to treat you that way. We believe that
              IV treatments are the future of medicine and that preventative
              maintenance is crucial to ensuring health from the inside out.
              That is why we provide a range of services that target both
              internal and external well-being. With this being our first
              location, we have the vision of going nation-wide and sharing with
              more.
            </p>
            <p className="text-base sm:text-[18px] text-secondaryDark">
              If you are ready to look better, feel better, and unlock the full
              potential of your body and mind, then schedule an appointment at
              Rejuve and let us show you how we can optimize your life.
            </p>
          </div>
        </section>
      </div>

      <section className="flex w-full mt-[150px] bg-gradient-to-b from-primaryWhite from-10% via-lightGreenFade/40 via-55% to-primaryWhite to-90%">
        <div className="flex flex-col md:flex-row gap-20 justify-start max-w-2xl md:px-32 py-[112px] md:py-0 lg:mb-20 mx-auto w-[90%] xls:w-[85%]">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primaryDark w-full md:w-1/3 leading-tight">
            Why choose Rejuve?
          </h2>
          <div className="flex flex-col w-full md:w-2/3 gap-16 ">
            <div className="flex flex-col lg:flex-row w-full gap-5 sm:gap-12">
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  Certified medical practitioners
                </h3>
                <p className="text-secondaryDark text-base">
                  We have a highly selected group of certified medical
                  practitioners that undergo extensive screening and intense
                  training.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  Over 25 years of medical experience.
                </h3>
                <p className="text-secondaryDark text-base">
                  Our medical directors are professionals with over 25 years of
                  medical experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-5 sm:gap-12">
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  Biohacking technology
                </h3>
                <p className="text-secondaryDark text-base">
                  We use state-of-the-art biohacking technology to ensure
                  effective and long-lasting results.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  Research and study
                </h3>
                <p className="text-secondaryDark text-base">
                  We keep up with the most up-to-date methods and technology.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-5 sm:gap-12">
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  Individual approach to everyone
                </h3>
                <p className="text-secondaryDark text-base">
                  We offer special group rates, VIP IV and Botox parties, and
                  customized services as per client request.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] text-primaryDark font-bold leading-tight">
                  We provide 24/7 physician access
                </h3>
                <p className="text-secondaryDark text-base">
                  We provide 24/7 physician access for the VIP concierge that we
                  recommend is arranged at least 24 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default About;
