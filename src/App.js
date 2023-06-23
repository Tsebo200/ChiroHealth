// import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Doctors from './Pages/Doctors';
import Patients from './Pages/Patients';
// import Register from './Pages/Register';
import Appointments from './Pages/Appointments';


function App() {
  return (
  
  <div className="App">
  <Navbar/>
    <Routes>
      {/* <Route path='/register'>{Register}</Route> */}
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/patients' element={<Patients/>}/>
      <Route path='/doctors' element={<Doctors/>}/>

    </Routes>
  </div>
  );
}

export default App;

