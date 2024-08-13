import './App.css';
import HomePage from './Components/HomePage/HomePage';
//import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FindDoctors from './Components/RedirectionFromNav/FindDoctors';
import Hospitals from './Components/RedirectionFromNav/Hospitals';
import Medicines from './Components/RedirectionFromNav/Medicines';
import MyBookings from './Components/RedirectionFromNav/MyBookings';
import Surgeries from './Components/RedirectionFromNav/Surgeries';
import SoftwareForProvider from './Components/RedirectionFromNav/SoftwareForProvider';
import Facilities from './Components/RedirectionFromNav/Facilities';

function App() {
  return (
  <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/findDoctors' element={<FindDoctors/>}/>
      <Route path='/hospitals' element={<Hospitals/>}/>
      <Route path='/medicines' element={<Medicines/>}/>
      <Route path='/surgeries' element={<Surgeries/>}/>
      <Route path='/softwareForProvider' element={<SoftwareForProvider/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/myBookings' element={<MyBookings/>}/>
      </Routes>
  </Router>
  );
}

export default App;
