import './App.css';
import Hero from './Component/Hero';
import All from './Component/Auction/All';
import Head from './Component/Auction/Head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Every from './Component/Profile/Every';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Hero />}></Route>
       <Route path="/auction" element={<All />}></Route>
       <Route path="/auction" element={<All />}></Route>
       <Route path="/Profile" element={ <Every />}></Route>
      </Routes>
    
     
    </div>
  );
}

export default App;
