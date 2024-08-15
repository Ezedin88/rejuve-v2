'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Reviews from '../components/Reviews';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/client';

const Home = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    async function getProducts() {
      const res = await fetchProducts();
      if (res) {
        const products = res?.sort((a: any, b: any) => a.name?.localeCompare(b.name));
        setProductData(products);
      } else {
        setProductData([]);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <section className="flex flex-col justify-start sm:justify-center mx-auto items-start w-full h-[80vh] sm:h-screen bg-cover mt-5 sm:mt-0 bg-center bg-no-repeat bg-opacity-20 bg-blur-5xl bg-primaryWhite bg-hero-image relative">
        <div className="max-w-hxl mx-auto absolute top-5 sm:relative flex flex-col justify-center gap-10 bg-gradient-to-b from-primaryWhite from-70% via-white via-80% to-transparent to-100% sm:bg-none h-fit w-full sm:w-[90%] xls:w-[85%] py-0 pt-20 sm:py-[54px] self-start max-h-[280px] sm:max-h-full z-20">
          <h2 className="text-[32px] sm:text-[64px] text-center sm:text-left font-bold text-primaryDark text-balance max-w-[840px] leading-tight">
            Discover Your Path to Total Optimization
          </h2>
          <p className="text-base text-secondaryDark sm:text-[24px] text-center sm:text-left text-balance max-w-[840px] leading-tight">
            with In-Clinic Advanced Therapies, Medical Aesthetics, and Mobile IV
            Therapy
          </p>
          <Link
            href="/iv-therapy"
            className="px-8 py-5 min-w-[265px] flex justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded w-fit mx-auto sm:mx-0"
          >
            Book IV Therapy
          </Link>
        </div>
        <div
          className="w-full flex sm:hidden max-h-[450px] h-full mt-[224px] relative"
          style={{
            backgroundImage: "url('/Hero-Image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-primaryWhite from-20% to-primaryWhite/10 to-35%"></div>
        </div>
      </section>

      <div className="max-w-[1480px] flex items-center flex-col gap-[150px] w-[90%] xls:w-[85%] mx-auto">
        <section className="flex flex-col gap-10 sm:gap-[107px] w-full min-h-screen">
          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-[32px] sm:text-[48px] w-full font-bold text-left sm:text-center max-w-[1236px] text-primaryDark text-balance">
              Our Comprehensive Offerings
            </h2>
            <p className="text-[18px] text-secondaryDark max-w-[1236px] text-left sm:text-center">
              Rejuve offers a diverse range of services designed to cater to
              your holistic well-being. Explore our comprehensive offerings,
              including advanced therapies, medical aesthetics treatments, and
              mobile IV therapy.
            </p>
          </div>
          <div className="flex flex-col xls:flex-row gap-6 w-full text-primaryDark">
            <div className="flex flex-col w-full xls:w-1/2">
              <div className="flex w-full xls:max-w-[728px] h-full max-h-[165px] md:max-h-[375px] xls:max-h-[453px] rounded-t-2xl">
                <Image
                  src={'/images/section-content-01.png'}
                  width={1220}
                  height={375}
                  quality={100}
                  alt="sitting woman"
                  className="w-full rounded-t-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 p-12 w-full xls:h-[453px] bg-lightGreen">
                <p className="font-semibold text-base">IV Therapy</p>
                <h2 className="font-semibold whitespace-nowrap text-[20px] sm:text-[40px] leading-tight w-full">
                  Get The Best of You <br /> Get IV Therapy
                </h2>
                <p className="text-secondaryDark mt-4">
                  Our safe and effective medical procedure delivers essential
                  vitamins, minerals, and amino acids directly into your
                  bloodstream. Administered by trained professionals, this
                  method ensures that your body can use these nutrients quickly
                  and effectively to help you feel your best.
                </p>
                <Link
                  href="/iv-therapy"
                  className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                >
                  View Therapies
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full xls:w-1/2 gap-6">
              <div className="flex flex-col sm:flex-row h-full sm:max-h-[362px] xls:max-h-[440px] xls:h-1/2">
                <div className="flex items-center justify-center w-full sm:w-1/2 h-full max-h-[165px] sm:max-h-[362px] xls:max-h-[440px] overflow-hidden rounded-t-lg sm:rounded-t-none">
                  <Image
                    src={'/images/section-content-02.png'}
                    width={375}
                    height={450}
                    quality={100}
                    alt="beauty-treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center p-12 sm:px-6 sm:py-[70px] 2xl:px-12 w-full sm:w-1/2 bg-lighterGrayBg">
                  <p className="font-semibold">Beauty Treatments</p>
                  <h2 className="text-[24px] font-bold text-left mb-2">
                    Your Trusted Beauty Clinic in Sherman Oaks
                  </h2>
                  <p className="text-secondaryDark">
                    Our selection of treatments is carefully chosen to help
                    enhance your natural features and accentuate your individual
                    beauty.
                  </p>
                  <Link
                    href="/iv-therapy"
                    className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                  >
                    View Therapies
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row h-full xls:max-h-[440px] xls:h-1/2">
                <div className="flex items-center justify-center w-full sm:w-1/2 h-full max-h-[165px] sm:max-h-[362px] xls:max-h-[440px] overflow-hidden rounded-t-lg sm:rounded-t-none">
                  <Image
                    src={'/images/section-content-03.png'}
                    width={375}
                    height={450}
                    quality={100}
                    alt="beauty-treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center p-12 sm:p-6 2xl:px-12 w-full sm:w-1/2 bg-lighterGrayBg">
                  <p className="font-semibold">Membership & Packages</p>
                  <h2 className="text-[24px] font-bold text-left mb-2">
                    Your Trusted Beauty Clinic in Sherman Oaks
                  </h2>
                  <p className="text-secondaryDark">
                    We take pride in offering a wide-ranging selection of
                    cutting-edge therapies to help you look and feel your best.
                  </p>
                  <Link
                    href=""
                    className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                  >
                    View More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IV Drips */}
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
            {productData?.filter((p: any) => p.image && p.product_slug?.includes("iv-treatment"))?.slice(0, 12)?.map((product: any) => (
              <ProductCard key={product?.id} product={product} />
            ))}
            <div className="flex absolute justify-center items-center bg-gradient-to-t from-primaryWhite from-10% via-primaryWhite via-70% to-transparent to-100% min-h-[420px] w-full bottom-0 text-[20px] z-10">
              <Link
                href="/iv-therapy"
                className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
              >
                View Therapies
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Visit Clinic */}
        <section className="flex flex-col xls:flex-row gap-9 w-full">
          <div className="flex  flex-col w-full xls:w-1/2">
            <div className="flex flex-col justify-center gap-6 px-12 py-9 bg-lightGrayBg xls:h-[289px]">
              <h3 className="text-[40px] font-bold">Visit a Rejuve Clinic</h3>
              <p className="text-secondaryDark">
                Select your treatment and book your appointment with a qualified
                medical professional at Rejuve Med Spa.
              </p>
              <Link
                href=""
                className="flex gap-2 items-center text-primaryGreen font-semibold mt-4 rounded-lg"
              >
                Check Menu
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                </span>
              </Link>
            </div>
            <div className="w-full h-[437px]">
              <Image
                src={'/images/visit-clinic.png'}
                width={400}
                height={437}
                quality={100}
                alt="visit-clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex  flex-col w-full xls:w-1/2">
            <div className="flex flex-col justify-center gap-6 px-12 py-9 bg-lightGrayBg xls:h-[289px]">
              <h3 className="text-[40px] font-bold">Book a House Call</h3>
              <p className="text-secondaryDark">
                Sit back, relax, and enjoy our services at your location of
                choice; our medical practitioners will come to you.
              </p>
              <Link
                href=""
                className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
              >
                Check Menu
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                </span>
              </Link>
            </div>
            <div className="w-full h-[437px]">
              <Image
                src={'/images/book-housecall.png'}
                width={400}
                height={437}
                quality={100}
                alt="visit-clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="flex flex-col gap-6 w-full">
          <div className="flex flex-col xls:flex-row gap-10 w-full mb-[75px]">
            <div className="flex flex-col gap-4 justify-start w-full xls:w-1/2">
              <p className="text-primaryGreen font-semibold">About Us</p>
              <h2 className="text-2xl sm:text-5xl font-bold">
                Rejuve&apos;s Mission: Empowering Your
                <span className="text-primaryGreen"> Health </span> with
                <span className="text-primaryGreen"> Biohacking </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 justify-start w-full xls:w-1/2">
              <div className="flex flex-col gap-12 text-secondaryDark">
                <p className="text-base sm-text-[18px] text-justify hyphens-auto leading-7">
                  Rejuve is committed to
                  <span className="font-semibold"> empowering </span> your
                  health with the latest
                  <span className="font-semibold">biohacking techniques.</span>
                  Biohacking involves leveraging advanced science, medicine, and
                  technology to optimize your biology and enhance your overall
                  health. Our cutting-edge therapies are designed to induce
                  significant changes in how you
                  <span className="font-semibold"> feel, look, </span>and
                  <span className="font-semibold"> function, </span> so you can
                  take control of your health and live your best life. With
                  biohacking, prevention is taken to the next level. Discover
                  the many benefits of biohacking and experience optimal health
                  and vitality with Rejuve.
                </p>
                <ul className="list-disc pl-4 text-[12px] xls:text-base">
                  <li>Premier biohacking treatment provider.</li>
                  <li>
                    Highly professional staff that administer our treatments
                  </li>
                  <li>The most cutting-edge therapies and services.</li>
                  Treatments provided in a safe and clean environment.
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-h-925px] h-full">
            <Image
              src={'/images/consultation-home.png'}
              width={1480}
              height={1000}
              alt="consultation session"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Reviews */}
        <section className="flex flex-col gap-6 w-full">
          <h3 className="text-[24px] sm:text-5xl font-bold text-left sm:text-center w-[344px] sm:w-full">
            Most recent customer
            <span className="text-primaryGreen"> reviews </span>
          </h3>
          <p className="text-[14px] sm:text-lg text-secondaryDark text-left sm:text-center w-[344px] sm:w-full">
            Check out what our clients have to say about us and see why we are
            the most trusted Med Spa in all of Los Angeles.
          </p>
          <div className="flex mt-6 relative h-full mb-24 md:mb-0">
            <Reviews />
          </div>
        </section>
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

export default Home;
