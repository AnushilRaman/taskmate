import React from 'react'

export function AddTask({ tasklist, setTasklist }) {

    const handleSubmit = (eve) => {
        eve.preventDefault();
        const date = new Date();
        const newtask = {
            id: date.getTime(),
            name: eve.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, newtask]);
    }
    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' autoComplete='off' placeholder='Add Task' maxLength='25' />
                <button type='submit'>AddTask</button>
            </form>
        </section>
    )
}