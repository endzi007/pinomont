import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import * as actions from './actions/projectActions';

import Navigation from './components/navigation/navigationContainer';
import TransitionOverlay from './components/helperComponents/transitionOverlay';
import Footer from './components/footer';
import RouteLocation from './components/helperComponents/routeHelper';


import { bindActionCreators } from 'redux';





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
                <Route path="/" component={RouteLocation}/>,
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