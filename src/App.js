import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import animateComponent from './components/HOC/animateComponent';
import { connect } from 'react-redux';
import * as actions from './actions/projectActions';

import Navigation from './components/navigation/navigationContainer';
import Footer from './components/footer';
import TransitionOverlay from './components/helperComponents/transitionOverlay';
import ProductContainer from './components/products/productContainer';
import FourOFour from './components/fourOFour';

/*-----pages------*/
import Contact from './components/contact/contact';
import HomeText from './components/home/homeText';
import Categories from './components/project/categories';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCategories();
    console.log(this.props);
  }
  render() {
    const homeTextAnim = animateComponent(HomeText);
    const categoriesAnim = animateComponent(Categories);
    const contactAnim = animateComponent(Contact);
    return (
      <Router>
        <div>
          <Route path="/" render={({ location }) =>{
            return(
             [
                <Navigation />,
                <TransitionOverlay show={this.props.appConfig.pageTransition} />,
                <Switch location = {location}>
                  <Route exact path="/" component={homeTextAnim} />
                  <Route exact path="/categories" component={categoriesAnim}/>
                  <Route exact path="/contact" component={contactAnim}/>
                  <Route path={"/categories/:title"} component={ProductContainer} />
                  <Route component={FourOFour} />
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