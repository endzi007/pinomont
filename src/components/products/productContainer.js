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
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        if(this.state.posts.length === 0){
            fetch(`https://public-api.wordpress.com/rest/v1.1/sites/endzibackend.wordpress.com/posts/?category=${this.props.match.params.title}&number=100`).then((response)=>{
                return response.json()
            }).then((parsedData)=>{
                this.setState({
                    posts: parsedData.posts
                });
            }).catch((e)=>{
                console.log(e);
            });
        }
    }
    render(){
        let projectsToRender;
        if(this.state.posts.length !== 0){
            projectsToRender = this.state.posts.map((product)=>{
                return <img key={product.id} src={product.featured_image} alt={product.title} />
            });
        }
        return(
            <div>
                {projectsToRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);