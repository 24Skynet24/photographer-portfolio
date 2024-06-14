import "./index.scss"

export default function BookInput({ title, type = "text", name, placeholder }) {
    return (
        <>
            <div className="book_input">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />

                <span>
                    { title }
                </span>
            </div>
        </>
    )
}