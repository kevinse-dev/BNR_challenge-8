import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Detail from './Components/Detail'
import Update from './Components/Update';
import Tambah from './Components/Tambah';
import Delete from './Components/Delete';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/player/:id' element={<Detail />} />
        <Route path='/player/update/:id' element={<Update />} />
        <Route path='/player/tambah' element={<Tambah />} />
        <Route path='/player/delete/:id' element={<Delete />} />

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
