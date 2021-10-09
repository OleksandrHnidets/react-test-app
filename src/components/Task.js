import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToogle}) => {
    
    return (
        <div className={"task"+(task.isFinished ? " reminder" : '')} onDoubleClick={()=>onToogle(task.id)}>
            <h3>
                {task.taskTitle}{' '} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
