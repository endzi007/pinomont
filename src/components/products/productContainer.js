import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import fetch from 'isomorphic-fetch';
import { style } from 'typestyle';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (store) =>{
    return{
        categories: store.categories,
        filterTags: store.filterTags
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions, dispatch)
}


class Projects extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        let fetchUrl = this.props.match.params.title.split("_").join(" ");
        this.props.fetchCategories();
        this.props.fetchProducts(fetchUrl);
    }
    render(){
        return(
            <div>
                {this.props.match.url}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);