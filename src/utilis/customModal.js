import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, body }) => {
    return (
        <Modal

            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}>

            <Modal.Body>
                {body}
            </Modal.Body>

        </Modal>
    );
};

export default CustomModal;
