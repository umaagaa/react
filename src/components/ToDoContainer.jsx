import React, { useState } from "react";

const ToDoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full border  p-2 mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description (optional)"
          className="w-full border  p-2 mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 text-white px-4 py-2 "
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border rounded p-4 bg-gray-100">
            <h2 className="font-bold">{task.title}</h2>
            {task.description && <p>{task.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoContainer;
