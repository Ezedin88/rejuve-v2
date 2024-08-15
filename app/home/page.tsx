import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Reviews from '../components/Reviews';
import { fetchFrontPageContent, fetchProducts } from '../lib/client';
import FrontPageHero from '../components/HeroSections/FrontPageHero';
import Offerings from '../components/FrontPage/Offerings';
import IVDripsHero from '../components/FrontPage/IVDripsHero';
import VisitClinic from '../components/FrontPage/VisitClinic';
import { IBook } from '../lib/definitions';

const Home = async () => {
  const productData = await fetchProducts();
  const frontPageContent = await fetchFrontPageContent();
  const { hero, homepage_content } = frontPageContent ?? {};
  const { title: heroTitle, button, description } = hero ?? {};
  const { title } = button ?? {};
  const { section_title } = homepage_content?.[1] ?? {};
  const { book } = homepage_content?.[2] ?? {};
  console.log('the book==>', book);
  return (
    <>
      <FrontPageHero title={heroTitle} subtitle={description} btnContent={title} />

      <div className="max-w-[1480px] flex items-center flex-col gap-[150px] w-[90%] xls:w-[85%] mx-auto">
        <Offerings homepage_content={homepage_content} />

        {/* IV Drips */}
        <section className="flex flex-col gap-[107px] w-full min-h-screen relative">
          <IVDripsHero section_title={section_title} />
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
          {
            book?.length > 0 && book.map((item: IBook, key: number) => {
              return (
                <VisitClinic bookItem={item} key={key} />
              )
            })
          }
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
