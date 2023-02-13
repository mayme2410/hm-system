import { Link } from "react-router-dom";
import React from "react";
import AppointmentsList from "./AppointmentsList";
function CreateAppointmentButton(){
    return (
        <React.Fragment>
        
        
        <div className="container">
            <div className="row">
                 <div className="col">
                     <div className="card">
                     <div className="container">
                     <p><h4>Appointment</h4></p>
                        <Link to='/appointment/create' className="component">
                             Make an appointment &nbsp;&nbsp;
                            <i className="fa-solid fa-circle-plus"></i>
                        
                         </Link>
                     </div>
                        
                    </div> 
                    
                   
                 </div>
                 <div classNamess="col">
                    <div className="card">
                        <div className="container">
                        <p><h4>Appointment List</h4></p>
                        <Link to='/appointment/list' className="component">
                             View List &nbsp;&nbsp;
                            {/* <i className="fa-solid fa-circle-plus"></i> */}
                        
                        </Link>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        
       
</div>              

        </React.Fragment>
        
    );
}

export default CreateAppointmentButton;