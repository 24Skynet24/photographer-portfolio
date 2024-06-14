import "./index.scss"

export default function ActiveButton({ info, handleClick }) {
    return (
        <>
            <button
                className={ info.isActive ? "active_button is_active" : "active_button"}
                onClick={() => handleClick()}
            >
                { info.title }
            </button>
        </>
    )
}