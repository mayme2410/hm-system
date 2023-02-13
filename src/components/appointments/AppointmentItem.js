import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "./appointmentsSlice";
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
//   const STORY_HEADERS = [
//     {
//       prop: "name",
//       title: "Name",
//       isFilterable: true,
//       isSortable: true
//     },
//     {
//       prop: "username",
//       title: "Username",
//       isSortable: true
//     },
//     {
//       prop: "location",
//       title: "Location"
//     },
//     {
//       prop: "date",
//       title: "Last Update"
//     },
//     {
//       prop: "score",
//       title: "Score",
//       isSortable: true
//     }
//   ];
function AppointmentItem(props){

  const dispatch = useDispatch()
    return (
        <div className="container">
            {/* <DatatableWrapper
    body={TABLE_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}> */}
    {/* <Row className="mb-4 p-2">
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
        
      </Row> */}
      <h2>Appointment List</h2>
    <Table class="table table-striped">
    
        <thead>
				<tr>
					<th>Patient ID</th>
					
					<th>Patient Name</th>
					<th>Doctor Name</th>
					<th>Appointment Date</th>
					<th>Issue Type</th>
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
                        <td><Link to={`/appointment/edit/${props.patientId}`}>
                            <i className="fa-sharp fa-regular fa-pen-to-square"></i>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <a onClick={()=>{dispatch(deleteAppointment(props.patientId)).unwrap()}}>
                            <i className="fa-solid fa-trash-can"></i>
                            </a></td>
					</tr>
                    
				
			</tbody>
    </Table>
   
    </div>
                    
    );
}

export default AppointmentItem;


