import Text from '@/app/components/Buttons/Text';

export function ProductHeroInfoWrapper({
    productName,
    productSubTitle,
    productDescription,
}: {
    productName: string,
    productSubTitle: string,
    productDescription: string,
}) {
    return (
        <>
            <div className='flex flex-col gap-[24px] max-sm:text-center'>
                <Text textName='primary-hero-title-text'>
                    {productName}
                </Text>
                <Text textName='primary-hero-subtitle-text'>
                    {productSubTitle}
                </Text>
                <Text textName='primary-hero-description-text'>
                    {productDescription}
                </Text>
            </div>
        </>
    );
}