import React from 'react';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Flights from './pages/Flights';
import SingleFlight from './pages/SingleFlight';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/flights/" component={Flights}/>
          <Route exact path="/flights/:slug" component={SingleFlight} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
