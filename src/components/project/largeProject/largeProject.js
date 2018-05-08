import React from 'react';
import { connect } from 'react-redux';
import { Modal } from "react-bootstrap";
import { style, media } from 'typestyle';
import * as styles from './style';

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
        <Modal dialogClassName={styles.modalSize} show={show} onHide={toggleModalShow}>
            <Modal.Header> {title} </Modal.Header>
                <Modal.Body>
                    <div className={styles.modalContainer}>
                        <h2>{title}</h2>
                        <div className={styles.modalBody}>
                            Some random text. Some random text. Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                        <div>
                            <img src={picture} alt={title} />
                            <p>{`Picture of ${title} project`}</p>
                        </div>
                            <div>
                                <h4>Technologies I have used to build this project</h4>
                            <ul className={styles.modalTagContainer}>{tags.map((tag, i)=>{
                                return <li className={styles.modalTags} key={`${id}_${tag}_${i}`}>{tag}</li>
                                })}
                            </ul>
                            </div>   
                        </div>
                                     
                    </div>
                </Modal.Body>
            <Modal.Footer>
                <a href={url} target="_blank" className={`btn btn-success ${styles.footerButton}`}> Go to original project </a>
                <a href={url} target="_blank" className={`btn btn-default ${styles.footerButton}`}> Go to Github <i className="fa fa-github"></i> </a>
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
