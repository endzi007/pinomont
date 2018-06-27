import React, { Component } from "react";
import Category from './category';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import { style } from 'typestyle';

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
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "20px",
    $nest: {
        "img": {
            width: "100%"
          }
    }
    
});


class Categories extends Component {
    constructor(){
        super();
    }

    render(){
        var projectsToRender = this.props.data.categories.map((project, i)=>{
                return <Category key={"project"+i} className={`${defaultStyle} projectItem`} {...project} />

        });
        return(
            <div id="projectsSection"  className="pageSection">
                <h1>Kategorije proizvoda:</h1>
                <hr/>
                <div className={defaultStyle} id="projectsSectionContent">
                    {projectsToRender}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);