import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import fetch from 'isomorphic-fetch';
import { style } from 'typestyle';
import { withRouter } from 'react-router-dom';
import Product from './product';


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
    display: ["grid", "-ms-grid"],
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
            posts: [],
            title: ""
        }
    }

    componentDidMount(){
        const title = this.props.match.params.title.split("_").join(" ");
        this.setState({
            title: title
        });
        this.props.checkLSCategories().then((obj)=>{
            if(obj.type !== "LS_CATEGORIES_OK"){
                this.props.getLSCategories();
                this.props.fetchProducts(this.props.match.params.title).then(()=>{
                    console.log("categories", this.props.data.categories);
                    let content = this.props.data.categories.filter((cat)=>{
                        return cat.title === this.props.match.params.title.split("_").join(" ") ? cat : "" 
                    });
                    this.setState({posts: content[0].posts}, ()=>{
                        this.props.startPageTransition(false);
                    });
                })
              } else {
                this.props.fetchCategories().then(()=>{
                    this.props.fetchProducts(this.props.match.params.title).then(()=>{
                        let content = this.props.data.categories.filter((cat)=>{
                            return cat.title === this.props.match.params.title.split("_").join(" ") ? cat : "" 
                        });
                        this.setState({posts: content[0].posts}, ()=>{
                            this.props.startPageTransition(false);
                        });
                    })
                });
              }
        }).catch((e)=>{
            if(e==="LS_CATEGORIES_BAD"){
                this.props.fetchCategories().then(()=>{
                    this.props.fetchProducts(this.props.match.params.title).then(()=>{
                        let content = this.props.data.categories.filter((cat)=>{
                            return cat.title === this.props.match.params.title.split("_").join(" ") ? cat : "" 
                        });
                        this.setState({posts: content[0].posts}, ()=>{
                            this.props.startPageTransition(false);
                        });
                    })
                });
            }
        });
    } 
    render(){

        if(this.props.data.fetching){
            return (
                <div className="ui indeterminate text loader">Priprema fajlova...</div>
            )
        } else {
            let projectsToRender = this.state.posts.map((post, i)=>{
                return <Product key={i} delay={i} source={post.featured_image} alternateText={post.title} />
            });
            return(
                <div className="pageSection">
                <h1>{this.state.title}</h1>
                <hr/>
                <div className={`${defaultStyle}`}>
                    {projectsToRender}
                </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);