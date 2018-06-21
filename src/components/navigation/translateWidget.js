import React from 'react';
import { style } from 'typestyle';
import serbian from '../../assets/images/flags/rs.svg';
import russian from '../../assets/images/flags/ru.svg';
import english from '../../assets/images/flags/gb.svg';
import macedonian from '../../assets/images/flags/mk.svg';
import romanian from '../../assets/images/flags/ro.svg';
import montenegrian from '../../assets/images/flags/me.svg';
import german from '../../assets/images/flags/de.svg';
export default () =>{

    const languages = style({
        display: "flex",
        flexDirection: "column"
    });
    const lang = style({
        height: "25px",
        width: "25px",
        $nest: {
            "img":{
                maxWidth: "100%",
                maxHeight: "100%",
            }
        }
    });
    return (
        [
            <div id="google_translate_element"></div>,
            <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white"
                
            }}>
            <div className={languages}>
                <div className={lang} onClick={translateOnClick.bind(this, "Serbian")}><img src={montenegrian} alt="montenegrian"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "Serbian")}><img src={serbian} alt="serbian"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "English")}><img src={english} alt="english"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "Russian")}><img src={russian} alt="russian"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "Macedonian")}><img src={macedonian} alt="macedonian"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "Romanian")}><img src={romanian} alt="romanian"/></div>
                <div className={lang} onClick={translateOnClick.bind(this, "German")}><img src={german} alt="german"/></div>
                </div>  
            </div>
        ]
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

  function translateOnClick(lang){
      if(lang === "Serbian"){
        manualTranslate();
        return;
      }
      let element = document.getElementsByClassName("goog-te-menu-frame")[0];
      let content = element.contentDocument || element.contentWindow.document;
      let en = content.getElementsByClassName("goog-te-menu2-item");
      let counter = 0;
      console.log(en);
      for(let i = 0; i<en.length; i++){
        let elem = en[i].getElementsByClassName("text")[0].innerText;
        console.log(elem);
        if(elem === lang){
            counter = i;
        }
      }
     en[counter].click();
  }
