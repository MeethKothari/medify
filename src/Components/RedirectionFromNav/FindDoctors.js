import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './FindDoctors.css';
import Header from '../Header/Header';
import HospitalsCard from '../HospitalsCard/HospitalsCard';
import FrequentQuestions from '../HeroSections/FrequentQuestions/FrequentQuestions';
import Footer from '../Footer/Footer';


const FindDoctors = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStateAndCity, setSelectedStateAndCity] = useState([]);


const fetchStates = async() => {
    try {
      let url = 'https://meddata-backend.onrender.com/states';
      let stateResponse = await axios.get(url);
      //console.log(stateResponse);
      setStates(stateResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

const fetchCity = async() => {
  try {
    let url = `https://meddata-backend.onrender.com/cities/${selectedState}`;
    let cityResponse = await axios.get(url);
    //console.log(cityResponse);
    setCities(cityResponse.data);
  } catch (error) {
    console.log(error);
  }
}


const fetchStateAndCity = async() => {
  try {
    let url = `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`;
    let response = await axios.get(url);
    //console.log(response.data);
    setSelectedStateAndCity(response.data);
  } catch (error) {
    console.log(error);
  }
} 


const handleSelectedState = (event) => {
  setSelectedState(event.target.value)
};


const handleSelectedCity = (event) =>{
  setSelectedCity(event.target.value);
};


const handleSearch = () =>{
  fetchStateAndCity();
}


useEffect(()=>{
  fetchStates();
},[]);  // Empty dependency array, runs only once on mount


useEffect (()=>{
  fetchCity()
},[selectedState]); // Runs when selectedState changes because fetching city is depending upon the state the user selects..



return (
    <>
    <div className='findDoctorsContainer'>
      <Header/>
      <div className='backOfSearchBox'>
        <div className='inputContainer'>
          
          <select value={selectedState} onChange={handleSelectedState}>
          <option value='' disabled> Select State </option>
            {states.map((options, index) => (
              <option key={index}>{options}</option>
            ))}
          </select>
          
          <select value ={selectedCity} onChange={handleSelectedCity}>
          <option value='' disabled> Select City </option>
            {cities.map((options, index)=>(
              <option key={index}> {options} </option>
            ))}
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <HospitalsCard selectedStateAndCity={selectedStateAndCity}/>
    </div>
      <FrequentQuestions/>
      <Footer/>
    </>
  )
}

export default FindDoctors;