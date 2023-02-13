import React from "react";
import { Link } from "react-router-dom";

function CreateSpecializationButton(){
    return(
        <React.Fragment>
       
        
        <div className="container">
            <div className="row">
                 <div className="col">
                     <div className="card">
                     <div className="container">
                     <p><h4>Specialization</h4></p>
                        <Link to='/specialization/create' className="component">
                            Specialization &nbsp;&nbsp;
                        <i className="fa-solid fa-circle-plus"></i>
                        
                        </Link>
                     </div>
                        
                    </div> 
                    
                   
                 </div>
                 <div classNamess="col">
                    <div className="card">
                        <div className="container">
                        <p><h4>Specialization List</h4></p>
                        <Link to='/specialization/list' className="component">
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

export default CreateSpecializationButton;