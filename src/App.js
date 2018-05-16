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

/*-----pages------*/
import Contact from './components/contact/contact';
import Projects from './components/project/categories';
import HomeText from './components/home/homeText';
import Categories from './components/project/categories';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';





const generalStyles = {
  header: 0,
  content: 0,
  footer: 0
};

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCategories();
  }
  render() {
    const homeTextAnim = animateComponent(HomeText);
    const categoriesAnim = animateComponent(Categories);
    const contactAnim = animateComponent(Contact);
    return (
      <Router>
        <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Pinomont - Berane</title>
        </Helmet>
        <Navigation style={generalStyles.header} />
        <TransitionOverlay show={this.props.appConfig.pageTransition} />
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

function mapStateToProps(store){
  return {
    appConfig: store.appConfig
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);