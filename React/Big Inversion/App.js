import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Index from './components/Index'

function App() {
  return (
    <div className="App">
      {/* <Form/>  */}
      <Index name="Izzaldeen" age={24} hairColor="black"/>
      <Index name="Hala" age={28} hairColor="Brown"/>
      <Index name="Amin" age={36} hairColor="No Hair"/>
      <Index name="Sura" age={29} hairColor="5ara"/>
    </div>
  );
}

export default App;
