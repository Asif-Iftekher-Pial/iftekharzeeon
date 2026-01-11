function Chips({
    title,
    bgColor,
    textColor,
    prependIcon,
    appendIcon,
    rounded = "rounded-lg",
}) {
    return (
        <span
            className={`cursor-pointer px-3 py-0.5 mr-2 inline-flex items-center ${rounded}`}
            style={{ backgroundColor: bgColor }}
        >
            {prependIcon && <span className="mr-1">{prependIcon}</span>}

            <span className="text-sm font-medium" style={{ color: textColor }}>
                {title}
            </span>

            {appendIcon && <span className="ml-1">{appendIcon}</span>}
        </span>
    );
}

export default Chips;
