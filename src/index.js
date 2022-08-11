import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Create from './Create';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from './Details';
import Edit from './Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/Create' element={<Create/>}/>
    <Route path="/Details" element={<Details/>} />
    <Route path="/Edit" element={<Edit/>} />
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
