import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './page/Login'
import Home from './page/Home';
import Register from './page/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;