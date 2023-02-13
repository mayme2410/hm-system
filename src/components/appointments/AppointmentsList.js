import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import AppointmentItem from "./AppointmentItem" 

import { selectAllAppointments,getAppointmentError,getAppointmentStatus,fetchAppointments } from "./appointmentsSlice"

function AppointmentsList(){
    const appointments = useSelector( selectAllAppointments )
    const appointmentStatus = useSelector(getAppointmentStatus)
    const error = useSelector(getAppointmentError)

    const dispatch = useDispatch();

    useEffect(()=>{
        if(appointmentStatus === 'idle'){
            dispatch(fetchAppointments())
        }
    },[appointmentStatus,dispatch])

    let content;
    
    if(appointmentStatus === 'loading'){
        content = (<p>Loading....</p>)
    }

    if(appointmentStatus === 'succeeded'){
        content = appointments.map(appointment => <AppointmentItem 
            patientId={appointment.patientId}
            patient_firstName={appointment.patient_firstName}
            patient_lastName={appointment.patient_lastName}
            doctor_firstName={appointment.doctor_firstName}
            doctor_lastName={appointment.doctor_lastName}
            appointment_date={appointment.appointment_date}
            issueType={appointment.issueType}
    />)
    }

    if(appointmentStatus === 'failed'){
        content = (<p>{error}</p>)
    }

   

    return content;
}

export default AppointmentsList