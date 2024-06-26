import "./index.scss"

export default function BookSelect({ title }) {
    return (
        <>
            <div className="select_date">
                <div className="flex items-center justify-between">
                    <span>{ title }</span>

                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.7 6.1L0 1.4L1.4 0L4.7 3.3L8 0L9.4 1.4L4.7 6.1Z" fill="#CCAF40"/>
                    </svg>
                </div>
            </div>
        </>
    )
}