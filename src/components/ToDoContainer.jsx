import React, { useState } from "react"; 

const ToDoContainer = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the current task's title
  const [title, setTitle] = useState("");

  // State to store the current task's description
  const [description, setDescription] = useState("");

  // State to determine if the user is editing an existing task
  const [isEditing, setIsEditing] = useState(false);

  // State to store the ID of the task currently being edited
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // Function to handle adding or updating a task
  const handleAddTask = () => {
    if (!title.trim()) {
      // Prevent adding a task with an empty title
      alert("Task title cannot be empty!");
      return;
    }

    if (isEditing) {
      // Update an existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === currentTaskId ? { ...task, title, description } : task
        )
      );
      setIsEditing(false); // Exit editing mode
      setCurrentTaskId(null); // Clear the current editing task ID
    } else {
      // Create a new task
      const newTask = {
        id: Date.now(), // Unique ID based on the current timestamp
        title,
        description,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add the new task to the list
    }

    // Clear the input fields
    setTitle("");
    setDescription("");
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove the task with the specified ID
  };

  // Function to edit a task
  const handleEditTask = (task) => {
    setIsEditing(true); // Enter editing mode
    setCurrentTaskId(task.id); // Set the task ID being edited
    setTitle(task.title); // Populate the title input with the task's title
    setDescription(task.description || ""); // Populate the description input (or set it as empty if missing)
  };

  return (
    <div className="p-4">
      {/* Title of the component */}
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>

      {/* Input fields and button for adding/updating tasks */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full border rounded p-2 mb-2"
          value={title} // Controlled input for the task title
          onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
        />
        <textarea
          placeholder="Task Description (optional)"
          className="w-full border rounded p-2 mb-2"
          value={description} // Controlled input for the task description
          onChange={(e) => setDescription(e.target.value)} // Update the description state on input change
        />
        <button
          onClick={handleAddTask} // Trigger add or update task logic
          className={`${
            isEditing ? "bg-blue-500" : "bg-green-500" // Change button color based on editing state
          } text-white px-4 py-2 rounded`}
        >
          {isEditing ? "Update Task" : "Add Task"} {/* Display button label based on editing state */}
        </button>
      </div>

      {/* List of tasks */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id} // Unique key for each task
            className="border rounded p-4 bg-gray-100 flex justify-between items-center"
          >
            <div>
              {/* Task title */}
              <h2 className="font-bold">{task.title}</h2>
              {/* Task description, if available */}
              {task.description && <p>{task.description}</p>}
            </div>
            <div className="space-x-2">
              {/* Edit button */}
              <button
                onClick={() => handleEditTask(task)} // Set the task for editing
                className="bg-yellow-300 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              
              {/* Delete button */}

              <button
                onClick={() => handleDeleteTask(task.id)} // Delete the specified task
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoContainer; 
