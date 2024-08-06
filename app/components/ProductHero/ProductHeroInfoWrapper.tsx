import Text from '@/app/components/Buttons/Text';

export function ProductHeroInfoWrapper({
    productName,
    productSubTitle,
    productDescription,
    short_description
}: {
    productName: string,
    productSubTitle?: string,
    productDescription?: string,
    short_description?: string,
}) {
    return (
        <>
            <div className='flex flex-col gap-[24px] max-sm:text-center'>
                <Text textName='primary-hero-title-text'>
                    {productName}
                </Text>
                {/* dangerously set inner html for short_description */}
                <Text textName='primary-hero-description-text hero-subtitle' dangerouslySetInnerHTML={{ __html: short_description ?? '' }} />
                {/* <Text textName='primary-hero-subtitle-text'>
                    {productSubTitle}
                </Text>
                <Text textName='primary-hero-description-text'>
                    {productDescription}
                </Text> */}
            </div>
        </>
    );
}