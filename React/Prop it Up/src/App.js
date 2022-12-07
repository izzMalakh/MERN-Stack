import logo from './logo.svg';
import './App.css';
import Index from './components/Index';

function App() {
  return (
    <div className='marg'>
      <Index name="Rana Zaro" age={ 45 } hair="Black"/>
      <Index name="Izz Malakh" age={ 22 } hair="Red"/>
      <Index name="Zaki Nahhas" age={ 26 } hair="Brown"/>
      <Index name="Hala AbuZant" age={ 30 } hair="Brown Ghamk"/>
    </div>
  );
}

export default App;
