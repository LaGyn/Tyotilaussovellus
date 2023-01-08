import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Lomake from './Lomake';

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Rekisteröidy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rekisteröintilomake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Lomake />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Sulje
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<Register />);
export default Register