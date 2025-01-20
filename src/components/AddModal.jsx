import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, setShow, drName, appointment, setAppointment }) {
  const handleClose = () => setShow(false);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppos = {
      id: new Date().getTime(),
      patient: patientName,
      day: date,
      consulted: false,
      doctor: drName,
    };
    setAppointment([...appointment, newAppos]);
    setPatientName("");
    setDate("");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appoinment for: {drName}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} className="container">
          <Form.Group className="mb-3">
            <Form.Label> Patient Name</Form.Label>
            <Form.Control
              onChange={(e) => setPatientName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              value={patientName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              type="datetime-local"
              value={date}
            />
            <div className="text-end mt-3">
              <Button
                className="btn-success me-2"
                variant="primary"
                type="submit"
              >
                Save
              </Button>
              <Button
                className="btn-danger"
                variant="primary"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form.Group>
        </Form>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
