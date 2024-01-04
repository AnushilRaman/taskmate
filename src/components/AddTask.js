import { useState } from 'react';
import './AddTask.css';
export function AddTask({ tasks, setTasks }) {
    const [taskValue, setTaskValue] = useState('');
    const [progress, setProgress] = useState('false');

    function handleChange(event) {
        setTaskValue(event.target.value);
    }

    function handleReset() {
        setTaskValue("");
        setProgress('false');
    }

    function handleSubmitTask(event) {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        };
        setTasks([...tasks, task]);
        console.log(task);
        handleReset();
    }

    return (
        <section className="addtask">
            <form onSubmit={handleSubmitTask}>
                <label htmlFor='task'>Task Name :</label>
                <input onChange={handleChange} type='text' name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue} />
                <select onChange={(eve) => setProgress(eve.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type='button' onClick={handleReset} className='reset' >Reset</button>
                <button type='submit'>Add Task</button>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}
