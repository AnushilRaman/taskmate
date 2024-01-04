import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <TaskList/>
      <Footer/>
    </div>
  );
}

export default App;
