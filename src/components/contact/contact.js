import React, { Component } from 'react';
import { style } from 'typestyle';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import appConfig from '../../appConfig';

const emailSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill="white" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
<path d="M0 0h24v24H0z" fill="none"/>
</svg>;
const phone = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none"/>
<path fill="white" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
</svg>;

const place = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill="white" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
<path d="M0 0h24v24H0z" fill="none"/>
</svg>;

const social = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M0 0h24v24H0z" fill="none"/>
<path fill = "white" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
</svg>;

const facebook = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill = "white" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
</svg>;



const wrapperStyle = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "30px"
});

const contactInfo = style({
    display: "flex",
    display: "-ms-flex",
    display: "-webkit-flex",
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "center",
    $nest:{
        "img":{
            fill: "white",
            
        }
    }
});

const contactItem = style({
    display: "flex",
    display: "-ms-flex",
    display: "-webkit-flex",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: "10px",
    $nest:{
        "span":{
            marginLeft: "20px"
        }
    }
});
class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        var name = e.target.name;
        switch (name) {
            case "name":
                this.setState({name: e.target.value})
                break;
            case "email":
                this.setState({email: e.target.value})
                break;
            case "message":
                this.setState({message: e.target.value})
                break;
            default:
                break;
        }
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){

        return(
            
            <div className={`pageSection ${wrapperStyle}` }>
                <div className={contactInfo}>
                    <h2> Kontaktirajte nas </h2>
                    <hr/>
                    <div className={contactItem}>{place}<span>Address: ul. Miljana Tomičića bb. Berane - Crna Gora</span></div>
                    <div className={contactItem}>{emailSvg}<span>Email: pinomont@areon.me </span> </div>
                    <div className={contactItem}>{phone}<span>Telefon: +382(68)070-133</span></div>
                    <div className={contactItem}>{social} <span>{facebook}</span></div>
                </div>
                <div style={{padding: "30px", position: "relative"}}>
                <h2> Kako do nas? </h2>
                <Map 
                    google={this.props.google} 
                    style={{width: "100%", height: "90%"}} 
                    zoom={16}
                    initialCenter={{
                        lat: 42.853845,
                        lng: 19.867010
                    }}
                    >
                    <Marker onClick={this.onMarkerClick} name={'Pinomont doo Berane'} />

                </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (appConfig.googleApiKey)
  })(Contact)