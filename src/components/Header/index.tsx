import {Link, NavLink} from "react-router-dom";
import "./index.scss"

import {navLinks} from "./data";

export default function Header() {
    return (
        <>
            <header className="header flex items-center justify-between">
                <Link to="/" className="logo">
                    <svg width="155" height="35" viewBox="0 0 155 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M149.986 11.0455C147.553 7.5089 142.686 6.05265 138.19 6.21611C133.1 6.42414 127.996 8.54908 124.895 12.3234C121.794 16.0978 120.978 21.5662 123.352 25.7863C125.578 29.739 130.251 32.1611 135 32.6664C139.748 33.1865 144.54 32.0125 148.918 30.1848C150.149 29.6647 151.41 29.0703 152.256 28.0896C152.879 27.3763 153.221 26.4104 153.087 25.5189C153.013 24.9988 152.419 24.6719 151.885 24.865L139.332 29.3824C134.243 31.2101 128.99 33.0824 123.53 33.023C120.622 32.9933 117.923 32.7998 115.772 29.5306C114.407 27.792 114.182 14.4781 114.063 12.3234M5.95389 17.9256C9.04019 19.3075 12.1858 20.7043 15.5244 21.165C19.679 21.7445 24.2936 20.6895 26.727 16.9448C28.0031 14.9685 28.2999 12.472 27.2909 10.3471C25.451 6.42415 20.4803 5.85948 16.3405 6.27555C13.1503 6.60246 9.93047 7.28601 7.12609 8.876C4.32172 10.466 1.99216 13.0516 1.25026 16.187C0.211603 20.6003 2.52632 25.2811 5.96873 28.253C12.4381 33.87 22.9582 34.078 29.6501 28.7137C36.164 23.5128 38.3452 13.6014 34.7395 6.11209C34.6505 5.91892 34.3538 5.9635 34.3241 6.17153C33.5673 12.0263 33.7306 17.985 34.8137 23.7803C35.244 26.0687 35.8969 28.4759 37.6478 30.0065C39.9773 32.0423 43.4346 31.8788 46.5209 31.6113C53.7321 30.9724 60.9582 30.3185 68.1695 29.6796C69.2971 29.5756 70.3358 28.9663 70.8996 27.9856C72.3538 25.4297 69.4159 23.3345 66.9231 22.7104C59.5931 20.8678 51.3877 22.963 45.8383 28.1044C45.8087 28.1342 45.7641 28.1044 45.779 28.0599L59.608 4.26949C59.7415 4.0466 60.0383 4.03173 60.1866 4.23977C65.9438 12.2046 72.5467 19.5453 79.8766 26.0984C82.4287 28.3719 85.2331 30.6455 88.7942 30.7049C90.3522 30.7346 91.8805 30.2145 93.023 29.1595C95.9313 26.4104 94.3436 22.428 91.6876 20.4517C89.6103 18.9211 87.0137 18.3119 84.5209 17.6729C82.6661 17.1974 80.7817 16.6773 79.2237 15.5629C77.6658 14.4484 76.5084 12.6058 76.7013 10.7037C76.909 8.68282 78.5857 7.07797 80.485 6.33499C82.3694 5.60686 84.4467 5.592 86.4647 5.592L113.114 5.54742C113.366 5.54742 113.529 5.27995 113.425 5.05705C112.045 2.30801 108.766 0.658584 105.739 1.0598C104.849 1.17867 104.137 1.84736 103.914 2.70922C101.421 12.368 100.739 22.5023 101.911 32.4138"
                            stroke="#CCAF40" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                    </svg>
                </Link>

                <nav>
                    <ul className="flex items-center">
                        { navLinks.map((el, id) => {
                            return (
                                <li key={id}>
                                    <NavLink
                                        to={el.link}
                                        className={({ isActive }) => (isActive ? 'is_active' : '')}
                                    >
                                        {el.title}
                                    </NavLink>
                                </li>
                            )
                        }) }
                    </ul>
                </nav>
            </header>
        </>
    )
}