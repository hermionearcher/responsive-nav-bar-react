import * as React from 'react';
import './style.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/">
              <Home />
            </Route>            
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cv">
              <h1>CV</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
