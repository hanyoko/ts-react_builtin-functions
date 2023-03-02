import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Subjects from './components/Subjects';
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addsubject from './components/Addsubject';
import Addfunction from './components/Addfunction';

function App() {
  const [ subject, setSubject ] = useState(0);
  const onChange = (subject:number) => {
    setSubject(subject);
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Header sitename='typescript' onChange={onChange}/>
      <Routes>
        <Route path="/" element={<>
        <Subjects onChange={onChange}/>
        <List subject={subject} />
        </>}/>
        <Route path="/addSubject" element={<Addsubject />} />
        <Route path="/addFuncton" element={<Addfunction />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
