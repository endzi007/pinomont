import React from 'react';
import { style, keyframes } from 'typestyle';



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
            animation:`${animationIn} 500ms forwards`,
            animationDelay: `${this.props.delay*100}ms`,
            position: "relative", 
            $nest: {
                "img": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%"
                }
            }
        });
        const detailsDiv = style({
            position: "absolute",
            zIndex: 3, 
            backgroundColor: "rgba(0,0,0,0.8)",
            width: "100%",
            height: "100%",
            transition: "opacity 0.2s ease-in-out",
            padding: "10px",
            display: ["-ms-grid", "grid"],
            gridTemplateColumns: "1fr"

        });
        console.log("slug", this.state.slug[0]);
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
                    <span>Naziv proizvoda: {this.state.slug[0]}</span>
                    <span>Kod proizvoda: {this.state.slug[1]}</span>
                </div>
                <img  src={this.props.source} alt={this.props.alternateText} /> 
            </div>
        );
    }
}