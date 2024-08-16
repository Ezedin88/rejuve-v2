"use client";
import { SmallIcon } from "@/app/components/Icons/Icon";
import { IMenuItem, TMenuData } from "@/app/lib/definitions";
import { getAbsolutePath, sanitizeTitle } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderContent({ megaMenuList }: {
    megaMenuList: TMenuData
}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isIvExpanded, setIsIvExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);


    const toggleIvExpand = (e: React.MouseEvent<SVGElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsIvExpanded(!isIvExpanded);
    };

    const toggleAboutExpand = (e: React.MouseEvent<SVGElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAboutExpanded(!isAboutExpanded);
    };

    useEffect(() => {
        setIsOpen(false);
        setIsIvExpanded(false);
        setIsAboutExpanded(false);
    }, []);

    const primaryMenuItems = megaMenuList?.[1]?.items;

    return (
        <div className="flex items-center justify-between gap-10 max-w-hxl h-full mx-auto w-[90%] xls:w-[85%]">
            <Link href="/" className="w-36 h-10">
                <Image
                    src={'/Logo.svg'}
                    width={138}
                    height={35}
                    quality={100}
                    alt="rejuve logo"
                    className="w-full h-full object-cover bg-primaryWhite"
                />
            </Link>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex xls:hidden text-primaryGreen"
            >
                {!isOpen ? (
                    <SmallIcon
                        icon="/megaMenuHumberger.svg"
                    />
                ) : (
                    <SmallIcon
                        icon="/megaMenuCloseIcon.svg"
                    />
                )}
            </button>

            <ul className="gap-8 text-base hidden xls:flex">
                {
                    primaryMenuItems?.map((menu: IMenuItem, key: number) => {
                        const { title, children, url: baseUrl } = menu ?? {};
                        const url = getAbsolutePath(baseUrl);

                        return (
                            title?.toLowerCase() !== 'about us' && !title?.toLocaleLowerCase().startsWith('call us') && children?.length > 10 ?
                                <li className="group py-7 items-stretch relative" key={key}>
                                    <Link
                                        href={url}
                                        className="whitespace-nowrap flex gap-2 items-center hover:text-primaryGreen transition-colors duration-200"
                                    >
                                        <p>{title}</p>
                                        <SmallIcon icon="/nav-chevron-down.svg" width={20} />
                                    </Link>
                                    <div className="group-hover:hidden xls:group-hover:block w-screen left-0 right-0 fixed bg-primaryWhite text-primaryDark top-[78px] shadow-lg hidden z-50">
                                        <div className="block w-full mx-auto leading-normal">
                                            <div className="w-[90%] flex gap-10 mx-auto max-w-hxl xls:w-[85%]">
                                                <div className="grid grid-cols-3 gap-y-4 py-10">
                                                    {children?.slice(0, 15).map((child: IMenuItem, key: number) => {
                                                        const { url: baseUrl } = child ?? {};
                                                        const url = getAbsolutePath(baseUrl);
                                                        return (
                                                            <Link
                                                                href={url}
                                                                key={key}
                                                                className="flex flex-col p-2 hover:bg-headerHover transition-colors duration-200 pr-4 max-w-[288px]"
                                                            >
                                                                <h3 className="text-base font-semibold">
                                                                    {child.title}
                                                                </h3>
                                                                <p className="text-secondaryDark text-[14px]">
                                                                    {child.short_description}
                                                                </p>
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col ml-auto gap-4 w-[416px] bg-lightGreen justify-center items-start px-16">
                                                    <h2 className="text-xl text-left font-semibold">
                                                        Learn more about IV Therapy
                                                    </h2>
                                                    <div className="w-72 h-48">
                                                        <Image
                                                            src={'/blog.png'}
                                                            width={288}
                                                            height={188}
                                                            alt="blog"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="text-xl text-left font-semibold">
                                                        Get the Best of You Get IV Therapy
                                                    </h3>
                                                    <p className="w-full text-balance">
                                                        If you&apos;ve ever had food poisoning, woken up with a
                                                        nasty hangover, or had jet lag after
                                                    </p>
                                                    <Link
                                                        href="/learn-more"
                                                        className="text-xl text-primaryGreen font-semibold"
                                                    >
                                                        Learn more &gt;
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> :
                                <li className="relative group py-7 items-stretch">
                                    <Link
                                        href={url}
                                        className="whitespace-nowrap flex gap-2 items-center hover:text-primaryGreen transition-colors duration-200"
                                    >
                                        <p>{sanitizeTitle(title)}</p>
                                        {children?.length ? <SmallIcon icon="/nav-chevron-down.svg" width={20} /> : null}
                                    </Link>
                                    <div className="group-hover:hidden xls:group-hover:block absolute bg-primaryWhite text-primaryDark w-80 left-0 top-[78px] shadow-lg hidden">
                                        <div className="flex flex-col">
                                            {
                                                children?.map((child: IMenuItem, key: number) => {
                                                    const { url: baseUrl } = child ?? {};
                                                    const url = getAbsolutePath(baseUrl);
                                                    return (
                                                        <Link
                                                            href={url}
                                                            key={key}
                                                            className="w-full px-4 py-4  hover:text-primaryGreen font-semibold transition-colors duration-200"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li> ||
                                title?.toLocaleLowerCase().startsWith('call us') &&
                                <li className="py-7 items-stretch">
                                    <Link
                                        href={url}
                                        className="whitespace-nowrap flex gap-2 items-center hover:text-primaryGreen transition-colors duration-200"
                                    >
                                        {title}
                                    </Link>
                                </li>
                        )
                    })
                }
            </ul>

            {isOpen && (
                <div className="flex flex-col gap-6 xls:hidden absolute top-[78px] left-0 right-0 bg-primaryWhite shadow-lg p-8 h-screen overflow-y-scroll pb-64">
                    <div className="flex justify-between gap-2 items-center hover:text-primaryGreen">
                        <Link
                            href="/iv-therapy"
                            onClick={() => setIsOpen(!isOpen)}
                            className="whitespace-nowrap flex flex-1 gap-2 items-center justify-between transition-colors duration-200"
                        >
                            <span className="font-semibold text-[18px]">IV Therapy</span>
                        </Link>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col cursor-pointer"
                            onClick={(e) => toggleIvExpand(e)}
                        >
                            {isIvExpanded ? (
                                <path
                                    d="M18 15L12 9L6 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </svg>
                    </div>

                    {isIvExpanded && (
                        <div className="block xls:hidden">
                            <p className="font-semibold text-base">
                                Learn more about IV Therapy
                            </p>
                            <p className="text-[14px] text-secondaryDark py-3">
                                If you&apos;ve ever had food poisoning, woken up with a nasty
                                hangover, or had jet lag after
                            </p>
                            <Link
                                href="/learn-more"
                                className="py-2 text-xl text-primaryGreen font-semibold"
                            >
                                Learn more &gt;
                            </Link>

                            <div className="w-full flex flex-col gap-10 mx-auto">
                                <div className="flex flex-col gap-6 pt-10">
                                    {megaMenuList?.map((menu: any) => (
                                        <Link
                                            href="/hangover-fix"
                                            key={menu.id}
                                            className="flex flex-col gap-2 hover:text-primaryGreen transition-colors duration-200"
                                        >
                                            <h3 className="text-base font-semibold">
                                                {menu.menu_text}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <hr className="border-b border-horizontalLine/50" />

                    <div className="flex justify-between gap-2 items-center hover:text-primaryGreen">
                        <Link
                            href="/who-we-are"
                            onClick={() => setIsOpen(!isOpen)}
                            className="whitespace-nowrap flex flex-1 gap-2 items-center justify-between transition-colors duration-200"
                        >
                            <span className="font-bold text-[18px]">About Us</span>
                        </Link>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col cursor-pointer"
                            onClick={(e) => toggleAboutExpand(e)}
                        >
                            {isAboutExpanded ? (
                                <path
                                    d="M18 15L12 9L6 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </svg>
                    </div>

                    {isAboutExpanded && (
                        <div className="flex flex-col xls:hidden">
                            <Link
                                href="/who-we-are"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full py-2 hover:text-primaryGreen font-semibold transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/the-doctor"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full py-2 hover:text-primaryGreen font-semibold transition-colors duration-200"
                            >
                                The Doctor
                            </Link>
                            <Link
                                href="/contact-us"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full py-2  hover:text-primaryGreen font-semibold transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>
                    )}

                    <hr className="border-b border-horizontalLine/50" />

                    <Link
                        href="tel:(818) 290-7311"
                        className="whitespace-nowrap flex gap-2 items-center hover:text-primaryGreen transition-colors duration-200 font-semibold"
                    >
                        Call Us: (818) 290-7311
                    </Link>
                    <div className="fixed bottom-0 left-0 flex flex-col gap-4 justify-center items-center py-6 w-full mx-auto bg-white">
                        <button
                            className="px-5 py-2 font-semibold text-4 bg-primaryGreen text-primaryWhite rounded transition-colors hover:bg-primaryGreenHover"
                            onClick={() => {
                                setIsOpen(!isOpen);
                                return router.push('/menu');
                            }}
                        >
                            Check Menu
                        </button>
                        <Link
                            href="/my-account"
                            className="text-base text-primaryGreen font-semibold"
                        >
                            My Account
                        </Link>
                    </div>
                </div>
            )}

            <div className="hidden xls:flex gap-8 justify-center items-center h-full">
                <button
                    className="px-5 py-2 font-semibold text-4 bg-primaryGreen text-primaryWhite rounded transition-colors hover:bg-primaryGreenHover"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        return router.push('/menu');
                    }}
                >
                    Check Menu
                </button>
                <Link
                    href="/my-account"
                    className="text-base text-primaryGreen font-semibold"
                >
                    My Account
                </Link>
            </div>
        </div>
    )
}