import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    useDatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
  } from "react-bs-datatable";



  import TABLE_BODY from '/Users/maymemoonzin/Workspace/JobReadyOnlineSpringWS1/hmtool-react-client/src/data.json';
  const STORY_HEADERS = [
    {
      prop: "name",
      title: "Name",
      isFilterable: true,
      isSortable: true
    },
    {
      prop: "username",
      title: "Username",
      isSortable: true
    },
    {
      prop: "location",
      title: "Location"
    },
    {
      prop: "date",
      title: "Last Update"
    },
    {
      prop: "score",
      title: "Score",
      isSortable: true
    }
  ];

  function Temp(props){
    return(
    <DatatableWrapper
    body={TABLE_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}>
    <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
        </Col>
        
      </Row>
    <Table class="table table-striped">
        <thead><h2>Appointments</h2>
				<tr>
					<th>ID</th>
					
					<th>Patient Name</th>
					<th>Patient Contact</th>
					<th>Doctor Name</th>
					<th>Appointment Date</th>
					<th>Message</th>
					<th>Action</th>
					
				</tr>
			</thead>
			<tbody>
				
					

					<tr>
						<td>{props.patientId}</td>

                        <td>{props.patient_firstName}{props.patient_lastName}</td>
                        <td>{props.doctor_firstName}{props.doctor_lastName}</td>
                        <td>{props.appointment_date}</td>
                        <td>{props.issueType}</td>
                       
					</tr>
                    
				
			</tbody>
    </Table>
    </DatatableWrapper>
    );
}

export default Temp;


{/* <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src={Logo} height="80" alt="CoolBrand"></img>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <Link to='/dashboard' className="nav-item nav-link active">Dashboard</Link>
                    <a href="#" className="nav-item nav-link active">Service</a>
                    <a href="#" className="nav-item nav-link active">Register</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Login</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Admin</a>
                            <a href="#" className="dropdown-item">Patient</a>
                            
                        </div>
                    </div>
                    <a href="#" className="nav-item nav-link active">Contact Us</a>
                    
                </div>
                
            </div>
        </div>
    </nav> */}