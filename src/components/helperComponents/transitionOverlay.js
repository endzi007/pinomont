import React, { Component } from 'react';
import { style, keyframes } from 'typestyle';
import { connect } from 'react-redux';


const TransitionOverlay = (props)=>{
    const animationIn = keyframes({
        "0%": {
         " -webkit-transform": "rotateY(-80deg)",
                  "transform": "rotateY(-80deg)",
          opacity: 0,

        },
        "20%": {
             opacity: 1,
           },
        "100%": {
          "-webkit-transform": "rotateY(0)",
                  "transform": "rotateY(0)",
          opacity: 1,
        }
    });
    
    const animationOut = keyframes({
        "0%": {
         " -webkit-transform": "rotateY(0)",
                  "transform": "rotateY(0)",
          opacity: 1,
        },
        "80%": {
             opacity: 1,
           },
        "99%": {
          "-webkit-transform": "rotateY(70deg)",
                  "transform": "rotateY(70deg)",
          opacity: 0,
        },
        "100%": {
            " -webkit-transform": "translateX(-3000px)",
            "transform": "translateX(-3000px)",
        }
    });
    const defaultStyle = style({
        zIndex: 100,
        opacity: 0,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        "-webkit-animation": `${props.show === true ? animationIn: animationOut} ${props.appConfig.transitionDuration}ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        "animation": `${props.show === true ? animationIn: animationOut} ${props.appConfig.transitionDuration}ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        display: "flex",
        verticalAlign: "center",
        backgroundColor: "white"
    });

    const svgStyle = style({
        width: "100vw",
        height: "auto"
    });

    return(
        <div className={defaultStyle}>
            <svg version="1.1" id="Layer_1" className={svgStyle} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                width="100vw" height="100vh" viewBox="0 0 776.274 136.025" enableBackground="new 0 0 776.274 136.025">
            <g id="pinomontLogo">
                <path id="desniKrov_1_" fillRule="evenodd" clipRule="evenodd" fill="#0000FF" d="M510.427,0
                    c-1.484,0.295-2.976,0.559-4.452,0.889c-14.264,3.186-26.746,10.272-38.847,18.144c-16.641,10.822-32.098,23.261-47.712,35.49
                    c-4.859,3.807-9.958,7.305-14.921,10.98c-1.043,0.771-2.422,1.403-2.036,3.591c1.134-0.363,2.271-0.51,3.176-1.051
                    c10.657-6.354,21.313-12.714,31.902-19.18c10.646-6.5,21.104-13.321,31.859-19.632c9.321-5.471,19.083-10.067,29.287-13.758
                    c10.148-3.67,19.992-2.973,29.887,0.646c12.938,4.73,24.721,11.67,36.056,19.39c13.988,9.527,27.798,19.319,41.749,28.902
                    c2.993,2.056,6.141,3.979,9.444,5.439c1.81,0.8,4.123,0.811,6.158,0.621c2.066-0.193,2.893-2.112,2.301-4.204
                    c-1.283-4.534-4.557-7.461-8.183-9.992c-16.229-11.328-32.385-22.765-48.809-33.798c-10.29-6.912-20.951-13.313-32.618-17.679
                    c-4.511-1.688-9.221-2.845-13.867-4.145c-1.391-0.39-2.874-0.445-4.315-0.653C514.466,0,512.448,0,510.427,0z"/>
                <path id="lijevaStrelica" fillRule="evenodd" clipRule="evenodd" d="M0,99.453c4.045-0.544,8.081-1.197,12.14-1.609
                    c6.519-0.66,13.053-1.171,19.582-1.724c2.3-0.194,4.604-0.371,6.909-0.475c7.015-0.315,14.036-0.525,21.048-0.893
                    c33.232-1.738,66.49-0.476,99.733-0.84c2.884-0.031,5.176,1.329,6.63,3.811c1.193,2.034,1.125,4.318-0.448,6
                    c-1.267,1.356-3.081,2.261-4.773,3.132c-0.782,0.403-1.85,0.335-2.788,0.334c-20.633-0.011-41.266-0.015-61.898-0.085
                    c-6.822-0.023-13.645-0.172-20.464-0.362c-8.399-0.234-16.8-0.493-25.193-0.89c-6.561-0.31-13.119-0.754-19.664-1.305
                    c-7.314-0.615-14.611-1.43-21.919-2.128c-2.152-0.206-4.321-0.258-6.47-0.489C1.6,101.842,0.808,101.45,0,101.197
                    C0,100.615,0,100.034,0,99.453z"/>
                <text id="pinomontNatpis" transform="matrix(0.961 0 0 1 171.5405 136.0249)"><tspan x="0" y="0" fill="#0000FF" fontFamily="'Shrikhand-Regular'" fontSize="83.8376">P</tspan><tspan x="57.261" y="0" fontFamily="'Shrikhand-Regular'" fontSize="83.8376">ino</tspan><tspan x="202.969" y="0" fill="#0000FF" fontFamily="'Shrikhand-Regular'" fontSize="83.8376">M</tspan><tspan x="289.739" y="0" fontFamily="'Shrikhand-Regular'" fontSize="83.8376">ont</tspan></text>
                <path id="desniKrov" fillRule="evenodd" clipRule="evenodd" fill="#0000FF" d="M268.169,0.972
                    c1.496,0.295,2.999,0.559,4.486,0.889c14.374,3.186,26.952,10.273,39.146,18.144c16.767,10.822,32.344,23.261,48.076,35.49
                    c4.897,3.807,10.035,7.305,15.036,10.98c1.051,0.772,2.44,1.403,2.052,3.591c-1.143-0.364-2.288-0.511-3.2-1.051
                    c-10.739-6.354-21.476-12.714-32.147-19.18c-10.728-6.5-21.267-13.321-32.103-19.632c-9.394-5.471-19.229-10.067-29.513-13.758
                    c-10.227-3.67-20.146-2.973-30.116,0.646c-13.038,4.73-24.911,11.67-36.333,19.39c-14.095,9.527-28.011,19.319-42.07,28.902
                    c-3.016,2.056-6.187,3.979-9.516,5.439c-1.824,0.8-4.155,0.811-6.206,0.621c-2.083-0.192-2.916-2.112-2.319-4.204
                    c1.292-4.534,4.593-7.461,8.246-9.991c16.353-11.328,32.634-22.766,49.184-33.799c10.369-6.912,21.112-13.313,32.869-17.679
                    c4.545-1.688,9.292-2.845,13.974-4.146c1.401-0.39,2.896-0.445,4.348-0.653C264.099,0.972,266.133,0.972,268.169,0.972z"/>
                <path id="desnaStrelica" fillRule="evenodd" clipRule="evenodd" d="M776.274,106.148c-3.984-0.544-7.957-1.197-11.955-1.609
                    c-6.42-0.66-12.854-1.171-19.283-1.724c-2.266-0.194-4.534-0.371-6.806-0.475c-6.907-0.315-13.821-0.525-20.727-0.893
                    c-32.727-1.738-65.478-0.476-98.216-0.84c-2.84-0.031-5.098,1.329-6.529,3.811c-1.175,2.034-1.107,4.318,0.441,6
                    c1.247,1.356,3.033,2.261,4.699,3.132c0.771,0.403,1.822,0.335,2.746,0.334c20.318-0.011,40.638-0.015,60.957-0.085
                    c6.718-0.023,13.437-0.172,20.152-0.362c8.272-0.234,16.545-0.493,24.811-0.89c6.461-0.31,12.919-0.754,19.364-1.305
                    c7.203-0.615,14.389-1.43,21.585-2.128c2.119-0.206,4.256-0.258,6.371-0.489c0.813-0.088,1.594-0.48,2.389-0.733
                    C776.274,107.311,776.274,106.73,776.274,106.148z"/>
            </g>
            <div className="ui segment">
                    <div className="ui active centered inline loader"></div>
                <p></p>
                </div>
            </svg>

        </div>
    );
}

function mapStateToProps(state){
    return {
        appConfig: state.appConfig
    }
}


export default connect(mapStateToProps)(TransitionOverlay);