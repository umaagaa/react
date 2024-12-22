import React, { useState, useEffect } from "react";

const ToDoContainer = () => {
  // Load tasks from localStorage or start with an empty array
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!title.trim() || title.length < 3) {
      alert("Task title must be at least 3 characters long!");
      return;
    }

    // Check if a task with the same title already exists
    const titleExists = tasks.some(
      (task) => task.title.toLowerCase() === title.toLowerCase()
    );
    if (titleExists) {
      alert("A task with this title already exists!");
      setTitle(""); // Clear the title input
      setDescription(""); // Clear the description input
      return;
    }

    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === currentTaskId ? { ...task, title, description } : task
        )
      );
      setIsEditing(false);
      setCurrentTaskId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    setTitle(""); // Clear the title input
    setDescription(""); // Clear the description input
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description || "");
  };

  const isAddButtonDisabled = !title.trim() || title.length < 3;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 p-4 bg-white rounded shadow absolute left-1/4 right-1/4 top-20">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do List</h1>

        {/* Task List */}
        <ul className="space-y-2 mb-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border rounded p-4 bg-gray-100 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">{task.title}</h2>
                {task.description && <p>{task.description}</p>}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditTask(task)}
                  className="text-yellow-500"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-500"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Task Input Form */}
        <div>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full border rounded p-2 mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description (optional)"
            className="w-full border rounded p-2 mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            disabled={isAddButtonDisabled}
            className={`w-full px-4 py-2 rounded text-white ${
              isAddButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : isEditing
                ? "bg-blue-500"
                : "bg-purple-600"
            }`}
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
