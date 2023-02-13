import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import MainNavigation from "./components/layout/MainNavigation";
import { Route,Routes } from "react-router-dom";
import AddAppointmentForm from "./components/appointments/AddAppointmentForm";
import Temp from "./components/appointments/Temp";
import AppointmentsList from "./components/appointments/AppointmentsList";
import AddSpecializationForm from "./components/specializations/AddSpecializationForm";
import SpecializationsList from "./components/specializations/SpecializationsList";

function App() {
  return (
    <div>
      <Header />
      <MainNavigation />

      <Routes>
        <Route path="/">
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='appointment'>
            <Route path='create' element={<AddAppointmentForm />} />
            <Route path='edit/:patientID' element={<AddAppointmentForm mode='edit'/>} />
            <Route path='list' element={<AppointmentsList />} />
          </Route>

          <Route path='specialization'>
            <Route path='create' element={<AddSpecializationForm />} />
            <Route path='edit/:doctorID' element={<AddSpecializationForm mode='edit'/>} />
            <Route path='list' element={<SpecializationsList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
