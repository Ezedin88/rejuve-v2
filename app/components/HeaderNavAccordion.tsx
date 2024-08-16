import Link from "next/link";
import { SmallIcon } from "./Icons/Icon";
import { Dispatch, SetStateAction } from "react";
import { sanitizeTitle } from "@/lib/utils";

export default function HeaderNavAccordion({
    expanded,
    setExpanded,
    index,
    title,
    href,
    hasChildren,
}: {
    expanded: boolean;
    setExpanded: () => void;
    index?: number;
    title: string;
    href: string;
    hasChildren: boolean;
}) {
    return (
        <div className="flex justify-between gap-2 items-center hover:text-primaryGreen">
            <Link href={href} className="header_small_screen_links">
                <p className="font-semibold text-[18px]">{sanitizeTitle(title)}</p>
                {hasChildren && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setExpanded();
                        }}
                    >
                        <SmallIcon
                            width={20}
                            icon="/nav-chevron-down.svg"
                            className={`transform ${expanded ? "rotate-180" : ""}`}
                        />
                    </button>
                )}
            </Link>
        </div>
    );
}
