import { Card, Col, Container, Row } from "react-bootstrap/";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ appointment, setAppointment }) => {
  const [show, setShow] = useState(false);

  const [drName, setDrName] = useState("");

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "red" }}>
        Our Doctor
      </h3>
      <Row>
        {doctorData.map(({ name, dep, img, id }) => (
          <Col className="m-6" xs={6} sm={4} lg={3} key={id}>
            <Card.Img
              onClick={() => {
                setShow(true);
                setDrName(name);
              }}
              className="img-thumnail doctor-img "
              variant="top"
              src={img}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{dep}</Card.Text>
            </Card.Body>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        setShow={setShow}
        drName={drName}
        appointment={appointment}
        setAppointment={setAppointment}
      />
    </Container>
  );
};

export default Doctors;
