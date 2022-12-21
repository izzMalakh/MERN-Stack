import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
function App() {
    
    return (
    <div className="App">
         <Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<Detail/>} path="/products/:id" />
             <Route element={<Update/>} path="/product/:id/edit"/>
         </Routes>
      
    </div>
    );
}
export default App;