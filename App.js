import React , { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Contact from './Component/Contact'
import Index from './Component/Home'
import About from './Component/About'



class App extends Component {
  render() { 
  return (
    <BrowserRouter>
    <Navbar />
     
      <Route exact path='/' component={Index} />
      <Route exact path='/About' component={About} />

      <Route path='/contact' component={Contact} />

    </BrowserRouter>
    
    
  );
}
}
export default App;
