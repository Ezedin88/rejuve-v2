import { IBook } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function VisitClinic({ bookItem, key }: {
    bookItem: IBook,
    key: number
}) {
    const { background_color, description, image, title } = bookItem ?? {};
    const converted_background_color = background_color?.toLowerCase();
    return (
        <div className="flex  flex-col w-full xls:w-1/2">
            <div className={`flex flex-col justify-center gap-6 px-12 py-9 bg-[${converted_background_color ?? "lightGrayBg"}] xls:h-[289px]`}>
                <h3 className="text-[40px] font-bold">{title}</h3>
                <div className="text-secondaryDark"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <Link
                    href="/checkmenu"
                    className="flex gap-2 items-center text-primaryGreen font-semibold mt-4 rounded-lg"
                >
                    Check Menu
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
            <div className="w-full h-[437px]">
                <Image
                    src={image?.url}
                    width={400}
                    height={437}
                    quality={100}
                    alt={image?.title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}