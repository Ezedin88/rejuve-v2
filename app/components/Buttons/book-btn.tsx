import { ButtonHTMLAttributes } from "react";

export default function BookBtn({
  children,
  onclick,
  type
}: {
  children: React.ReactNode,
  onclick?: (e: any) => void,
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}) {
  return (
    <button
      type={`${type ?? 'button'}`}
      onClick={onclick}
      className="
                       text-center
                       lg:font-inter
                       lg:font-bold
                       lg:text-[16px]
                       lg:leading-[19px]
                       text-white
                       bg-primaryGreen
                       rounded-[5px]
                       p-4
                       w-[166px]
                       h-[59px]
                       cursor-pointer
                       active:scale-105
                       hover:bg-primaryGreenHover
                       transition
                       duration-200
                       max-[167px]:w-[100%]
                    "
    >
      {children}
    </button>
  );
}
