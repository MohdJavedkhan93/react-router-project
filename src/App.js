import React from 'react';
import { BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
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
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
