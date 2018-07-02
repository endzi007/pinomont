import React from 'react';
import { style, keyframes, media} from 'typestyle';
import PinomontLogo from '../../assets/images/pinomontLogo.png';
import styles from '../helperComponents/templateStyles';
import TranslateWidget from './translateWidget';
import translateWidget from './translateWidget';
export default ({show, handleClick, showDrawer, activeLink}) =>{
    const topStyle = style({
        position: "fixed",
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        display: "-ms-flex",
        display: "-webkit-flex",
        left: 0, 
        top: 0,
        paddingTop: "5px",
        height: "40px",
        width: "100%",
        flexDirection: "column",
        "-webkit-box-align": "center",  "-moz-box-align": "center",  "-ms-flex-align": "center",  "-webkit-align-items": "center",  "align-items": "center",
        backgroundColor: `rgba(${styles.darkBackgroundColorRGB}, 0.9)`,
        zIndex: "100",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1)"
    }, media({maxWidth: 768},{height: "80px"}));

    const itemStyle = style({
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        display: "-ms-flex",
        display: "-webkit-flex",
        padding: "10px",
        "-webkit-box-align": "center",  "-moz-box-align": "center",  "-ms-flex-align": "center",  "-webkit-align-items": "center",  "align-items": "center",
        marginLeft: "20px",
        $nest:{
            "&:hover":{
                cursor: "pointer"
            }
        }
    });


    const logoStyle = style({
        zIndex: 2
    });

    const active = style({
        color: styles.secondaryColor
    }, 
    media({maxWidth: 768}, {color: styles.primaryColor}));
    
    const navigationItemsStyle = style({
        position: "absolute",
        top: "40px",
        backgroundColor: `rgba(${styles.darkBackgroundColorRGB}, 0.9)`,
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        display: "-ms-flex",
        display: "-webkit-flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "flex-end",
        color: "white",
        height: "60px",
        padding: "0 20%",
        borderBottom: `3px solid ${styles.secondaryColor}`
    }, 
    media({maxWidth: 768},{
        position: "fixed",
        top: "80px",
        width: "260px",
        height: "100vh",
        maxHeight: "100vh",
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        display: "-ms-flex",
        display: "-webkit-flex",
        flexDirection: "column",
        left: showDrawer=== true? "0px" : "-260px",
        padding: 0,
        "-webkit-box-align": "center",  "-moz-box-align": "center",  "-ms-flex-align": "center",  "-webkit-align-items": "center",  "align-items": "center",
        justifyContent: "space-arround",
        paddingTop: "200px",
        paddingBottom: "200px",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1)",
        backgroundColor: styles.secondaryColor,
        color: styles.darkBackgroundColor
    })
);
    return(
        <div className={topStyle}>
            <div className={logoStyle}>
                <div style={{fontSize: "2em"}} onClick={handleClick.bind(null, "/")}><img style={{
                    width: "200px", height: "auto"
                }} src={PinomontLogo} alt="pinomont logo"/></div>
            </div>
            <div className={navigationItemsStyle}>
                <div key="topMany_link_početna" className={`${itemStyle} ${activeLink==="home"? active: ""}`} onClick={handleClick.bind(null, "/")}>Početna </div>
                <div key="topMany_link_categories"className={`${itemStyle} ${activeLink==="categories"? active: ""}`} onClick={handleClick.bind(null, "/categories")}>Proizvodi</div>
                <div key="topMany_link_about" className={`${itemStyle} ${activeLink===" "? active: ""}`} onClick={handleClick.bind(null, "/about")}>O nama</div>
                <div key="topMany_link_contact"className={`${itemStyle} ${activeLink==="contact"? active: ""}`} onClick={handleClick.bind(null, "/contact")}>Kontakt</div>
            </div>
            <TranslateWidget />
        </div>
    );
}



/*
        <nav className={show==="top"? topStyle : rightStyle(showDrawer===true? 0: -250)}>
                <div>
                    <div className={itemStyle} style={{fontSize: "2em"}} onClick={handleClick.bind(null, "/")}><img style={{
                        width: "200px", height: "auto"
                    }} src={PinomontLogo} alt="pinomont logo"/></div>
                </div>
                <div className={rightNav}>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/")}> <SvgImage show={show} name="home"/> Početna </div>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/categories")}><SvgImage show={show} name="projects"/> Kategorije </div>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/Contact")}><SvgImage show={show} name="contact"/> Kontakt </div>
                    <div className={itemStyle} id="google_translate_element"></div>
                    <div className={itemStyle} onClick={()=>{
                        manualTranslate();
                    }}>Srpski</div>
                </div>
        </nav>


*/



