import "./index.scss"

export default function TableItem({num, txt}) {
    return (
        <article className="table_item flex flex-col">
            <h3>{num}</h3>
            <p>{txt}</p>
        </article>
    )
}