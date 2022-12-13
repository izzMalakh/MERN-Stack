import logo from './logo.svg';
import './App.css';
import Comp from './components/Comp';
import Comp1 from './components/Comp1';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
      <Comp path=":name"/>
      <Comp1 path=":word/:color/:color2"/>
      </Router>
      
    </div>
  );
}

export default App;
