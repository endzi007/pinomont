import React from 'react';
import { style } from 'typestyle';
import serbian from '../../assets/images/flags/rs.svg';
import russian from '../../assets/images/flags/ru.svg';
import english from '../../assets/images/flags/gb.svg';
import macedonian from '../../assets/images/flags/mk.svg';
import romanian from '../../assets/images/flags/ro.svg';
import montenegrian from '../../assets/images/flags/me.svg';
import german from '../../assets/images/flags/de.svg';



export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            current: serbian,
            all: {
                Serbian: serbian,
                Montenegrian: montenegrian, 
                Russian: russian,
                English: english,
                Macedonian: macedonian,
                Romanian: romanian, 
                German: german
            },
            showLanguages: false
        }
    }

    //call google translate from this function rather then from automatic div
    // used for returning to default serbian language rather then displaying translate bar
    manualTranslate = () => {
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

    translateOnClick = (lang, lang2)=>{
        
        if(lang2 !== null){
            this.setState({
                current: this.state.all[lang2]
            });
        } else {
            this.setState({
                current: this.state.all[lang]
            });
        }
        this.setStorageKey(lang, lang2);
        if(lang === "Serbian"){
          this.manualTranslate();
          return;
        }
        let element = document.getElementsByClassName("goog-te-menu-frame")[0];
        let content = element.contentDocument || element.contentWindow.document;
        let en = content.getElementsByClassName("goog-te-menu2-item");
        let counter = 0;
        for(let i = 0; i<en.length; i++){
          let elem = en[i].getElementsByClassName("text")[0].innerText;
          if(elem === lang){
              counter = i;
          }
        }
       en[counter].click();
    }
    setStorageKey(lang, lang2){
        try{
            if(lang2 !==null){
                localStorage.setItem("language", lang2);
            } else {
                localStorage.setItem("language", lang);
            }
        } catch(e){
            console.log(e);
        }
    }
    languages = style({
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        flexDirection: "column"
    })

    lang = style({
        height: "35px",
        width: "35px",
        $nest: {
            "img":{
                maxWidth: "100%",
                maxHeight: "100%",
            },
            "&:hover":{
                cursor: "pointer"
            }
        }
    });

    handleHover(){
        this.setState({
            showLanguages: true
        });
    }
    handleLeave(){
        this.setState({
            showLanguages: false
        });
    }

    componentDidMount(){
        try{
            let curr = localStorage.getItem("language");
            if(curr !== null ){
                this.setState({
                    current: this.state.all[curr]
                });
            }
        } catch(e){
            this.setState({
                current: this.state.all[0]
            });
        }
    }
    render(){
        return (
            [
                <div key="tw1" id="google_translate_element"></div>,
                <div key="tw2"onMouseLeave={this.handleLeave.bind(this)} style={{
                    position: "absolute",
                    top: "30px",
                    right: "20px",
                    color: "white"
                    
                }}>
                <div className={this.lang}><img onClick={this.handleHover.bind(this)}src={this.state.current}/></div>
                <div className={this.languages} style={{visibility: this.state.showLanguages===true? "visible": "hidden"}}>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "Serbian", "Montenegrian")}><img src={montenegrian} alt="montenegrian"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "Serbian", null)}><img src={serbian} alt="serbian"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "English", null)}><img src={english} alt="english"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "Russian", null)}><img src={russian} alt="russian"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "Macedonian", null)}><img src={macedonian} alt="macedonian"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "Romanian", null)}><img src={romanian} alt="romanian"/></div>
                    <div className={this.lang} onClick={this.translateOnClick.bind(this, "German", null)}><img src={german} alt="german"/></div>
                    </div>  
                </div>
            ]
        );
    }
}





