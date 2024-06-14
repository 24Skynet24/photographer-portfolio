import "./index.scss"

export default function RoundedButton({ children, fill = true }) {
    const checkFill = () : string => {
        const className = fill ? "full" : "empty"
        return className + " rounded_button"
    }

    return (
        <>
            <button className={ checkFill() }>
                { children }
            </button>
        </>
    )
}