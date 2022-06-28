import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
