import React from 'react';
import { style, keyframes, media } from 'typestyle';
import styles from '../helperComponents/templateStyles';



export default class extends React.Component {
    
    constructor(){
        super();
        this.state = {
            show: false,
            slug: ["", ""]
        }
    }
    shouldComponentUpdate(prev, next){
        if(prev===next){
            return false;
        } else {
            return true;
        }
    }

    componentDidMount(){
        this.setState({
            slug: this.props.slug.split("-")
        });
    }

    handleEnter(){
        this.setState({
            show: true
        });
    }
    handleLeave(){
        this.setState({
            show: false
        });
    }
    render(){
        const animationIn = keyframes({
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            }
        });
        const defaultStyle = style({
            opacity: 0,
            fontSize: "0.8em", 
            lineHeight: "1em",
            animation:`${animationIn} 500ms forwards`,
            animationDelay: `${this.props.delay*100}ms`,
            position: "relative", 
            overflow: "hidden",
            padding: "0",
            $nest: {
                "img": {
                    marginTop: 0,
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%"
                },
                "&:hover":{
                    cursor: "pointer"
                }
            }
        });
        const detailsDiv = style({
            position: "absolute",
            top: 0, 
            zIndex: 3, 
            backgroundColor: "rgba(0,0,0,0.9)",
            width: "100%",
            height: "100%",
            transition: "opacity 0.2s ease-in-out",
            padding: "10px",
            display: ["-ms-grid", "grid"],
            gridTemplateColumns: "1fr",
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center"

        }, media({maxWidth: 768},{
            fontSize: "0.5em",
            lineHeight: "1em",
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center"
        }));

        return(
            <div 
                className={defaultStyle}
                onMouseEnter={this.handleEnter.bind(this)}
                onMouseLeave={this.handleLeave.bind(this)}
            >
                <div className={detailsDiv} style={{
                    opacity: this.state.show === true ? "1": "0"
                }}>
                    <h4>Detalji:</h4>
                    <span>Naziv proizvoda:</span>
                    <span style={{color: styles.secondaryColor}}>{this.state.slug[0]}</span>
                    <span>Kod proizvoda:</span>
                    <span style={{color: styles.secondaryColor}}>{this.state.slug[1]}</span>
                </div>
                <img  src={this.props.source} alt={this.props.alternateText} /> 
            </div>
        );
    }
}