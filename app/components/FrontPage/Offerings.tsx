import { IFrontPageContent, IHomePageContent } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Offerings({ homepage_content }: { homepage_content: IHomePageContent[] }) {

    const { features_title, features } = homepage_content?.[0];
    return (
        <section className="flex flex-col gap-10 sm:gap-[107px] w-full min-h-screen">
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-[32px] sm:text-[48px] w-full font-bold text-left sm:text-center max-w-[1236px] text-primaryDark text-balance"
                    dangerouslySetInnerHTML={{ __html: features_title.title }}
                />
                <div className="text-[18px] text-secondaryDark max-w-[1236px] text-left sm:text-center"
                    dangerouslySetInnerHTML={{ __html: features_title.description }}
                />
            </div>
            <div className="flex flex-col xls:flex-row gap-6 w-full text-primaryDark">
                <div className="flex flex-col w-full xls:w-1/2">
                    <div className="flex w-full xls:max-w-[728px] h-full max-h-[165px] md:max-h-[375px] xls:max-h-[453px] rounded-t-2xl">
                        {features?.[0]?.image?.url &&
                            <Image
                                src={features?.[0]?.image?.url}
                                width={1220}
                                height={375}
                                quality={100}
                                alt={features?.[0]?.image?.title}
                                className="w-full rounded-t-xl object-cover"
                            />}
                    </div>
                    <div className="flex flex-col justify-center gap-2 p-12 w-full xls:h-[453px] bg-lightGreen">
                        <p className="font-semibold text-base">{features?.[0]?.sub_title}</p>
                        <h2 className="font-semibold whitespace-nowrap text-[20px] sm:text-[40px] leading-tight w-full"
                            dangerouslySetInnerHTML={{ __html: features?.[0]?.title }}
                        />
                        <div className="text-secondaryDark mt-4"
                            dangerouslySetInnerHTML={{ __html: features?.[0]?.description }}
                        />
                        <Link
                            href="/iv-therapy"
                            className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                        >
                            {features?.[0]?.button.title}
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
                <div className="flex flex-col w-full xls:w-1/2 gap-6">
                    <div className="flex flex-col sm:flex-row h-full sm:max-h-[362px] xls:max-h-[440px] xls:h-1/2">
                        <div className="flex items-center justify-center w-full sm:w-1/2 h-full max-h-[165px] sm:max-h-[362px] xls:max-h-[440px] overflow-hidden rounded-t-lg sm:rounded-t-none">
                            {
                                features?.[1]?.image?.url &&
                                <Image
                                    src={features?.[1]?.image?.url}
                                    width={375}
                                    height={450}
                                    quality={100}
                                    alt={features?.[1]?.image?.title}
                                    className="w-full h-full object-cover"
                                />
                            }
                        </div>
                        <div className="flex flex-col gap-2 justify-center p-12 sm:px-6 sm:py-[70px] 2xl:px-12 w-full sm:w-1/2 bg-lighterGrayBg">
                            <p className="font-semibold">
                                {/* subtitle */}
                                {features?.[1]?.sub_title}
                            </p>
                            <h2 className="text-[24px] font-bold text-left mb-2">
                                {features?.[1]?.title}
                            </h2>
                            <div className="text-secondaryDark" dangerouslySetInnerHTML={{ __html: features?.[1]?.description }} />
                            <Link
                                href="/iv-therapy"
                                className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                            >
                                {features?.[1]?.button.title}
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
                    <div className="flex flex-col sm:flex-row h-full xls:max-h-[440px] xls:h-1/2">
                        <div className="flex items-center justify-center w-full sm:w-1/2 h-full max-h-[165px] sm:max-h-[362px] xls:max-h-[440px] overflow-hidden rounded-t-lg sm:rounded-t-none">
                            {
                                features?.[2]?.image?.url &&
                                <Image
                                    src={features?.[2]?.image?.url}
                                    width={375}
                                    height={450}
                                    quality={100}
                                    alt={features?.[2]?.image?.title}
                                    className="w-full h-full object-cover"
                                />
                            }
                        </div>
                        <div className="flex flex-col gap-2 justify-center p-12 sm:p-6 2xl:px-12 w-full sm:w-1/2 bg-lighterGrayBg">
                            <p className="font-semibold">{features?.[2]?.sub_title}</p>
                            <h2 className="text-[24px] font-bold text-left mb-2">
                                {features?.[2]?.title}
                            </h2>
                            <div className="text-secondaryDark"
                                dangerouslySetInnerHTML={{ __html: features?.[2]?.description }}
                            />
                            <Link
                                href=""
                                className="flex gap-2 items-center text-primaryGreen font-semibold mt-4"
                            >
                                {features?.[2]?.button.title}
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
                </div>
            </div>
        </section>
    )
}