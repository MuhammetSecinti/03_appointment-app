import { Col, Container, Row } from "react-bootstrap";
// import { TiDelete } from "react-icons/ti";
import { TiTick, TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointment, setAppointment }) => {

    const handleDelete = (id) =>{
        setAppointment(appointment?.filter(appo => appo.id !== id))
    }
    const handleToggle = (id) => {
        setAppointment(appointment?.map(appo => appo.id === id ? {...appo, consulted: !appo.consulted} : appo ))
    }
  console.log(appointment);
  return (
    <Container>
      <h1>Appoinment List</h1>
      {
        appointment.map(({id , patient, doctor, day , consulted}) => (
          <Row key={id} className={"appointments justify-content-between align-items-center mx-auto " + (consulted ? "consulted" : "")}>
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
            <h5>Date: {new Date(day).toLocaleDateString()}</h5>
            <h5>Time: {new Date(day).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
            <TiTick onClick={() => handleToggle(id)} type="button"className="text-success display-2"/>
            <TiDelete onClick={()=> handleDelete(id)} type="button" className="text-danger display-2"/>
           
            </Col>

          </Row>
        ))
      }
    </Container>
  );
};

export default AppointmentList;
