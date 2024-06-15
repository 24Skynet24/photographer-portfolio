import RectangularButton from "../../ui/Buttons/RectangularButton/index";

import "./index.scss"

export default function BannerTxtBox({title, txt, pos = true}) {
    const xEl = () => {
        if (pos) return <span className="line left"/>
        return <span className="line right"/>
    }
    return (
        <>
            <article className={pos ? 'banner_txt_box items-start' : 'banner_txt_box text-right items-end'}>
                <h2>{title}</h2>
                <p>{txt}</p>
                <RectangularButton/>

                <span className={pos ? 'line top' : 'line top top-right'}/>
                { xEl() }
            </article>
        </>
    )
}