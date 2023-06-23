// import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Doctors from './Pages/Doctors';
import Patients from './Pages/Patients';
// import Register from './Pages/Register';
import Appointments from './Pages/Appointments';
import UpdatePatient from './Components/Forms/Patients/UpdatePatient';
import Register from './Pages/Register';


function App() {
  return (
  
  <div className="App">

    <Routes>
      <Route path='/register'>{Register}</Route>
      <Route path='/' element={<><Navbar/> <Dashboard/></>}/>
      <Route path='/appointments' element={<><Navbar/> <Appointments/></>}/>
      <Route path='/patients' element={<><Navbar/><Patients/></>}/>
      <Route path='/doctors' element={<><Navbar/> <Doctors/></>}/>
      <Route path='/updatepate' element={<><Navbar/> <UpdatePatient/></>}/>

    </Routes>
  </div>
  );
}

export default App;

