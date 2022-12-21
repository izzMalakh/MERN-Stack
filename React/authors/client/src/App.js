
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
import NewPage from './views/NewPage';
function App() {

    
    return (
    <div className="App">
         <Routes>
             <Route element={<Main/>} path="/" />
            <Route element={<NewPage/>} path="/new" />
             <Route element={<Detail/>} path="/authors/:id" />
             <Route element={<Update/>} path="/author/:id/edit"/>
         </Routes>
      
    </div>
    );
}
export default App;