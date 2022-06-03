import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import CButton from "../formElements/button";


interface IEditUserProps { }

const EditUser: FC<IEditUserProps> = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <FontAwesomeIcon
                icon={faUserPen}
                onClick={handleShow}
            />         

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <CButton BVariant={"danger"} text={"CLOSE"} onClick={handleClose} />
                    <CButton BVariant={"success"} text={"SAVE CHANGES"} onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}

export default EditUser;
