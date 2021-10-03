import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './page/Login'
import Homepage from './page/Home';
import Register from './page/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useState } from 'react';
import Show from './page/Show';
function App() {
const [ user, setLoginUser] = useState({})

  return (
    
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
            <Homepage/>
          </Route>
          <Route exact path="/Show">
            <Show/>
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
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