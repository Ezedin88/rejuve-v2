import styles from '@/app/ui/styles/WhyRejuve.module.css';
import { useProductData } from './reducers/productDetailContext';

export default function TreatmentNameIntro() {
    const { productData } = useProductData();

    const { acf, categories } = productData || {};
    const categoryName = categories?.[0];
    return (
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
    )
}