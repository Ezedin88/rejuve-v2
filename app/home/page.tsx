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
import FooterHero from '../components/FooterHero';

const Home = async () => {
  const productData = await fetchProducts();
  const frontPageContent = await fetchFrontPageContent();
  const { hero, homepage_content } = frontPageContent ?? {};
  const { title: heroTitle, button, description } = hero ?? {};
  const { title } = button ?? {};
  const { section_title } = homepage_content?.[1] ?? {};
  const { book } = homepage_content?.[2] ?? {};
  const { content } = homepage_content?.[3] ?? {};

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
      <FooterHero />
    </>
  );
};

export default Home;
