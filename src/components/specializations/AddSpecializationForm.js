import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewSpecialization,selectSpecializationById,updateSpecialization } from "./specializationSlice"
import { useParams } from "react-router-dom";

function AddSpecializationForm(props){
    const { doctorID } = useParams()
    const specialization = useSelector((state) => selectSpecializationById(state,Number(doctorID)))
   console.log(doctorID)
    console.log(specialization)

    const [doctorId,setDoctorId]=useState(specialization?.doctorId)
    const [main_specialization,setMainSpecialization]=useState(specialization?.main_specialization)
    const [sub_specialization,setSubSpecialization]=useState(specialization?.sub_specialization)
    const [degree,setDegree]=useState(specialization?.degree)
    const [organ,setOrgan]=useState(specialization?.organ)
    
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onDoctorIdInputChange = e => setDoctorId(e.target.value)
    const onMainSpecializationInputChange = e => setMainSpecialization(e.target.value)
    const onSubSpecializationInputChange = e => setSubSpecialization(e.target.value)
    const onDegreeInputChange = e => setDegree(e.target.value)
    const onOrganInputChange = e => setOrgan(e.target.value)
    

    const dispatch = useDispatch()

    const canSave = [doctorId,main_specialization,sub_specialization,degree,organ].every(Boolean) && addRequestStatus === 'idle'

    const isEdit = props.mode === 'edit'

    

    const onSpecializationSubmit = (e) =>{
        e.preventDefault()

        if(canSave){
        setAddRequestStatus('pending...')

        try{
        dispatch(
            isEdit?
            updateSpecialization({
                doctorId,
                main_specialization,
                sub_specialization,
                degree,
                organ
            }):
            addNewSpecialization({
                doctorId,
                main_specialization,
                sub_specialization,
                degree,
                organ
        })).unwrap()
        }catch(error){
            console.log(error)
        }finally{
            setAddRequestStatus('idle')
            setDoctorId('')
            setMainSpecialization('')
            setSubSpecialization('')
            setDegree('')
            setOrgan('')
           
        }

    }   
    }


    
    return (
        <div className="m-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <h2 className="fw-bold mb-5">Add Specialization</h2>
                        <form onSubmit={onSpecializationSubmit}>
                                <div className="row">
            	                    <div className="form-outline mb-4">
                                    <label className="form-label">Enter Doctor's ID</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Doctor ID Number"
                                        className="form-control"
                                        value={doctorId}
                                        onChange={onDoctorIdInputChange}
                                        disabled={isEdit}
                                        required/>
                                    
                                    </div>   
              	                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Main Specialization</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Main Specialization"
                                        className="form-control"
                                        value={main_specialization}
                                        onChange={onMainSpecializationInputChange}
                                        required/>
                                    
                                    
              	                    </div>
                                      <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Sub Specialization</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Sub Specialization"
                                        className="form-control"
                                        value={sub_specialization}
                                        onChange={onSubSpecializationInputChange}
                                        required/>
                                    
                                    
              	                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Degree</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Degree"
                                        className="form-control" 
                                        value={degree}
                                        onChange={onDegreeInputChange}
                                        required/>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Organ</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Organ"
                                        className="form-control" 
                                        value={organ}
                                        onChange={onOrganInputChange}
                                        required/>
                                    </div>
                                    
                                </div>
                                
                                
            
                                <input 
                                    type="submit"
                                    className="btn btn-primary btn-block mb-4"
                                    value={isEdit? 'Update' : 'Save'}
                                    disabled={!canSave}
                                     />

                        </form>
                </div>
            </div>
        </div>
        
    );
}


export default AddSpecializationForm;