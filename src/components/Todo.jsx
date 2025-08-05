import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState(""); //Single input
  const [tasks, setTasks] = useState([]); // List of all tasks

  //   Add new task
  const addTask = () => {
    if (task.trim() === "") return "";
    setTasks([...tasks, task]); // using spread operator add new task
    setTask(""); // clean the task
  };

  const deleteTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="mr-20 text-4xl">Todo</div>
        <div className="flex gap-5">
          <input
            className="border-2 p-1 mt-6"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button
            onClick={addTask}
            className="rounded-2xl w-20 h-10 mt-6 bg-amber-500"
          >
            Add
          </button>
        </div>

        <ul className="w-full max-w-md mt-6 space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white shadow-md px-4 py-2 rounded-lg border border-gray-200"
            >
              <span className="text-gray-800">{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 font-semibold cursor-pointer"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
