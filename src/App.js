import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import * as actions from './actions/projectActions';

import Navigation from './components/navigation/navigationContainer';
import TransitionOverlay from './components/helperComponents/transitionOverlay';
import Footer from './components/footer';
import ProductContainer from './components/products/productContainer';


/*-----pages------*/
import About from './components/about';
import Contact from './components/contact/contact';
import Categories from './components/project/categories';
import FourOFour from './components/fourOFour';
import HomeText from './components/home/homeText';
import { bindActionCreators } from 'redux';

import animated from './components/HOC/animated';

const homeAnim = animated(HomeText);
const categoriesAnim = animated(Categories); 
const contactAnim = animated(Contact);
const productAnim = animated(ProductContainer);
const aboutAnim = animated(About);
const fourOFourAnim = animated(FourOFour);

class App extends React.Component {

  async fetchData (){
    this.props.fetching(true);
    let lsCategories = await this.props.checkLSCategories();
    if(lsCategories.type === "LS_CATEGORIES_OK"){
      await this.props.getLSCategories(lsCategories.payload);
    } else {
      await this.props.fetchCategories()
    }
    this.props.fetching(false);
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={({ location }) =>{
            return(
             [
                <Navigation />,
                <TransitionOverlay show={this.props.appConfig.pageTransition} />,
                <Switch location = {location}>
                  <Route exact path="/" component={homeAnim} />
                  <Route exact path="/categories" component={categoriesAnim}/>
                  <Route exact path="/contact" component={contactAnim}/>
                  <Route path={"/categories/:title"} component={productAnim} />
                  <Route path={"/about"} component={aboutAnim} />
                  <Route component={fourOFourAnim} />
                </Switch>,
                <Footer />
              ]
            );
          }} />
        </div>
        </Router>

    );
  }
}

function mapStateToProps(store){
  return {
    appConfig: store.appConfig
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);