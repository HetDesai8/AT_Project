import logo from './logo.svg';
import './App.css';
import Navbar from './page/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home_body from './page/Homebody';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home_body/>
    </div>
  );
}

export default App;