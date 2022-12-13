import logo from './logo.svg';
import './App.css';
import Luke from './components/Luke';
import Luke2 from './components/Luke2';
import {Router} from '@reach/router';
function App() {
  return (
    <div className="App">
      

      <Luke/>
      
      <Router>
      <Luke2 path="/:opt/:id"/>
     
     </Router>
      
    </div>
  );
}

export default App;
