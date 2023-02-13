import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import { deleteSpecialization } from "./specializationSlice";
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
function SpecializationItem(props){

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
      <h2>Specialization List</h2>
    <Table class="table table-striped">
    
        <thead>
				<tr>
					<th>Doctor ID</th>
					
					<th>Main Specialization</th>
					<th>Sub Specialization</th>
					<th>Degree</th>
					<th>Organ</th>
					<th>Action</th>
					
				</tr>
			</thead>
			<tbody>
				
					

					<tr>
						<td>{props.doctorId}</td>

                        <td>{props.main_specialization}</td>
                        <td>{props.sub_specialization}</td>
                        <td>{props.degree}</td>
                        <td>{props.organ}</td>
                        <td><Link to={`/specialization/edit/${props.doctorId}`}>
                            <i className="fa-sharp fa-regular fa-pen-to-square"></i>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <a onClick={()=>{dispatch(deleteSpecialization(props.doctorId)).unwrap()}}>
                            <i className="fa-solid fa-trash-can"></i>
                            </a></td>
					</tr>
                    
				
			</tbody>
    </Table>
   
    </div>
                    
    );
}

export default SpecializationItem;


