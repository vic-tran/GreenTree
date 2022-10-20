import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Events from './pages/Events';
import Architectural from './pages/Architectural';
import Amenities from './pages/Amenities';
import Support from './pages/Support';
import Contact from './pages/Contact';



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/architectural" element={<Architectural/>} />
      <Route path="/amenities" element={<Amenities/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>,

  document.getElementById('root')





);

