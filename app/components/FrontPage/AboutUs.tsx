import styles from '@/app/ui/styles/AboutUs.module.css';

import { IAboutUs } from "@/app/lib/definitions";
import Image from "next/image";

export default function AboutUsContent({ content }: {
    content: IAboutUs
}) {
    const { title, sub_title, image } = content ?? {};

    return (
        <section className="flex flex-col gap-6 w-full">
            <div className="flex flex-col xls:flex-row gap-10 w-full mb-[75px]">
                <div className="flex flex-col gap-4 justify-start w-full xls:w-1/2">
                    <p className="text-primaryGreen font-semibold">{sub_title}</p>
                    <div className={`text-2xl sm:text-5xl font-bold ${styles.drips_title}`}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </div>
                <div className="flex flex-col gap-4 justify-start w-full xls:w-1/2">
                    <div className={`flex flex-col gap-12 text-secondaryDark ${styles.about_title} ${styles.about_description} ${styles.about_ul}`}
                        dangerouslySetInnerHTML={{ __html: content.editor }}
                    />
                </div>
            </div>
            <div className="w-full max-h-925px] h-full">
                <Image
                    src={image?.url}
                    width={1480}
                    height={1000}
                    alt="consultation session"
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </section>
    )
}