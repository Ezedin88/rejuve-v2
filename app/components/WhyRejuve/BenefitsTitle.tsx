import Text from '@/app/components/Buttons/Text';
import { benefitsTitleProps } from '@/app/lib/definitions';

export default function BenefitsTitle({
    convenience_section_title,
    className = 'primary-why-rejuve-title'
}: benefitsTitleProps) {
    return (
        <Text className={className}>{convenience_section_title}</Text>
    );
}