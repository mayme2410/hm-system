
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewAppointment,selectAppointmentById,updateAppointment } from "./appointmentsSlice";
import { useParams } from "react-router-dom";

function AddAppointmentForm(props){
    const { patientID } = useParams()
    const appointment = useSelector((state) => selectAppointmentById(state,Number(patientID)))
    console.log(patientID)
    console.log(appointment)

    const [patientId,setPatientId]=useState(appointment?.patientId)
    const [patient_firstName,setPatientFirstName]=useState(appointment?.patient_firstName)
    const [patient_lastName,setPatientLastName]=useState(appointment?.patient_lastName)
    const [doctor_firstName,setDoctorFirstName]=useState(appointment?.doctor_firstName)
    const [doctor_lastName,setDoctorLastName]=useState(appointment?.doctor_lastName)
    const [appointment_date,setAppointmentDate]=useState(appointment?.appointment_date)
    const [issueType,setIssueType]=useState(appointment?.issueType)
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onPatientIdInputChange = e => setPatientId(e.target.value)
    const onPatientFirstNameInputChange = e => setPatientFirstName(e.target.value)
    const onPatientLastNameInputChange = e => setPatientLastName(e.target.value)
    const onDoctorFirstNameInputChange = e => setDoctorFirstName(e.target.value)
    const onDoctorLastNameInputChange = e => setDoctorLastName(e.target.value)
    const onAppointmentDateInputChange = e => setAppointmentDate(e.target.value)
    const onIssueTypeInputChange = e => setIssueType(e.target.value)

    const dispatch = useDispatch()

    const canSave = [patientId,patient_firstName,patient_lastName,doctor_firstName,doctor_lastName,appointment_date,issueType].every(Boolean) && addRequestStatus === 'idle'

    const isEdit = props.mode === 'edit'

    

    const onAppointmentSubmit = (e) =>{
        e.preventDefault()

        if(canSave){
        setAddRequestStatus('pending...')

        try{
        dispatch(
            isEdit?
            updateAppointment({
                patientId,
                patient_firstName,
                patient_lastName,
                doctor_firstName,
                doctor_lastName,
                appointment_date,
                issueType
            }):
            addNewAppointment({
                patientId,
                patient_firstName,
                patient_lastName,
                doctor_firstName,
                doctor_lastName,
                appointment_date,
                issueType
        })).unwrap()
        }catch(error){
            console.log(error)
        }finally{
            setAddRequestStatus('idle')
            setPatientId('')
            setPatientFirstName('')
            setPatientLastName('')
            setDoctorFirstName('')
            setDoctorLastName('')
            setAppointmentDate('')
            setIssueType('')
        }

    }   
    }


    
    return (
        <div className="m-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <h2 className="fw-bold mb-5">Book An Appointment</h2>
                        <form onSubmit={onAppointmentSubmit}>
                                <div className="row">
            	                    <div className="form-outline mb-4">
                                    <label className="form-label">Enter Patient's ID</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Patient ID Number"
                                        className="form-control"
                                        value={patientId}
                                        onChange={onPatientIdInputChange}
                                        disabled={isEdit}
                                        required/>
                                    
                                    </div>   
              	                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Patient's FirstName</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Patient FirstName"
                                        className="form-control"
                                        value={patient_firstName}
                                        onChange={onPatientFirstNameInputChange}
                                        required/>
                                    
                                    
              	                    </div>
                                      <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Patient's LastName</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Patient LastName"
                                        className="form-control"
                                        value={patient_lastName}
                                        onChange={onPatientLastNameInputChange}
                                        required/>
                                    
                                    
              	                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Doctor's FirstName</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Doctor FirstName"
                                        className="form-control" 
                                        value={doctor_firstName}
                                        onChange={onDoctorFirstNameInputChange}
                                        required/>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Enter Doctor's LastName</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Doctor LastName"
                                        className="form-control" 
                                        value={doctor_lastName}
                                        onChange={onDoctorLastNameInputChange}
                                        required/>
                                    </div>
                                    
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Choose Appointment Date</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Appointment Date"
                                        className="form-control"
                                        value={appointment_date}
                                        onChange={onAppointmentDateInputChange}
                                        required/>
                                    
                                </div>
            
                                <div className="form-outline mb-4">
                                <label className="form-label">Write description why you want to make appointment...</label>
                                <textarea
                                    placeholder="Why do you want to book appointment?"
                                    className="form-control"
                                    value={issueType}
                                    onChange={onIssueTypeInputChange}
                                    required></textarea>
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


export default AddAppointmentForm;