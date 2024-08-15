import Styles from "@/app/ui/styles/IvHero.module.css";
import { IHero } from "@/app/lib/definitions";
import Link from "next/link";

export default function IVTherapyHero({
    heroContent
}: {
    heroContent: IHero
}) {
    const { title, description, button, iv_image } = heroContent ?? {};
    return (
        <section className="flex flex-col justify-start sm:justify-center mx-auto items-start w-full h-[80vh] sm:h-screen bg-cover mt-5 sm:mt-0 bg-center bg-no-repeat bg-opacity-20 bg-blur-5xl bg-primaryWhite bg-iv-therapy-image relative">
            <div className="iv-hero absolute top-20 sm:relative flex flex-col items-center justify-center gap-8 sm:gap-10 bg-gradient-to-b from-primaryWhite from-70% via-primaryWhite via-80% to-transparent to-100% sm:bg-none h-fit w-full py-0 pt-20 pl-0 sm:pl-[42%] pr-0 sm:pr-[72px] sm:py-[54px] px-8 sm:px-0 max-h-[280px] sm:max-h-full z-20">
                <div className={`text-[24px] sm:text-[48px] text-center sm:text-left font-bold text-primaryDark leading-tight ${Styles.hero_span}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <div className="flex flex-col px-6 sm:px-0">
                    <div className="text-[12px] sm:text-base text-secondaryDark text-center sm:text-left leading-normal"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
                <Link
                    href="/iv-therapy"
                    className="px-8 py-5 min-w-[185px] flex justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded w-fit mx-auto sm:mx-0"
                >
                    {button?.title}
                </Link>
            </div>
            <div
                className="w-full flex sm:hidden h-full mt-[200px] relative"
                style={{
                    backgroundImage: `url(${iv_image?.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-primaryWhite from-20% to-primaryWhite/10 to-75%"></div>
            </div>
        </section>
    );
}