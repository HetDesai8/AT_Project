import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './page/Login'
import Homepage from './page/Home';
import Register from './page/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import Upload from './page/Upload';
import Logout from './page/Logout';
import Property from './page/Property';
function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/Logout">
            
            <Logout/>
          </Route>
          <Route exact path="/Upload">
            <Upload/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/Property/:id">
            <Property/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;