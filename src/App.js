import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./scenes/Home.jsx";
import About from "./scenes/About.jsx";

function App() {
  return (
    <>
    <h1>H1: This is the Title</h1>

    <BrowserRouter>
    <Routes>
        <Route path = "/about" element={<About />} />
        <Route path = "/" element={<Home />} />
     </Routes>
    </BrowserRouter>

    <h3> This is below Browser Router</h3>
    <p>This is the footer</p>
    </>
  );
}

export default App;
