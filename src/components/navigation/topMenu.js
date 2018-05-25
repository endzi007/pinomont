import React from 'react';
import { Drawer, MenuItem, RaisedButton, MuiThemeProvider  } from 'material-ui';
import { style, keyframes, media} from 'typestyle';

const SvgImage = ({name, show})=>{
    const styles= style ({
                fill: "#F7F6F1",
                alignSelf: "center",
                height: 30,
                width: 30,
                paddingRight: 10
        }) 
    
    switch (name){
        case "home":
            return(
                <svg className={styles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        case "skills": 
            return(
                <svg className={styles}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            );
        case "projects": 
            return(
                <svg className={styles}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
            );
        case "contact":
            return(
                <svg className={styles}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        default: 
            return;
    }
}


export default ({show, handleClick, visible}) =>{
    const defaultStyle = style({
        position: "fixed",
        display: "flex",
        left: 0, 
        top: 0,
        height: "70px",
        padding: "20px",
        width: "100%",
        borderBottom: "3px solid blue",
        alignItems: "strech",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#292621",
        color: "#F7F6F1",
        zIndex: 3,
        transition: "all 0.5s linear"
    },
    media({maxWidth:768}, {justifyContent: "flex-end", transition: "all 2s linear"})
);
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
        }
        });

    const rightNav = style({
        display: "flex",
        justifyContent: "space-arround"
    },
    media({maxWidth: 768}, {display: "none"})
    );
    return(
        <nav className={defaultStyle}>
                <div>
                    <div className={itemStyle} style={{fontSize: "2em"}}onClick={handleClick.bind(null, "/")}>Pinomont</div>
                </div>
                <div className={rightNav}>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/")}> <SvgImage show={show} name="home"/> Početna </div>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/categories")}><SvgImage show={show} name="projects"/> Kategorije </div>
                    <div className={itemStyle} onClick={handleClick.bind(null, "/Contact")}><SvgImage show={show} name="contact"/> Kontakt </div>
                    <div className={itemStyle} id="google_translate_element"></div>
                </div>
        </nav>
    );
}



