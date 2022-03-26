import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NavBar from './components/NavBar';
// import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/about" component={ About } />
        {/* <Route path="/technologies" component={ Technologies } /> */ }
        <Route exact path="/contact" component={ Contact } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
