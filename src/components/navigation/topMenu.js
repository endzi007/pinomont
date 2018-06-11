import React from 'react';
import { Drawer, MenuItem, RaisedButton, MuiThemeProvider  } from 'material-ui';
import { style, keyframes, media} from 'typestyle';
import PinomontLogo from '../../assets/images/pinomont.svg';
import SvgImage from './svgIcon';
import styles from '../helperComponents/templateStyles';

export default ({show, handleClick, showDrawer}) =>{
    const topStyle = style({
        position: "fixed",
        display: "flex",
        left: 0, 
        top: 0,
        height: "70px",
        padding: "20px",
        width: "100%",
        borderBottom: `3px solid ${styles.primaryColor}`,
        alignItems: "strech",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: `${styles.darkBackgroundColor}`,
        color: `${styles.lightText}`,
        zIndex: "33",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1)"
    }
);
    const rightStyle = (left)=> style({
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        left: 0, 
        top: 0,
        height: "100vh",
        padding: "20px",
        width: "250px",
        borderBottom: "3px solid blue",
        alignItems: "strech",
        justifyContent: "flex-start",
        backgroundColor:`${styles.darkBackgroundColor}`,
        color: `${styles.lightText}`,
        zIndex: "33",
        transform: `translateX(${left}px)`,
        transition:"all 450ms cubic-bezier(0.23, 1, 0.32, 1)"
        });

    const itemStyle = style({
        display: "flex",
        alignItems: "center",
        justifySelf: "center",
        marginLeft: "10px",
        padding: "0 20px",
        $nest:{
            "&:hover":{
                cursor: "pointer"
            }
        }},
        media({maxWidth: 768},{
            flexDirection: "column",
            padding: "20px",
        })
    );

    const rightNav = style({
        display: "flex",
        justifyContent: "space-arround",
        flexDirection: show==="top"? "row": "column",
    }
);
    return(
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
    );
}



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


