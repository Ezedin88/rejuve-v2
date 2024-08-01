import { bookingPageHero } from '../../lib/placeholder-data';
import { ProductHeroBtnWrapper } from '@/app/components/ProductHero/ProductHeroBtnWrapper';
import { ProductHeroInfoWrapper } from '@/app/components/ProductHero/ProductHeroInfoWrapper';
import Image from 'next/image';

export default function ProductHero() {
    return (
        <div className='hero-container
          h-[862px]
          grid
          grid-cols-2
            items-center
            max-sm:grid-cols-1
            max-sm:h-[969px]
            bg-lightBlue
        '>
            <section className="product-image-wrapper overflow-hidden
             relative h-full max-h-[728px] max-sm:max-w-full
            w-[749px]
            max-xls:w-[675px]
            max-[900px]:w-[110%]
            mx-auto
            max-sm:flex
            max-sm:justify-center
            max-sm:items-center
            min-[900px]:bg-ellipsisBG
            max-[900px]:bg-ellipsisMediumBG
            max-sm:bg-none
            max-sm:w-[100% ]
            ">
                <Image
                    src={bookingPageHero.productImage}
                    alt={bookingPageHero.productName}
                    priority
                    width={0}
                    height={0}
                    className="w-full max-w-[749px]  max-h-[728px]  h-[100%]  max-sm:max-h-[481px] max-sm:w-[251px] max-sm:scale-110"
                />
            </section>

            <section className="
            product-info-hero-wrapper 
            flex 
            flex-col 
            gap-[32px] 
            max-w-[749px]
            relative
            z-10
            ">
                <ProductHeroInfoWrapper
                    productName={bookingPageHero.productName}
                    productSubTitle={bookingPageHero.productSubtitle}
                    productDescription={bookingPageHero.productDescription}
                />
                <div className="
                booking-btn-wrapper 
                flex 
                max-sm:flex-col 
                max-w-[455px]
                gap-[px]
                flex-wrap
                justify-between
                max-xls:gap[99px]
                max-sm:gap-[12px] 
                max-sm:justify-center items-center
                max-sm:mx-auto
                ">
                    <ProductHeroBtnWrapper
                        productPrice={'$120'}
                        buttonText={'Book In Clinic'}
                        smallText={'*At our locations'}
                    />
                    <ProductHeroBtnWrapper
                        productPrice={'$120'}
                        buttonText={'Book In Clinic'}
                        smallText={'*At our locations'}
                    />
                </div>
            </section>
        </div>
    )
}