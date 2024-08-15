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
import AboutUsContent from '../components/FrontPage/AboutUs';

const Home = async () => {
  const productData = await fetchProducts();
  const frontPageContent = await fetchFrontPageContent();
  const { hero, homepage_content } = frontPageContent ?? {};
  const { title: heroTitle, button, description } = hero ?? {};
  const { title } = button ?? {};
  const { section_title } = homepage_content?.[1] ?? {};
  const { book } = homepage_content?.[2] ?? {};
  const { content } = homepage_content?.[3] ?? {};
  const { title: mission_title, sub_title, image } = content ?? {};
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
        <AboutUsContent content={content} />

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
