import "./index.scss"

export default function FormTextarea({name, placeholder}) {
    return (
        <>
            <textarea name={name} placeholder={placeholder} className="form_textarea form_input"/>
        </>
    )
}