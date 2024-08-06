import BookBtn from '@/app/components/Buttons/book-btn';
import SmallText from '@/app/components/Buttons/small-text';
import Text from '@/app/components/Buttons/Text';

export function ProductHeroBtnWrapper({
    productPrice,
    buttonText,
    smallText,
    onClick
}: {
    productPrice: string,
    buttonText: string,
    smallText: string,
    onClick?: () => void
}) {
    return (
        <>
            <div className="product-hero-btn-wrapper
                flex
                flex-col
                justify-start
                max-sm:justify-center
                max-sm:items-center
                gap-[14px]
            ">
                <Text textName='primary-price-btn-text'>
                    {productPrice}
                </Text>
                <BookBtn onclick={onClick}>
                    {buttonText}
                </BookBtn>
                <SmallText>
                    {smallText}
                </SmallText>
            </div>
        </>
    );
}