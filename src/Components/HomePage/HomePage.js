import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSections/HeroSection/HeroSection';
import FrequentQuestions from '../HeroSections/FrequentQuestions/FrequentQuestions';
import Offers from '../HeroSections/Offers/Offers';
import FindBySpecialisation from '../HeroSections/FindBySpecialisation/FindBySpecialisation';
import MedicalSpecialists from '../HeroSections/MedicalSpecialists/MedicalSpecialists';
import PatientCaring from '../HeroSections/PatientCaring/PatientCaring';
import Blogs from '../HeroSections/Blogs/Blogs';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Offers/>
    <FindBySpecialisation/>
    <MedicalSpecialists/>
    <PatientCaring/>
    <Blogs/>
    <FrequentQuestions/>
    <Footer/>
    </>
  )
}

export default HomePage;