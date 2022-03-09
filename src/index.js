import React from 'react';
import ReactDOM from 'react-dom';
import "./App.scss"
import App from './App';
import {Routes, Route ,BrowserRouter} from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/Home';


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path= '' element={<App/>}>
        <Route path='' element ={<Home />} />
        <Route path ='Catalog' element={<Catalog/>} />
        
      </Route>
     

   </Routes>
   </BrowserRouter>
  </React.StrictMode>,

    
  document.getElementById('root')
);

