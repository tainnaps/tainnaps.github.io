import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Projects } />
      <Route path="/about" component={ About } />
    </Switch>
  );
}

export default App;
