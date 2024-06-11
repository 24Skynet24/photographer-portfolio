import {Link} from "react-router-dom";
import "./index.scss"

export default function AboutModule() {
    return (
        <>
            <section className="about_container">
                <h1>About</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Non nunc eleifend id pulvinar.
                    Id pretium feugiat dignissim quisque.
                    Duis purus tellus duis nunc rhoncus, ultrices
                    id in ipsum. Eget sit tempor habitant id turpis
                    imperdiet ut.
                </p>

                <p>
                    If you are looking to make enquiries,
                    kindly <Link to="/contacts">contact</Link> us or make
                    your booking <Link to="/book">here</Link>.
                </p>
            </section>
        </>
    )
}