import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './app/components/car/add/Add';
import Edit from './app/components/car/edit/Edit';
import List from './app/components/car/list/List';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        <Route path="/list" element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
