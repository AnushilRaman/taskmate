import React, { useState } from 'react'

export function AddTask({ tasklist, setTasklist, task, setTask }) {
    const [isExist, setIsExist] = useState(false);
    const [isBlank, setIsBlank] = useState(false);

    const handleSubmit = (eve) => {
        eve.preventDefault();
        const date = new Date();
        const newtask = {
            id: date.getTime(),
            name: eve.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        //empty value check
        if (!eve.target.task.value && eve.target.task.value === '') {
            setIsExist(false); setIsBlank(true); return;
        }
        //Duplicacy check.
        const exist = tasklist.find(n => n.name === newtask.name);
        if (exist) {
            setIsBlank(false);
            setIsExist(true);
            return;
        }
        //Not allowing user to enter more than 10 tasks
        if (tasklist.length === 10) {
            setIsBlank(false);
            setIsExist(false);
            return;
        }
        setIsBlank(false);
        setIsExist(false);
        eve.target.task.value = '';
        setTasklist([...tasklist, newtask]);
    }
    return (
        <section className='addTask'>
            {tasklist.length === 10 && <div className='error'>User can only enter {tasklist.length} tasks.</div>}
            {isExist && <div className='error'>Task is already exist please enter valid task.</div>}
            {isBlank && <div className='error'>Task field can not be empty.</div>}

            <form onSubmit={handleSubmit}>
                <input type='text' name='task' autoComplete='off' placeholder='Add Task' maxLength='25' />
                <button type='submit'>AddTask</button>
            </form>
        </section>
    )
}