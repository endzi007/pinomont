import React from 'react';
import { Drawer, MenuItem, RaisedButton, MuiThemeProvider  } from 'material-ui';
import { style, keyframes, media} from 'typestyle';
import PinomontLogo from '../../assets/images/pinomontLogo.png';
import SvgImage from './svgIcon';
import styles from '../helperComponents/templateStyles';

export default ({show, handleClick, showDrawer, activeLink}) =>{
    const topStyle = style({
        position: "fixed",
        display: "flex",
        left: 0, 
        top: 0,
        paddingTop: "5px",
        height: "40px",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: `rgba(${styles.darkBackgroundColorRGB}, 0.9)`,
        zIndex: "100",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1)"
    }, media({maxWidth: 768},{height: "80px"}));

    const itemStyle = style({
        display: "flex",
        padding: "10px",
        alignItems: "center",
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
    });
    
    const navigationItemsStyle = style({
        position: "absolute",
        top: "40px",
        backgroundColor: `rgba(${styles.darkBackgroundColorRGB}, 0.9)`,
        display: "flex",
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
        width: "260px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        left: showDrawer=== true? "0px" : "-260px",
        padding: 0,
        alignItems: "center",
        borderRight: `2px solid ${styles.primaryColor}`
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
                <div className={`${itemStyle} ${activeLink==="home"? active: ""}`} onClick={handleClick.bind(null, "/")}>Početna </div>
                <div className={`${itemStyle} ${activeLink==="categories"? active: ""}`} onClick={handleClick.bind(null, "/categories")}>Proizvodi</div>
                <div className={`${itemStyle} ${activeLink==="contact"? active: ""}`} onClick={handleClick.bind(null, "/Contact")}>Kontakt</div>
                <div className={itemStyle} id="google_translate_element">
                    <div className={itemStyle} onClick={()=>{
                        manualTranslate();
                    }}>Srpski</div>
                </div>
            </div>
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

//call google translate from this function rather then from automatic div
// used for returning to default serbian language rather then displaying translate bar

function manualTranslate () {
  var iframe = document.getElementsByClassName('goog-te-banner-frame')[0];
  if(!iframe) return;

  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var restore_el = innerDoc.getElementsByTagName("button");

  for(var i = 0; i < restore_el.length; i++){
    if(restore_el[i].id.indexOf("restore") >= 0) {
      restore_el[i].click();
      var close_el = innerDoc.getElementsByClassName("goog-close-link");
      close_el[0].click();
      return;
    }
  }
}


