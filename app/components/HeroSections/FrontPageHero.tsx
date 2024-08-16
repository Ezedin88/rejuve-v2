import Link from "next/link";

export default function FrontPageHero(
    { title, subtitle, btnContent }:
        {
            title: string,
            subtitle: string,
            btnContent: string
        }
) {
    return (
        <section className="flex flex-col justify-start sm:justify-center mx-auto items-start w-full h-[80vh] sm:h-screen bg-cover mt-5 sm:mt-0 bg-center bg-no-repeat bg-opacity-20 bg-blur-5xl bg-primaryWhite bg-hero-image relative">
            <div className="max-w-hxl mx-auto absolute top-5 sm:relative flex flex-col justify-center gap-10 bg-gradient-to-b from-primaryWhite from-70% via-white via-80% to-transparent to-100% sm:bg-none h-fit w-full sm:w-[90%] xls:w-[85%] py-0 pt-20 sm:py-[54px] self-start max-h-[280px] sm:max-h-full z-20">
                <h2 className="text-[32px] sm:text-[64px] text-center sm:text-left font-bold text-primaryDark text-balance max-w-[840px] leading-tight">
                    {title}
                </h2>
                <p className="text-base text-secondaryDark sm:text-[24px] text-center sm:text-left text-balance max-w-[840px] leading-tight">
                    {subtitle}
                </p>
                <Link
                    href="/iv-therapy"
                    className="px-8 py-5 min-w-[265px] flex justify-center font-semibold text-base bg-primaryGreen text-primaryWhite rounded w-fit mx-auto sm:mx-0"
                >
                    {btnContent}
                </Link>
            </div>
            <div
                className="w-full flex sm:hidden max-h-[450px] h-full mt-[224px] relative"
                style={{
                    backgroundImage: "url('/Hero-Image.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-primaryWhite from-20% to-primaryWhite/10 to-35%"></div>
            </div>
        </section>
    )
}