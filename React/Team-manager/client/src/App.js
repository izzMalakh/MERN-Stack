
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
import NewPage from './views/NewPage';
import Status from './views/Status';
function App() {

    
    return (
    <div className="App">
         <Routes>
            
             <Route element={<Main/>} path="/" />
            <Route element={<NewPage/>} path="/new" />
            <Route element={<Status/>} path="/status" />
             <Route element={<Detail/>} path="/players/:id" />
             <Route element={<Update/>} path="/player/:id/edit"/>
         </Routes>
      
    </div>
    );
}
export default App;