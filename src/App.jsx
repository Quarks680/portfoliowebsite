import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes } from 'react-router-dom';

import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

import Home from './components/Home';
import "./Font.css"
import CardsProject from './components/CardsProject';
import Hover from './components/Hover';
import { WobbleCard } from './components/WobbleCard';
import CardsWobble from './components/CardsWobble';
import ButtonOrg from './components/ButtonOrg';
import Robot from './components/Robot';
import About from './components/About';
import Tech from './components/Tech';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Routing from './utils/Routing';
import Homepage from './Pages/Home';
import Pagelayout from './components/Layout/Pagelayout';
import Aboutpage from './Pages/About';
import Projects from './Pages/Project';






function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
 
     <Routes>
      <Route path='' element={<Pagelayout/>}>
       <Route path="/" element={<Homepage/>} />
       <Route path="/about" element={<Aboutpage/>} />
       <Route path="/project" element={<Projects/>} />
      </Route>
     </Routes>
  
  )
}

export default App