import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import './App.css'


function App() {
  const [tasklist, setTasklist] = useState([])
  return (
    <div className="App">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist}/>
    </div>
  );
}

export default App;
