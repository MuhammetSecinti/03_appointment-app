import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import { Col, Image, Row } from "react-bootstrap";

import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);

  
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((doctor) => (
          <Col xs={6} sm={4} lg={3} key={doctor.id}>
            <Image
              onClick={() => {
                setShow(true);
                setDrName(doctor.name);
              }}
              className="img-thumbnail doctor-img"
              src={doctor.img}
              alt={doctor.name}
            />
            <h5>{doctor.name}</h5>
            <p>{doctor.dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={handleClose}
        drName={drName}
      />
    </Container>
  );
};

export default Doctors;
