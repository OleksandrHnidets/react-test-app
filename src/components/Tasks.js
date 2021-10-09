import React from 'react'
import Task from './Task'

const Tasks = ({task, onDelete, onToogle}) => {
    return (
        
        task.map(task=>(
            <Task className='task' key={task.id} task={task} onDelete={onDelete} onToogle={onToogle}/>
        ))
    )
}

export default Tasks
