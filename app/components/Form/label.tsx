export default function Label({
    labelName = '',
    labelClassName = '',
    htmlFor = '',
    required
}: {
    labelName?: string,
    labelClassName?: string,
    required: boolean,
    htmlFor?: string
}) {
    return (
        <label htmlFor={htmlFor}
            className={labelClassName}
        >{labelName}
            {required ? <span className="text-primaryGreen">&#42;</span> : null}
        </label>
    );
}