import { ProductHeroBtnWrapper } from '@/app/components/ProductHero/ProductHeroBtnWrapper';
import { ProductHeroInfoWrapper } from '@/app/components/ProductHero/ProductHeroInfoWrapper';
import Image from 'next/image';
import { useProductData } from './Form/reducers/productDetailContext';
import { bookingChoice } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';

export default function ProductHero() {
    const [isInitiallyDispatched, setIsInitiallyDispatched] = useState(false);
    const { dispatch, productData } = useProductData();
    const { categories, currently_selected_product, image, productName, product_home_price, short_description, price, clinic_price_id, home_price_id, product_clinic_price, productId } = productData || {};

    const handleProductSelection = (e: any, product: { type: bookingChoice }) => {
        e.preventDefault();
        dispatch({
            type: 'SET_CURRENTLY_SELECTED_PRODUCT',
            payload: {
                ...currently_selected_product,
                type: product.type,
            }
        });
    }

    // rendered only once
    useEffect(() => {
        if (productData?.productName && !isInitiallyDispatched) {
            dispatch({
                type: 'SET_CURRENTLY_SELECTED_PRODUCT',
                payload: {
                    ...currently_selected_product,
                    product_id: productId,
                    clinic_price_id: clinic_price_id,
                    home_price_id: home_price_id,
                    productPrice: Number(price),
                    product_clinic_price: product_clinic_price,
                    product_home_price: product_home_price,
                    productImage: image,
                    productName: productName,
                    categoryName: categories?.[0] ?? '',
                    type: 'atourclinics',
                }
            });
            setIsInitiallyDispatched(true); // Mark as dispatched
        }
    }, [productData])
    return (
        <div className='hero-container h-[862px] grid grid-cols-2 items-center max-sm:grid-cols-1 max-sm:h-[969px] bg-lightBlue min-w-[215px]'>
            <section className="product-image-wrapper overflow-hidden relative h-full max-h-[728px] max-sm:max-w-full w-[749px] max-xls:w-[675px] max-[900px]:w-[110%] mx-auto max-sm:flex max-sm:justify-center max-sm:items-center min-[900px]:bg-ellipsisBG max-[900px]:bg-ellipsisMediumBG max-sm:bg-none max-sm:w-[100% ]">
                {image &&
                    <Image
                        src={image}
                        alt={productName}
                        priority
                        width={749}
                        height={728}
                        className="w-full max-w-[749px]  max-h-[728px]  h-[100%]  max-sm:max-h-[481px] max-sm:w-[251px] max-sm:scale-110"
                    />}
            </section>

            <section className="product-info-hero-wrapper flex flex-col gap-[32px] max-w-[749px] relative z-10">
                <ProductHeroInfoWrapper
                    productName={productName}
                    short_description={short_description}
                />
                <div className="booking-btn-wrapper  flex  max-sm:flex-col  max-w-[455px] gap-[px] flex-wrap justify-between max-xls:gap[99px] max-sm:gap-[12px]  max-sm:justify-center items-center max-sm:mx-auto">
                    <ProductHeroBtnWrapper
                        productPrice={`$${product_clinic_price}`}
                        buttonText={'Book In Clinic'}
                        smallText={'*At our clinic'}
                        onClick={(e) => handleProductSelection(e, {
                            type: 'atourclinics'
                        })}
                    />
                    {product_home_price ?
                        <ProductHeroBtnWrapper
                            productPrice={`$${product_home_price}`}
                            buttonText={'Book In House'}
                            smallText={'*At our locations'}
                            onClick={(e: any) => handleProductSelection(e, {
                                type: 'housecall'
                            })}
                        /> : null}
                </div>
            </section>
        </div>
    )
}