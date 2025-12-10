import React from 'react';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import BrowesCars from './components/Pages/BrowesCars';
import HeroextraPage from './components/Pages/HeroextraPage';
import HomeAbout from './components/Pages/HomeAbout';
import CarView from './components/Pages/CarView';
import Booking from './components/Pages/Booking';
import QuickBooking from './components/Pages/QuickBooking';

const App = () => {
  return (
    <Routes>
     
      <Route path='/' element={<Layout />}> //outltet only here

        <Route index element={<Home />} />       {/*  these will go inside the  outlet/ */}
        <Route path="home" element={<Home />} /> {/* /home */}
        <Route path="BrowesCars" element={<BrowesCars />} /> {/* /about */}
        <Route path='About' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='HeroextraPage' element={<HeroextraPage/>}/>
        <Route path='HomeAbout' element={<HomeAbout/>} />
        <Route path='/car/:id' element={<CarView/>}/>
        <Route path='/Booking/:id' element={<Booking/>} />
        <Route path='QuickBooking' element={<QuickBooking/>}/>
        

      </Route>
    </Routes>
  );
};

export default App;
