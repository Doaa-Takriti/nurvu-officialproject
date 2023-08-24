import './App.css';
import OurApp from "./pages/OurApp"
import Workflow from "./pages/Workflow"
import WhoweAre from "./pages/WhoweAre"
import Price from "./pages/Price"
import Contactus from "./pages/Contactus"


import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
     <Layout />
      
  <Routes>
  <Route path='/' element={<OurApp/>} />
  <Route path='/Workflow' element={<Workflow/>} />
  <Route path='/WhoweAre' element={<WhoweAre/>} />
  <Route path='/Price' element={<Price/>} />
  <Route path='/Contactus' element={<Contactus/>} />






      

          </Routes >
    </div>
  );
}

export default App;
