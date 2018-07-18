import React from 'react';
import { Route, Switch } from 'react-router-dom';

import animated from '../HOC/animated';
/*-----pages------*/
import About from '../about';
import Contact from '../contact/contact';
import Categories from '../project/categories';
import FourOFour from '../fourOFour';
import HomeText from '../home/homeText';

import ProductContainer from '../products/productContainer';

const HomeAnim = animated(HomeText);
const CategoriesAnim = animated(Categories); 
const ContactAnim = animated(Contact);
const ProductAnim = animated(ProductContainer);
const AboutAnim = animated(About);

const Comp = () => <div>rnis</div>


export default (history) =>{
    const { pathname, params } = history.location;
    switch (pathname){
        case "/":{
            return <HomeAnim />;
            break;
        }
        case "/about":{
            return <AboutAnim />;
            break;
        }
        case "/categories":{
            if(params !== undefined){
                return <ProductAnim title={params}/>
            }
            return <CategoriesAnim />;
            break;
        }
        case "/contact":{
            return <ContactAnim />;
            break;
        }
        default: {
            return <FourOFour />;
            break;
        }
    }
}