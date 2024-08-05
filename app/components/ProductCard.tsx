import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductCardProps = {
  product: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6">
      <Link
        href={product.link}
        className="flex flex-col gap-6 justify-center items-center w-full"
      >
        <div className="w-full h-full max-h-[290px]">
          <Image
            src={product.image}
            width={340}
            height={290}
            quality={100}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-[18px] text-center">
          {product.title}
        </h3>
        <p className="text-[13px] text-center">{product.description}</p>
      </Link>
      <Link
        href={product.link}
        className="px-5 py-2 min-w-[153px] mx-auto flex items-center justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded mt-8 text-white w-fit"
      >
        Book Now
      </Link>
    </div>
  );
};

export default ProductCard;
