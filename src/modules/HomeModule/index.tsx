import RoundedButton from "../../ui/Buttons/RoundedButton/index";
import SocLink from "../../ui/SocLink/index";
import BannerTxtBox from "../../components/BannerTxtBox/index";
import TableItem from "../../components/TableItem/index";

import { socLinks } from "../../utils/constants/socialLinksData";
import { txtBoxData, backgroundImages, tableData } from "./data";

import "./index.scss"

const scrollTop = ():void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function Banner({id}) {
    return (
        <section className={`banner_${id} banner_border`} id={`banner_${id}`}>
            <img src={backgroundImages[id]} alt="" className="bac_img"/>
            <div className="bac_shadow"/>

            <div className="border_box">
                <div className="border_box__inner">
                    <BannerTxtBox {...txtBoxData[id]}/>
                </div>
            </div>
        </section>
    )
}

export default function HomeModule() {
    return (
        <>
           <main >
               <section className="first_banner relative flex items-center justify-end">
                   <div className="first_banner__container absolute flex flex-col items-end">
                       <div className="soc_links flex items-center">
                           { socLinks.map((el, id) => {
                               return <SocLink link={el.link} alt={el.alt} img={el.img} key={id}/>
                           }) }
                       </div>
                       <h1>
                           We take photos as
                           a return ticket to a
                           moment otherwise gone
                       </h1>
                       <RoundedButton>Book now</RoundedButton>
                   </div>
                   <div className="view_more flex flex-col items-center">
                       <span>View more</span>
                       <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 2L16 16L30 2" stroke="white" strokeWidth="3"/>
                       </svg>
                   </div>
               </section>

               {backgroundImages.map((el, i) => {
                   return <Banner id={i} key={i+1}/>
               })}

               <footer className="footer flex flex-col items-center">
                   <button className="top flex flex-col items-center" onClick={scrollTop}>
                       <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30 17L16 3L2 17" stroke="white" strokeWidth="3"/>
                       </svg>
                       <span>Back to top</span>
                   </button>
                   <div className="table_box flex items-center">
                       {tableData.map((el, id) => {
                           return <TableItem {...el} key={id}/>
                       })}
                   </div>
                   <RoundedButton children="Book now"/>
               </footer>
           </main>
        </>
    )
}