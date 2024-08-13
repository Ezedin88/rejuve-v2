import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductCardProps } from '../lib/mainTypes';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return product &&
    (<div className="flex flex-col gap-6">
      <Link
        href={`/product/${product?.slug}`}
        className="flex flex-col gap-6 justify-center items-center w-full"
      >
        <div className="w-full h-full max-h-[290px]">
          <Image
            src={product?.image}
            width={340}
            height={290}
            quality={100}
            alt={product?.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-[18px] text-center">
          {product?.name}
        </h3>
        <div
          className="product-description text-[13px] text-center overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
          dangerouslySetInnerHTML={{ __html: product?.short_description }}
        />
      </Link>
      <Link
        href={`/product/${product?.slug}`}
        className="px-5 py-2 min-w-[153px] mx-auto flex items-center justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded mt-8 w-fit"
      >
        Book Now
      </Link>
    </div>)
};

export default ProductCard;
