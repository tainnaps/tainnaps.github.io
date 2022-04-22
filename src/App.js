import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
