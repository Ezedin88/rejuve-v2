import { useProductData } from './Form/reducers/productDetailContext';
import WhyRejuveMain from '@/app/components/WhyRejuve/WhyRejuveMain';

export default function WhyRejuve() {
    const { productData } = useProductData();
    return (
        <WhyRejuveMain productData={productData} />
    );
}
