import React, { useState } from 'react'

const Todo = () => {

    const [task , setTask] = useState(""); //Single input
    const [tasks , setTasks] = useState([]); // List of all tasks
  return (
    <>
    <div>Todo</div>
    <input placeholder='Enter the task' value={task}>
    </input>
    </>
  )
}

export default Todo