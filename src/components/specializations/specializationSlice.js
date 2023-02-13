import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_SPECIALIZATIONS = 'http://localhost:8080/api/specialization/all'
const POST_NEW_SPECIALIZATION = 'http://localhost:8080/api/specialization/create'
const DELETE_SPECIALIZATION = 'http://localhost:8080/api/specialization/drIdDelete/'

export const fetchSpecializations = createAsyncThunk('specializations/fetchSpecializations', async ()=>{
    const response = await axios.get(GET_ALL_SPECIALIZATIONS)
    return response.data
})

export const addNewSpecialization = createAsyncThunk('specializations/addNewSpecialization', async (initialSpecialization)=>{
    const response = await axios.post(POST_NEW_SPECIALIZATION,initialSpecialization)
    return response.data
})

export const updateSpecialization = createAsyncThunk('specializations/updateSpecialization', async (initialSpecialization)=>{
    const response = await axios.post(POST_NEW_SPECIALIZATION,initialSpecialization)
    return response.data
})

export const deleteSpecialization = createAsyncThunk('specializations/deleteSpecialization', async (doctorID)=>{
    const response = await axios.delete(`${DELETE_SPECIALIZATION}${doctorID}`)
    return response.data
})
    

const initialState = {
    specializations:[],
    status:'idle',
    error:null
}

export const specializationSlice = createSlice({
    name:'specializationSlice',
    initialState,
    reducers:{
        addSpecialization: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(doctorId,main_specialization,sub_specialization,degree,organ){
                return { payload:{
                    doctorId,
                    main_specialization,
                    sub_specialization,
                    degree,
                    organ
                }
            }
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchSpecializations.pending,(state,action) =>{
                state.status = 'loading'
            })
            .addCase(fetchSpecializations.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.specializations = action.payload
            })
            .addCase(fetchSpecializations.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewSpecialization.fulfilled,(state,action) =>{
                state.specializations.push(action.payload)
            })
            .addCase(updateSpecialization.fulfilled,(state,action) =>{
                const specialization = action.payload
                const specializations = state.specializations.filter(p => p.doctorId !== specialization.doctorId)
                state.specializations = [specialization,...specializations]
            })
            .addCase(deleteSpecialization.fulfilled,(state,action) =>{
                const specializationId = action.payload
                console.log(specializationId)
                const specializations = state.specializations.filter(p => p.doctorId !== specializationId)
                state.specializations = specializations
            })
    }
})



export const selectAllSpecializations = state => state.specializations.specializations
export const getSpecializationStatus = state => state.specializations.status
export const getSpecializationError = state => state.specializations.error
export const selectSpecializationById = (state,doctorID) => state.specializations.specializations.find(
    specialization => specialization.doctorId === doctorID)


export const {addSpecialization} = specializationSlice.actions
export default specializationSlice.reducer