import styles from '@/app/ui/styles/WhyRejuve.module.css';
import Text from '@/app/components/Buttons/Text';
import BenefitsTitle from '@/app/components/WhyRejuve/BenefitsTitle';
import { SmallIcon } from '@/app/components/Icons/Icon';
import WhyRejuveCardContainer from '@/app/components/WhyRejuve/WhyRejuveCardContainer';
import { useProductData } from './Form/reducers/productDetailContext';

export default function WhyRejuve() {
    const { dispatch, productData } = useProductData();
    const { acf, categories } = productData || {};
    const { convenience_section_title, convenience_list } = acf || {};
    const convenience_data = convenience_list?.map(item => ({
        icon: item?.icon,
        title: item?.title,
        description: item?.description,
    }));
    const categoryName = categories?.[0];
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
                        {
                            convenience_data?.map((item, index) => (
                                <WhyRejuveCardContainer key={index} className='primary-why-rejuve-card-container'>
                                    <SmallIcon icon={item?.icon} />
                                    <Text textName='primary-why-rejuve-card-title' dangerouslySetInnerHTML={{ __html: item?.title ?? '' }} />
                                    <Text textName='primary-why-rejuve-description'>{item?.description}</Text>
                                </WhyRejuveCardContainer>
                            ))
                        }
                    </div>
                </div >
            </section >
            <section className={styles["book-weight-loss-section"]}>
                <div className={styles["iv-therapy-top"]}>
                    <p className={styles["iv-therapy-context"]}>{categoryName || 'Iv Therapy'}</p>
                </div>
                <div className={styles["middle-main"]}>
                    <p className={styles["book-weight-loss-metabolic"]} id='book-weight-loss-metabolic-id'>
                        Book {categoryName}
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
