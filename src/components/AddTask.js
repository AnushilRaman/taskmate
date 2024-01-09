import React, { useState } from 'react'

export function AddTask({ tasklist, setTasklist, task, setTask }) {
    const [isExist, setIsExist] = useState(false);
    const [isBlank, setIsBlank] = useState(false);

    const handleSubmit = (eve) => {
        eve.preventDefault();
        //empty value check
        if (!eve.target.task.value && eve.target.task.value === '') {
            setIsExist(false); setIsBlank(true); return;
        }
        if (task.id) {
            //Duplicacy check.
            const exist = tasklist.find(n => n.name === task.name && n.id !== task.id);
            if (exist) {
                setIsBlank(false);
                setIsExist(true);
                return;
            }
            const date = new Date();
            const updatedTaskList = tasklist.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo
            ));
            setIsBlank(false);
            setIsExist(false);
            setTasklist(updatedTaskList);
            setTask({});
        } else {
            const date = new Date();
            const newtask = {
                id: date.getTime(),
                name: eve.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            //Not allowing user to enter more than 10 tasks
            if (tasklist.length === 10) {
                setIsBlank(false);
                setIsExist(false);
                return;
            }
            //Duplicacy check.
            const exist = tasklist.find(n => n.name === newtask.name);
            if (exist) {
                setIsBlank(false);
                setIsExist(true);
                return;
            }
            setIsBlank(false);
            setIsExist(false);
            setTasklist([...tasklist, newtask]);
            setTask({});
        }

    }
    return (
        <section className='addTask'>
            {tasklist.length === 10 && <div className='error'>User can only enter {tasklist.length} tasks.</div>}
            {isExist && <div className='error'>Task is already exist please enter valid task.</div>}
            {isBlank && <div className='error'>Task field can not be empty.</div>}

            <form onSubmit={handleSubmit}>
                <input type='text' name='task' value={task.name || ""} autoComplete='off' placeholder='Add Task' maxLength='25' onChange={eve => setTask({ ...task, name: eve.target.value })} />
                <button type='submit'>AddTask</button>
            </form>
        </section>
    )
}