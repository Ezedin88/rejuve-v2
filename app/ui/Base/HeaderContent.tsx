"use client";
import HeaderNavAccordion from "@/app/components/HeaderNavAccordion";
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
    const [expandedAccordion, setExpandedAccordion] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        setIsOpen(false);
        setExpandedAccordion({});
        // clear up
        return () => {
            setIsOpen(false);
            setExpandedAccordion({});
        }
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
                    priority
                />
            </Link>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex xls:hidden text-primaryGreen"
            >
                {!isOpen ? (
                    <SmallIcon
                        icon="/megaMenuHumberger.svg"
                        width={35}
                    />
                ) : (
                    <SmallIcon
                        icon="/megaMenuCloseIcon.svg"
                        width={35}
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
                                                <div className="flex flex-col ml-auto gap-4 w-[416px] bg-lightGrayBg justify-center items-start px-16">
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

            {/* small screens */}

            {
                isOpen && (
                    <div className="flex flex-col gap-6 xls:hidden absolute top-[78px] left-0 right-0 bg-primaryWhite shadow-lg p-8 h-screen overflow-y-scroll pb-28">
                        {primaryMenuItems?.map((menu: IMenuItem, key: number) => {
                            const { title, children, url: baseUrl } = menu ?? {};
                            const url = getAbsolutePath(baseUrl);
                            return (
                                <div key={key}>
                                    <HeaderNavAccordion
                                        href={url}
                                        title={title}
                                        index={key}
                                        expanded={!!expandedAccordion[title]}
                                        setExpanded={() => setExpandedAccordion(prev => ({
                                            ...prev,
                                            [title]: !prev[title],
                                        }))}
                                        hasChildren={children && children.length > 0}
                                    />
                                    {!!expandedAccordion[title] && (
                                        <div className="flex flex-col mt-[16px]">
                                            {title === 'IV Therapy' && (
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
                                                        <div className="flex flex-col gap-6">
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
                                            {children?.map((child: IMenuItem, childKey: number) => {
                                                const { url: childBaseUrl } = child ?? {};
                                                const childUrl = getAbsolutePath(childBaseUrl);
                                                return (
                                                    <div className="flex flex-col xls:hidden" key={childKey}>
                                                        <Link
                                                            href={childUrl}
                                                            onClick={() => setIsOpen(!isOpen)}
                                                            className="w-full py-2 hover:text-primaryGreen font-semibold transition-colors duration-200"
                                                        >
                                                            {child?.title}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <hr className="mt-5" />
                                </div>
                            );
                        })}


                        <div className="max-xls:flex gap-8 justify-center items-end h-full bottom-0 relative">
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
                                className="py-2 text-base text-primaryGreen font-semibold"
                            >
                                My Account
                            </Link>
                        </div>

                    </div>
                )
            }

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