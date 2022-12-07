import logo from './logo.svg';
import './App.css';
import Index from './components/Index';

function App() {
  return (
    <div className='marg'>
      <Index name="Hala AbuZant" age={ 45 } hair="Black"/>
      <Index name="Izz Malakh" age={ 22 } hair="Red"/>
    </div>
  );
}

export default App;
