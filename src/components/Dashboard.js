import AppointmentsList from "./appointments/AppointmentsList";
import CreateAppointmentButton from "./appointments/CreateAppointmentButton";
import CreateSpecializationButton from "./specializations/CreateSpecializationButton";
import { Table } from "react-bootstrap";

function Dashboard(){
    return (
        <div className="appointments">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Welcome</h1>
                    <br />
                    <br />
                    
                        <Table>
                            <tr>
                                    <td><CreateAppointmentButton /></td>
                                    <td><CreateSpecializationButton /></td>
                                    <td><CreateSpecializationButton /></td>
                            </tr>   
                        </Table>
                 
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;