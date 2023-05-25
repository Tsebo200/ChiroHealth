// import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  
  <div className="App">
  <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
  </div>
  );
}

export default App;
