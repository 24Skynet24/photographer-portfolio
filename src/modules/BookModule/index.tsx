import ActiveButton from "../../ui/Buttons/ActiveButton/index";
import BookInput from "../../ui/Inputs/BookInput/index";
import BookSelect from "../../ui/Selects/BookSelect/index";
import PriceCard from "../../components/PriceCard/index";
import RoundedButton from "../../ui/Buttons/RoundedButton/index";

import { activeButtons, bookInputsData } from "./data";

import "./index.scss"
import {useState } from "react";

export default function BookModule() {
    const priceArr = useState(0)
    let price = priceArr[0]
    const setPrice = priceArr[1]
    const [activeEls, setActiveEls] = useState(activeButtons)
    const changePrices = (id) => {
        activeEls[id].isActive = !activeEls[id].isActive
        activeEls[id].isActive ? price += 50 : price -= 50

        setPrice(price)
        setActiveEls(activeEls)
    }

    return (
        <>
            <main className="book_page flex flex-col items-center">
                <section className="title_block flex flex-col items-center">
                    <h1>Welcome to the booking page!</h1>
                    <p>Kindly provide necessary informations by attending to the questions below.</p>
                </section>

                <section className="booking_block">
                    <div className="booking_block__title mb-8 flex items-center flex-col">
                        <h2>What you booking for? </h2>
                        <span>(you can select multiple options)</span>
                    </div>
                    <div className="booking_block__wrap">
                        { activeEls.map((el, id) => {
                            return <ActiveButton info={el} key={id} handleClick={() => changePrices(id)}/>
                        }) }
                    </div>
                </section>

                <section className="booking_location">
                    <h2 className="mb-8">When and where is the photoshoot?</h2>
                    <div className="booking_location_box flex items-center">
                        <BookSelect title={"Select date"}/>
                        <BookSelect title={"Select time"}/>
                        <BookInput {...bookInputsData[0]}/>
                    </div>
                </section>

                <section className="booking_price">
                    <h2>Select your preffered package</h2>
                    <div className="flex items-center booking_price__container">
                        <PriceCard price={price} cardType={1}/>
                        <PriceCard price={price * 2} cardType={2}/>
                        <PriceCard price={price * 3} cardType={3}/>
                    </div>
                </section>

                <section className="booking_details">
                    <h2 className="mb-8">Kindly provide your contact details</h2>
                    <div className="flex items-center">
                        <BookInput {...bookInputsData[1]}/>
                        <BookInput {...bookInputsData[2]}/>
                        <BookInput {...bookInputsData[3]}/>
                    </div>
                </section>

                <section className="booking_buttons">
                    <RoundedButton children={"Book now"}/>
                    <RoundedButton children={"Save and book later"} fill={false}/>
                </section>
            </main>
        </>
    )
}