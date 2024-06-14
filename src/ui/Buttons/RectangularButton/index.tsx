import "./index.scss"

export default function RectangularButton() {
    return (
        <>
            <button className="rectangular_button">
                <span>
                    Take a look
                </span>
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7071 8.7071C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.92893C20.9526 0.538406 20.3195 0.538406 19.9289 0.92893C19.5384 1.31945 19.5384 1.95262 19.9289 2.34314L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.7071ZM8.74228e-08 9L27 9L27 7L-8.74228e-08 7L8.74228e-08 9Z" fill="white"/>
                </svg>
            </button>
        </>
    )
}