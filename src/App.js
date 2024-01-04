import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false }
  ]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
