import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import { Col, Image, Row } from "react-bootstrap"



const Doctors = () => {
  console.log(doctorData);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {
          doctorData.map(doctor => 
            <Col xs={6} sm={4} lg={3} key={doctor.id}>
            <Image className="img-thumbnail doctor-img" src={doctor.img} alt={doctor.name} />
            <h5>{doctor.name}</h5>
            <p>{doctor.dep}</p>
            </Col>
          )
        }
      </Row>

    </Container>
  )
}

export default Doctors
