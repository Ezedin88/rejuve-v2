const convenience_section_title = 'Why Rejuve for IV Therapy?';
const first_convenience_title = 'Convenience';
const first_convenience_description = 'Book your IV therapy appointment online in minutes. We offer same-day appointments at our locations in Dallas, Southlake, and Frisco.';
const categoryName = 'IV Therapy';
const theProductName = 'IV Therapy';
import styles from '@/app/ui/styles/WhyRejuve.module.css';
import Text from '@/app/components/Buttons/Text';
import BenefitsTitle from '@/app/components/WhyRejuve/BenefitsTitle';
import { SmallIcon } from '@/app/components/Icons/Icon';
import WhyRejuveCardContainer from '@/app/components/WhyRejuve/WhyRejuveCardContainer';

export default function WhyRejuve() {
    return (
        <>
            <section className="max-w-[1718px]
            max-xls:max-w-[1117px]
            max-sm:max-w-[360px]
            flex
            flex-col
            gap-[84px]
            pt-[92px]
            pb-[99px]
            max-xls:pb-[104px]
            max-sm:pb-[75px]
            max-xls:gap-[32px]
             mx-auto" id='product-section-id'>
                {/* title */}
                <section className="benefits-title-wrapper">
                    <BenefitsTitle convenience_section_title={convenience_section_title} className='primary-why-rejuve-title' />
                </section>
                {/* Cards */}
                <div className={styles["main-section-container"]}>
                    <div className='flex w-full justify-center gap-[48px]
                    max-sm:flex-col
                    '>
                        <WhyRejuveCardContainer className='primary-why-rejuve-card-container'>
                            <SmallIcon icon='http://rejuve.com/wp-content/uploads/2024/01/Frame_9.svg' />
                            <Text textName='primary-why-rejuve-card-title'>{first_convenience_title}</Text>
                            <Text textName='primary-why-rejuve-description'>{first_convenience_description}</Text>
                        </WhyRejuveCardContainer>
                        <WhyRejuveCardContainer className='primary-why-rejuve-card-container'>
                            <SmallIcon icon='http://rejuve.com/wp-content/uploads/2024/01/Frame_9.svg' />
                            <Text textName='primary-why-rejuve-card-title'>{first_convenience_title}</Text>
                            <Text textName='primary-why-rejuve-description'>{first_convenience_description}</Text>
                        </WhyRejuveCardContainer>
                        <WhyRejuveCardContainer className='primary-why-rejuve-card-container'>
                            <SmallIcon icon='http://rejuve.com/wp-content/uploads/2024/01/Frame_9.svg' />
                            <Text textName='primary-why-rejuve-card-title'>{first_convenience_title}</Text>
                            <Text textName='primary-why-rejuve-description'>{first_convenience_description}</Text>
                        </WhyRejuveCardContainer>
                    </div>
                </div >
            </section >
            <section className={styles["book-weight-loss-section"]}>
                <div className={styles["iv-therapy-top"]}>
                    <p className={styles["iv-therapy-context"]}>{categoryName || 'Iv Therapy'}</p>
                </div>
                <div className={styles["middle-main"]}>
                    <p className={styles["book-weight-loss-metabolic"]} id='book-weight-loss-metabolic-id'>
                        Book {theProductName}
                    </p>
                </div>
                <div className={styles["returning-customer-context"]}>
                    <p className={styles["returning-customer"]}>Returning customer?</p>
                    <p className={styles["click-to-login"]}><a href="https://rejuve.com/sign-in">Click here to login</a></p>
                </div>
            </section>
        </>
    );
}
