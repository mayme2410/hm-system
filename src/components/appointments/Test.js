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

// Create table headers consisting of 4 columns.
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

// Then, use it in a component.
// function SortStateComponent() {
//   const { sortState, onSortByPropChange } = useDatatableWrapper();

//   return (
//     <div style={{ padding: 8 }}>
//       <label>Sort state</label>
//       <pre>{JSON.stringify(sortState)}</pre>

//       <button onClick={() => onSortByPropChange("name")}>
//         External sort by name
//       </button>
//       <button onClick={() => onSortByPropChange("username")}>
//         External sort by username
//       </button>
//     </div>
//   );
// }

function Test() {
  return (
    <DatatableWrapper
      body={TABLE_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
    >
      

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
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table id="result" class="table table-striped">

		<thead><h2>Appointment List</h2>
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
						<td>Testing</td>

                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
						
					</tr>
                    <tr>
						<td>Testing</td>

                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
                        <td>Testing</td>
						
					</tr>
				
			</tbody>
		</Table>
    </DatatableWrapper>
  );
 }

 export default Test;


 <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">{props.patientId}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                            
                            <p><h4>Issue Type : {props.issueType}</h4></p>
                            
                            <p><span>Appointment Date : {props.appointment_date}</span></p>
                            <p><span>Patient Name : {props.patient_firstName}{props.patient_lastName}</span></p>
                            <p><span>Doctor Name : {props.doctor_firstName}{props.doctor_lastName}</span></p>
                           
                                </div>
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                        
                                        <Link to={`/appointment/edit/${props.patientId}`}>
                                            <li className="list-group-item update">
                                                <i className="fa fa-edit pr-1">Update Project Info</i>
                                            </li>
                                        </Link>
                                        <a href="">
                                            <li className="list-group-item delete">
                                                <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>