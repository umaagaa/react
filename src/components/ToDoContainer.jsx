import React, { useState, useEffect } from "react";
import Task from "./Task";

const ToDoContainer = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [currentTask, setCurrentTask] = useState({
    id: null,
    title: "",
    description: "",
    isCompleted: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10; 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrEditTask = () => {
    if (!currentTask.title.trim() || currentTask.title.length < 3) {
      alert("Task title must be at least 3 characters long!");
      return;
    }

    const titleExists = tasks.some(
      (task) =>
        task.title.toLowerCase() === currentTask.title.toLowerCase() &&
        task.id !== currentTask.id
    );
    if (titleExists) {
      alert("A task with this title already exists!");
      setCurrentTask({ ...currentTask, title: "", description: "" });
      return;
    }

    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === currentTask.id ? { ...task, ...currentTask } : task
        )
      );
      setIsEditing(false);
    } else {
      const newTask = {
        ...currentTask,
        id: Date.now(),
      };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    setCurrentTask({ id: null, title: "", description: "", isCompleted: false });
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const isAddButtonDisabled =
    !currentTask.title.trim() || currentTask.title.length < 3;

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

  /* Pagination */
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

        <div className="w-full flex items-center justify-between my-4">
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
  
        <div>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full border rounded p-2 mb-2"
            value={currentTask.title}
            onChange={(e) =>
              setCurrentTask({ ...currentTask, title: e.target.value })
            }
          />
          <textarea
            placeholder="Task Description (optional)"
            className="w-full border rounded p-2 mb-2"
            value={currentTask.description}
            onChange={(e) =>
              setCurrentTask({ ...currentTask, description: e.target.value })
            }
          />
          <button
            onClick={handleAddOrEditTask}
            disabled={isAddButtonDisabled}
            className={`w-full px-4 py-2 rounded text-white mb-6 ${
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
  
        
  
        <ul className="space-y-2 mb-6">
          {currentTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onTaskComplete={toggleTaskCompletion}
            />
          ))}
        </ul>
  
        <nav>
          <ul className="pagination flex justify-center mt-4">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item mx-1">
                <button
                  onClick={() => paginate(number)}
                  className="page-link px-3 py-1 border rounded"
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  
  );
};

export default ToDoContainer;