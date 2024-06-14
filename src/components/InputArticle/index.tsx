import FormInput from "../../ui/Inputs/FormInput/index";
import FormTextarea from "../../ui/Inputs/FormTextarea/index";
import "./index.scss"

export default function InputArticle({placeholder, name, type = "text", title, target = true}) {
    const targetEl = () => {
        if (target) return <FormInput placeholder={placeholder} name={name} type={type}/>
        return <FormTextarea placeholder={placeholder} name={name}/>
    }

    return (
        <>
            <article className="input_box flex flex-col">
                <span>{ title }</span>
                { targetEl() }
            </article>
        </>
    )
}