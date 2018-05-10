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

const defaultStyle = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
    gridGap: "20px",
    $nest: {
        "img": {
            border: "2px dotted black",
            width: "100%"
          }
    }
    
});
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
                }, ()=>{
                    this.props.startPageTransition(false);
                });

            }).catch((e)=>{
                console.log(e);
            });
        } else {
            this.props.startPageTransition(false);
        }
    }
    render(){
        let projectsToRender;
        if(this.state.posts.length !== 0){
            projectsToRender = this.state.posts.map((product)=>{
                return <img key={product.ID} src={product.featured_image} alt={product.title} />
            });
        }
        return(
            <div className={`${defaultStyle} pageSection`}>
                {projectsToRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);