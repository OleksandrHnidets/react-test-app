import React from 'react'
import { useState } from 'react'

export default function AddTaskForm({onAdd}) {
    const [taskTitle,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [isFinished,setReminder]=useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!taskTitle){
            alert('Please add task')
            return
        }

        onAdd({taskTitle,isFinished,date})

        setTitle('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task title</label>
                <input type='text' placeholder='Add task' value={taskTitle} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add date' value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className='form-control-check'>
                <label>Task reminder</label>
                <input type='checkbox' checked={isFinished} value={isFinished} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save task' className='btn btn-block'/>
        </form>
    )
}
