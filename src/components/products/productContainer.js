import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import fetch from 'isomorphic-fetch';
import { style } from 'typestyle';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (store) =>{
    return{
        data: store.data,
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
        this.props.fetchCategories().then(()=>{
            this.props.fetchProducts(this.props.match.params.title).then(()=>{
                let content = this.props.data.categories.filter((cat)=>{
                    return cat.title === this.props.match.params.title.split("_").join(" ") ? cat : "" 
                });
                this.setState({posts: content[0].posts}, ()=>{
                    this.props.startPageTransition(false);
                });
            })
        })
    } 

    render(){
        if(this.props.data.fetching){
            return (<div> Loading... </div>)
        } else {
            let projectsToRender = this.state.posts.map((post)=>{
                return <img src={post.featured_image} alt={post.title} />
            });
            return(
                <div className={`${defaultStyle} pageSection`}>
                    {projectsToRender}
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);