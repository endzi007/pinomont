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

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCategories().then(()=>{
      console.log(this.props);
    });
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
                  <Route exact path="/" component={HomeText} />
                  <Route exact path="/categories" component={Categories}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route path={"/categories/:title"} component={ProductContainer} />
                  <Route path={"/about"} component={About} />
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