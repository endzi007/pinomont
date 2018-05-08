import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import animateComponent from './components/HOC/animateComponent';

import Navigation from './components/navigation/navigationContainer';
import Footer from './components/footer';
import TransitionOverlay from './components/helperComponents/transitionOverlay';
import ProductContainer from './components/products/productContainer';

/*-----pages------*/
import Contact from './components/contact/contact';
import Projects from './components//project/categories';
import HomeText from './components//home/homeText';
import Categories from './components//project/categories';





const generalStyles = {
  header: 0,
  content: 0,
  footer: 0
};

class App extends React.Component {
  componentWillMount(){
    generalStyles.header = 40;
    generalStyles.footer = 20;
    generalStyles.content = window.innerHeight-40-20;
  }
  render() {
    const homeTextAnim = animateComponent(HomeText);
    const categoriesAnim = animateComponent(Categories);
    const contactAnim = animateComponent(Contact);
    return (
      <Router>
        <div>
        <Navigation style={generalStyles.header} />
        <Route path="/" render={({ location }) =>{
          return(
            <div>
              <Switch location = {location}>
                <Route exact path="/" component={homeTextAnim} />
                <Route exact path="/categories" component={categoriesAnim}/>
                <Route path="/contact" component={contactAnim}/>
                <Route path={"/categories/:title"} component={ProductContainer} />
              </Switch>
            </div>
          );
        }} />
        <Footer style ={generalStyles.footer}/>
        </div>
        </Router>

    );
  }
}

export default App;