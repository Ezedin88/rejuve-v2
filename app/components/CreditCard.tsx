import Image from 'next/image';
import React from 'react';

type CreditCardProps = {
  card: {
    name: string;
    number: string;
    expiry: string;
  };
};

const CreditCard: React.FC<CreditCardProps> = ({ card }) => {
  return (
    <div className="bg-[#414952] rounded-lg gap-6 flex flex-col p-6 w-[350px] h-[215px]">
      <div className="flex justify-between items-center">
        <div className="w-10 h-6">
          <Image
            src={'/650px-Mastercard_2019_logo.png'}
            width={40}
            height={25}
            alt="card type"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center bg-[#5B646C] p-1 w-6 h-6 rounded">
          <div className="flex rounded bg-primaryGreen w-3 h-3"></div>
        </div>
      </div>

      <div className="flex justify-between text-[24px] font-medium text-primaryWhite mt-4">
        **** **** **** {card.number.slice(-4)}
      </div>

      <div className="flex justify-start gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-lightGrayBg/50 text-xs font-medium">Name</p>
          <h2 className="text-primaryWhite text-lg font-medium">{card.name}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lightGrayBg/50 text-xs font-medium">Expiry</p>
          <h2 className="text-primaryWhite text-lg font-medium">
            {card.expiry}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
