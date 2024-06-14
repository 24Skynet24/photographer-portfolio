import "./index.scss"

export default function FormInput({name, type, placeholder}) {
    return (
        <>
            <input className="form_input" type={type} name={name} placeholder={placeholder}/>
        </>
    )
}