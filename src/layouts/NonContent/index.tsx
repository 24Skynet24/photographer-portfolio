import SocLink from "../../ui/SocLink/index";
import {socLinks} from "../../utils/constants/socialLinksData";
import "./index.scss"

export default function NonContentLayout({children}) {
    return (
        <>
            <div className="non_container flex justify-between">
                <section className="aside">
                    <svg className="logo" width="237" height="1086" viewBox="0 0 237 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.9147 27.1273C50.9486 44.3308 40.6684 78.7379 41.8223 110.523C43.2909 146.503 58.2916 182.589 84.9361 204.513C111.581 226.437 150.184 232.206 179.975 215.422C207.879 199.687 224.977 166.644 228.544 133.076C232.215 99.5081 223.928 65.6254 211.026 34.68C207.354 25.9733 203.158 17.0568 196.235 11.0775C191.2 6.67175 184.381 4.25901 178.087 5.20311C174.416 5.72761 172.108 9.92364 173.471 13.7L205.361 102.445C218.264 138.426 231.481 175.56 231.061 214.164C230.852 234.724 229.485 253.802 206.408 269.012C194.134 278.663 100.147 280.25 84.9361 281.09M124.483 1045.39C134.239 1023.57 144.1 1001.33 147.352 977.729C151.443 948.357 143.995 915.733 117.56 898.53C103.608 889.508 85.9851 887.41 70.9845 894.543C43.2909 907.551 39.3047 942.692 42.2419 971.959C44.5497 994.513 49.3751 1017.28 60.5994 1037.1C71.8237 1056.93 90.0762 1073.4 112.21 1078.64C143.365 1085.99 176.409 1069.62 197.389 1045.28C237.041 999.548 238.509 925.174 200.641 877.864C163.926 831.813 93.9575 816.393 41.088 841.884C39.7243 842.513 40.039 844.611 41.5076 844.821C82.8381 850.171 124.903 849.017 165.814 841.359C181.968 838.317 198.962 833.702 209.767 821.323C224.138 804.854 222.984 780.412 221.096 758.593C216.585 707.612 211.97 656.526 207.459 605.545C206.725 597.572 202.424 590.229 195.5 586.243C177.458 575.963 162.667 596.733 158.261 614.356C145.253 666.177 160.044 724.186 196.34 763.419C196.549 763.628 196.34 763.943 196.025 763.838L28.0805 666.072C26.507 665.128 26.402 663.03 27.8706 661.981C84.0969 621.28 135.917 574.599 182.178 522.779C198.228 504.736 214.277 484.91 214.697 459.734C214.907 448.719 211.235 437.915 203.788 429.837C184.381 409.277 156.268 420.501 142.316 439.278C131.512 453.964 127.211 472.322 122.7 489.945C119.343 503.057 115.672 516.38 107.804 527.394C99.9368 538.409 86.9292 546.591 73.502 545.227C59.2357 543.759 47.9065 531.905 42.6615 518.478C37.5214 505.156 37.4165 490.469 37.4165 476.203L37.1018 287.803C37.1018 286.02 35.2136 284.866 33.6401 285.6C14.2337 295.356 2.58979 318.539 5.42209 339.938C6.26128 346.232 10.9818 351.268 17.066 352.841C85.2508 370.464 156.792 375.29 226.761 367.002" stroke="#CCAF40" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round"/>
                    </svg>

                    <div className="soc_links flex justify-between">
                        { socLinks.map((el, id) => {
                            return <SocLink link={el.link} alt={el.alt} img={el.img} key={id}/>
                        }) }
                    </div>
                </section>
                <main className="flex justify-end">
                    { children }
                </main>
            </div>
        </>
    )
}