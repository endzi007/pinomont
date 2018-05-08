import React from 'react';
import { connect } from 'react-redux';
import { Modal } from "react-bootstrap";
import { style, media } from 'typestyle';

const footerButton = style({
    borderRadius: "6px",
    width: "49%"
});

const modalBody = style({
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gridGap: "30px"
},
    media({maxWidth: 768}, {
        display: "grid",
        gridTemplateColumns: "1fr"
    })
);

const modalContainer = style({
    fontFamily: "Playfair Display!important",
});

const modalTags = style({
    listStyle: "bullets",
    marginLeft: "4px",
    borderRadius: "3px",
    padding: "3px 10px"
});

const modalTagContainer = style({

});


const modalSize = style(
    media({minWidth: 768},{
        minWidth: "70vw",
    }),
    media({maxWidth: 768},{
        minWidth: "90vw",
    })
);

const LargeProject = ({
    tags, 
    title,
    id,
    url, 
    picture, 
    show,
    toggleModalShow
})=>{
    return (
        //dialogClassName used for custom modal sizing 
        <Modal dialogClassName={modalSize} show={show} onHide={toggleModalShow}>
            <Modal.Header> {title} </Modal.Header>
                <Modal.Body>
                    <div className={modalContainer}>
                        <h2>{title}</h2>
                        <div className={modalBody}>
                            Some random text. Some random text. Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                        <div>
                            <img src={picture} alt={title} />
                            <p>{`Picture of ${title} project`}</p>
                        </div>   
                        </div>
                                     
                    </div>
                </Modal.Body>
            <Modal.Footer>
                <a href={url} target="_blank" className={`btn btn-success ${footerButton}`}> Go to original project </a>
                <a href={url} target="_blank" className={`btn btn-default ${footerButton}`}> Go to Github <i className="fa fa-github"></i> </a>
            </Modal.Footer>
        </Modal>
    )
}

function mapStateToProps(store){
    return {
        projects: store.projects
    }
}


export default connect (mapStateToProps)(LargeProject); 
