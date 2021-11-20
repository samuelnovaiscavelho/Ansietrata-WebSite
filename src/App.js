import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as  Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import './Estilogeral.scss'
import './Novoestilo.scss';
//import About from './components/pages/About';


function App() {
  return (
    
    <>
    <BrowserRouter>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
      </Router>
      </BrowserRouter>
    </>
  );
}


export default App;
