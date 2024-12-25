import React, { useState, useEffect } from "react";
import Task from "./Task";

const ToDoContainer = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!title.trim() || title.length < 3) {
      alert("Task title must be at least 3 characters long!");
      return;
    }

    const titleExists = tasks.some(
      (task) => task.title.toLowerCase() === title.toLowerCase()
    );
    if (titleExists) {
      alert("A task with this title already exists!");
      setTitle("");
      setDescription("");
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
        isCompleted: false,
      };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    setTitle("");
    setDescription("");
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

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const isAddButtonDisabled = !title.trim() || title.length < 3;

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.isCompleted) ||
      (filter === "not_completed" && !task.isCompleted);
    const matchesSearch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 p-4 bg-white rounded shadow absolute left-1/4 right-1/4 top-20">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do List</h1>

        <p className="text-center mb-4">
          {filteredTasks.length > 0
            ? `You have ${filteredTasks.length} task${
                filteredTasks.length > 1 ? "s" : ""
              }.`
            : "No tasks to show."}
        </p>

        <div className="w-full flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-30 border rounded p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex items-center ml-auto">
            <label htmlFor="filter" className="mr-2 font-medium">
              Filter:
            </label>
            <select
              id="filter"
              className="border rounded p-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="not_completed">Not Completed</option>
            </select>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onToggle={toggleTaskCompletion}
            />
          ))}
        </ul>

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
