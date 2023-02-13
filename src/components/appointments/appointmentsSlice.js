import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_APPOINTMENTS = 'http://localhost:8080/api/appointment/all'
const POST_NEW_APPOINTMENT = 'http://localhost:8080/api/appointment/create'
const DELETE_APPOINTMENT = 'http://localhost:8080/api/appointment/ptIdDelete/'

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async ()=>{
    const response = await axios.get(GET_ALL_APPOINTMENTS)
    return response.data
})

export const addNewAppointment = createAsyncThunk('appointments/addNewAppointment', async (initialAppointment)=>{
    const response = await axios.post(POST_NEW_APPOINTMENT,initialAppointment)
    return response.data
})

export const updateAppointment = createAsyncThunk('appointments/updateAppointment', async (initialAppointment)=>{
    const response = await axios.post(POST_NEW_APPOINTMENT,initialAppointment)
    return response.data
})

export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (patientID)=>{
    const response = await axios.delete(`${DELETE_APPOINTMENT}${patientID}`)
    return response.data
})
    

const initialState = {
    appointments:[],
    status:'idle',
    error:null
}

export const appointmentsSlice = createSlice({
    name:'appointmentsSlice',
    initialState,
    reducers:{
        addAppointment: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(patientId,patient_firstName,patient_lastName,doctor_firstName,doctor_lastName,appointment_date,issueType){
                return { payload:{
                    patientId,
                    patient_firstName,
                    patient_lastName,
                    doctor_firstName,
                    doctor_lastName,
                    appointment_date,
                    issueType
                }
            }
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchAppointments.pending,(state,action) =>{
                state.status = 'loading'
            })
            .addCase(fetchAppointments.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.appointments = action.payload
            })
            .addCase(fetchAppointments.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewAppointment.fulfilled,(state,action) =>{
                state.appointments.push(action.payload)
            })
            .addCase(updateAppointment.fulfilled,(state,action) =>{
                const appointment = action.payload
                const appointments = state.appointments.filter(p => p.patientId !== appointment.patientId)
                state.appointments = [appointment,...appointments]
            })
            .addCase(deleteAppointment.fulfilled,(state,action) =>{
                const appointmentId = action.payload
                console.log(appointmentId)
                const appointments = state.appointments.filter(p => p.patientId !== appointmentId)
                state.appointments = appointments
            })
    }
})



export const selectAllAppointments = state => state.appointments.appointments
export const getAppointmentStatus = state => state.appointments.status
export const getAppointmentError = state => state.appointments.error
export const selectAppointmentById = (state,patientID) => state.appointments.appointments.find(
    appointment => appointment.patientId === patientID)


export const {addAppointment} = appointmentsSlice.actions
export default appointmentsSlice.reducer