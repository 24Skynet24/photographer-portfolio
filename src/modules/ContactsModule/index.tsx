import "./index.scss"
import InputArticle from "../../components/InputArticle/index";

export default function ContactsModule() {
    return (
        <>
            <div className="contacts_container">
                <h1>
                    Contact-us
                </h1>

                <form action="">
                    <div className="flex flex-col">
                        <InputArticle
                            name={"name"}
                            placeholder={"Enter your name"}
                            title={"Name"}
                        />
                        <InputArticle
                            name={"email"}
                            placeholder={"Enter your email address"}
                            title={"Email Address"}
                            type={"email"}
                        />
                        <InputArticle
                            name={"message"}
                            placeholder={"Enter your message here"}
                            title={"Message"}
                            target={false}
                        />
                    </div>
                    <footer className="flex justify-between">
                        <span>
                            We will get back to you within
                            one business day
                        </span>

                        <button type="submit" className="submit">
                            Submit
                        </button>
                    </footer>
                </form>
            </div>
        </>
    )
}