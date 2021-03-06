import React from 'react';
import { style, keyframes, media} from 'typestyle';

const SvgImage = ({name, show})=>{
    function styles(delay, color) {
        var animationIn = keyframes({
                "0%": {
                  "-webkit-transform": "translateX(-1000px)",
                          "transform": "translateX(-1000px)",
                  "opacity": "0",
                  "fill": "gray"
                },
                "90%": {
                    "fill": "gray"
                },
                "100%":{
                  "-webkit-transform": "translateX(0)",
                          "transform": "translateX(0)",
                  "opacity": "1",
                  "fill": `${color}`
                }
        });
        var animationOut = keyframes({
            "0%": {
              "-webkit-transform": "translateX(0px)",
                      "transform": "translateX(0)",
              "opacity": "1",
              "fill": `${color}`
            },
            "100%":{
              "-webkit-transform": "translateX(-1000px)",
                      "transform": "translateX(-1000px)",
              "opacity": "0",
              "fill": "gray"
            }
    });
        if(show){
            return style({
                fill: "gray",
                alignSelf: "center",
                height: 40,
                width: 40,
                "-webkit-animation": `${animationIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                "animation": `${animationIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                animationDelay: `${delay}ms`
            });
        } else {
            return style({
                fill: "gray",
                alignSelf: "center",
                height: 40,
                width: 40,
                "-webkit-animation": `${animationOut} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                "animation": `${animationOut} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                animationDelay: `${delay}ms`
            });
        }

    }
    

    switch (name){
        case "home":
            return(
                <svg className={styles(0, "#292621")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        case "skills": 
            return(
                <svg className={styles(100, "#292621")}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            );
        case "projects": 
            return(
                <svg className={styles(200, "#292621")}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
            );
        case "contact":
            return(
                <svg className={styles(300, "#292621")}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        default: 
            return;
    }
}

const navItemStyle = style({
    borderBottom: "1px solid lightgray",
    display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
    display: "-ms-flex",
    display: "-webkit-flex",
    flexDirection: "column",
    color: "#292621",
    $nest: {
        "&:hover":{
            backgroundColor: "gray",
            cursor: "pointer"
        }
    }
}
);

const NavigationDrawer = ({show, handleClick}) =>{
    const drawerStyle = style({
        width: "200px",
        height: "100vh",
        borderRight: "2px solid gray",
        position: "fixed",
        top: 0, 
        left: 0,
        zIndex: 3,
        backgroundColor: "white",
        display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
        flexDirection: "column",
        textAlign: "center"
    });
    return(
    <div className={drawerStyle}>
            <div className={navItemStyle} onClick={handleClick.bind(null, "/")}> <SvgImage show={show} name="home"/> Početna </div>
            <div className={navItemStyle} onClick={handleClick.bind(null, "/categories")}><SvgImage show={show} name="projects"/> Kategorije </div>
            <div className={navItemStyle} onClick={handleClick.bind(null, "/Contact")}><SvgImage show={show} name="contact"/> Kontakt </div>
            <div className={navItemStyle}>
            <div id={`${show === true?"google_translate_element": "placeholderForTranslateDrawer"}`}></div>
            </div>
    </div>
    );
}

export default NavigationDrawer;

