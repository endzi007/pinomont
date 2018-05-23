import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default class extends Component{
    render(){
        return(
            <Carousel 
            autoPlay 
            showStatus={false}
            dynamicHeight
            showThumbs={false}
            >
                <div>
                    <img src="http://areon-fresh.com/wp-content/uploads/2017/07/Baner-Home-Perfume-Premium-min.jpg" alt="slide" />

                </div>
                <div>
                    <img src="http://areon-fresh.com/wp-content/uploads/2017/07/Baner-Home-Perfume-Premium-min.jpg" alt="slide" />

                </div>
            </Carousel>
        );
    }
}
