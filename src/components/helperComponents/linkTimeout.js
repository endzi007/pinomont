import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const LinkTimeout = (props) =>{

    return(<div onClick={()=>{
        setTimeout(()=>{
            console.log(this.props.path)
        }, 1000);
        this.props.history.push(this.props.path)
    }}>{props.text}</div>);
}

function mapStateToProps(store){
    return{
        appConfig: store.appConfig
    }
}

export default connect(mapStateToProps)(withRouter(LinkTimeout))