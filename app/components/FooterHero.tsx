import Image from "next/image";
import Link from "next/link";

export default function FooterHero() {
    return (
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
    )
}