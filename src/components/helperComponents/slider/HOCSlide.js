import React from 'react';

export default (WrappedComponent, props) => {
    class Slide extends React.Component{
        render(){
            return(
                <WrappedComponent {...props}/>
            );
        }
    }

    return Slide;
}