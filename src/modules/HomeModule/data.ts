import img2 from "@assets/img/home-2.webp"
import img3 from "@assets/img/home-3.webp"
import img4 from "@assets/img/home-4.webp"
import img5 from "@assets/img/home-5.webp"
import img6 from "@assets/img/home-6.webp"
import img7 from "@assets/img/home-7.webp"
import img8 from "@assets/img/home-8.webp"
import img9 from "@assets/img/home-9.webp"
import img10 from "@assets/img/home-10.webp"


type txtBox = {
    title: string,
    txt: string,
    pos: boolean
}

const txtBoxData: txtBox[] = [
    {
        title: "BEAUTY",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: true,
    },
    {
        title: "POTRAIT",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: false,
    },
    {
        title: "FASHION",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: true,
    },
    {
        title: "MEETINGS",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: false,
    },
    {
        title: "PEOPLE",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: true,
    },
    {
        title: "PRODUCT",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: false,
    },
    {
        title: "COUPLE",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: true,
    },
    {
        title: "NATURE",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: false,
    },
    {
        title: "BIRTHDAYS",
        txt: "Lorem ipsum dolor sit amet, \n" +
            "consectetur adipiscing elit. Ullamcorper \n" +
            "ornare odio ultrices elementum ut.",
        pos: true,
    },
]
const backgroundImages: string[] = [img2, img3, img4, img5, img6, img7, img8, img9, img10]
const tableData: object[] = [
    {
        num: 25,
        txt: `Years experience of freelance photography`
    },
    {
        num: 49,
        txt: `Projects worked on and counting`
    },
    {
        num: 36,
        txt: `Stable client currently trust us and are booked`
    },
]

export { txtBoxData, backgroundImages, tableData }

