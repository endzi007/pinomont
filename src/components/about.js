import React from 'react';
import { style } from 'typestyle';

const wrapperStyle = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    $nest:{
        "div":{
            textAlign: "left!important",
            flexGrow: "1",
            flexBasis: "0",
            padding: "20px"
        }
    }
});


export default ()=>{
    return(
        <div className={`pageSection ${wrapperStyle}`}>
            <div>
            <h1>O nama</h1>
                <p> Firma Pinomont doo je generalni uvoznik i distributer Areon kozmetike za automobile na teritoriji Crne Gore. 
                    I pored velike krize koja je zavladala na globalnom nivou, naša firma je imala jasno zacrtan cilj tako da je strateški planiranim koracima, iz dana u dan bilježila
                    uspjehe na tržištu. <br />
                    Sjedište firme je u Beranama u ul. Miljana Tomičića. Osnivač i vlasnik firme je Aleksandar Balević, koji je svojim požrtvovanim pristupom, uspio održati i 
                    dovesti je na nivo na kojem je ona danas. <br/>
                    Širok asortiman proizvoda, niske cijene, brzina i efikasnost su aspekti na kojima je stavljen akcenat poslovanja naše firme. 
                </p>
            </div>
            <div>Galerija</div>
        </div>
    );
}