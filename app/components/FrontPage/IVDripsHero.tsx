import styles from '@/app/ui/styles/IVDripsHero.module.css';
import { ISectionTitle } from "@/app/lib/definitions"

export default function IVDripsHero({
    section_title
}: {
    section_title: ISectionTitle
}) {
    const { title, description } = section_title ?? {};
    return (
        <div className={`flex flex-col justify-center items-center gap-6`}>
            <div className={`text-[24px] sm:text-[48px] font-bold text-center max-w-[1236px] text-primaryDark text-balance ${styles.drips_title}`}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="text-base sm:text-[18px] text-secondaryDark max-w-[1236px] text-center"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}