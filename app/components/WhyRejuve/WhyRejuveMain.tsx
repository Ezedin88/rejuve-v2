import styles from '@/app/ui/styles/WhyRejuve.module.css';
import Text from '@/app/components/Buttons/Text';
import BenefitsTitle from '@/app/components/WhyRejuve/BenefitsTitle';
import { SmallIcon } from '@/app/components/Icons/Icon';
import WhyRejuveCardContainer from '@/app/components/WhyRejuve/WhyRejuveCardContainer';

export default function WhyRejuve({
    productData,
}: {
    productData: {
        acf: {
            convenience_section_title: string,
            convenience_list: {
                icon: string,
                title: string,
                description: string
            }[]
        }
    }
}) {
    const { acf } = productData || {};
    const { convenience_section_title, convenience_list } = acf || {};
    const convenience_data = convenience_list?.map(item => ({
        icon: item?.icon,
        title: item?.title,
        description: item?.description,
    }));
    return (
        <div className="max-w-[1480px] flex items-center flex-col gap-[150px] w-[90%] xls:w-[85%] mx-auto">
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
                            convenience_data?.map((item: {
                                icon: string,
                                title: string,
                                description: string
                            }, index: number) => (
                                <WhyRejuveCardContainer key={index} className='primary-why-rejuve-card-container'>
                                    {
                                        item?.icon &&
                                        <SmallIcon icon={item?.icon} />
                                    }
                                    <Text textName='primary-why-rejuve-card-title' dangerouslySetInnerHTML={{ __html: item?.title ?? '' }} />
                                    <Text textName='primary-why-rejuve-description'>{item?.description}</Text>
                                </WhyRejuveCardContainer>
                            ))
                        }
                    </div>
                </div >
            </section >
        </div>
    );
}
