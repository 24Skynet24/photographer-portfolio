import "./index.scss"

export default function SocLink({link, img, alt}) {
    return (
        <>
            <a href={ link } target="_blank" className="social_link">
                <img src={ img } alt={ alt }/>
            </a>
        </>
    )
}