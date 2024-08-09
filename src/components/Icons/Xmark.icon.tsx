
import BaseIcon, { TBaseIcon } from "./Base.icon"

const Xmark = ({
    style,
    whileHover,
    whileTap,
    ...props
}: TBaseIcon) => {

    return (
        <BaseIcon
            whileHover={{ scale: 1, transition: { duration: 0.2 }, ...whileHover }}
            whileTap={{ outline: 0, scale: 0.9, ...whileTap }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            height={25}
            width={30}
            style={{ cursor: "pointer", ...style }}
            stroke="currentColor"
            {...props}
        >
            <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12" />
        </BaseIcon>
    )
}
export default Xmark