import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from '../components/appointments/appointmentsSlice';
import specializationsReducer from '../components/specializations/specializationSlice';

export const store = configureStore({
    reducer:{
        appointments:appointmentsReducer,
        specializations:specializationsReducer
    }
    
})