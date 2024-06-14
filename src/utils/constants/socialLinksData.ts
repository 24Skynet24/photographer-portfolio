type socLink = {
    link: string,
    img: string,
    alt: string,
}

import Be from "@assets/img/Be.svg"
import facebook from "@assets/img/Facebook.svg"
import insta from "@assets/img/insta.svg"

const socLinks: socLink[] = [
    {
        link: "https://www.linkedin.com/feed/",
        alt: "Be",
        img: Be,
    },
    {
        link: "https://www.facebook.com/",
        alt: "facebook",
        img: facebook,
    },
    {
        link: "https://www.instagram.com/",
        alt: "instagram",
        img: insta,
    },
]

export { socLinks }
