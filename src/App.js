import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTask] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false }
  ]);
  const [show, setShow] = useState(true)

  function handleRemove(id) {
    setTask(tasks.filter(task => id !== task.id))
  }

  return (
    <div className="App">
      <Header/>
      <TaskList/>
    </div>
  );
}

export default App;
