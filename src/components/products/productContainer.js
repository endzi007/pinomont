import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import { style, media } from 'typestyle';
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
}, media({maxWidth: 768},{
    display: ["grid", "-ms-grid"],
    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
    gridGap: "10px",
    gridTemplateRows: "auto",
    })
);
class Projects extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            title: ""
        }
    }
    async tryNewAsync(){
        this.props.fetching(true);
        let lsCategories = await this.props.checkLSCategories();
        if(lsCategories.type === "LS_CATEGORIES_OK"){
            await this.props.getLSCategories(lsCategories.payload);
        } else {
            await this.props.fetchCategories();
        }
        let lsProduct = await this.props.checkLSProduct(this.props.match.params.title);
        console.log("lsProduct", lsProduct);
        if(lsProduct.type==="LS_PRODUCT_OK"){
            await this.props.getLSProduct(lsProduct.payload);
        } else {
            await this.props.fetchProduct(this.props.match.params.title);
        }
        let content = this.props.data.categories.filter((cat)=>{
            return cat.title === this.props.match.params.title.split("_").join(" ") ? cat : "" 
        });
        console.log("content", content);
        this.setState({posts: content[0].posts}, ()=>{
            this.props.startPageTransition(false);
        });
        this.props.fetching(false);

    }
    componentDidMount(){
        const title = this.props.match.params.title.split("_").join(" ");
        this.tryNewAsync();
        this.setState({
            title: title
        });
    } 
    render(){
        console.log("render method", this.props.data.fetching);
        if(this.props.data.fetching){
            return (
                <div className="ui indeterminate text loader">Priprema fajlova...</div>
            )
        } else {
            let projectsToRender = this.state.posts.map((post, i)=>{
                return <Product key={i} delay={i} allProps={post} source={post.featured_image} alternateText={post.title} />
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