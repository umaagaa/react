import React from "react";

const Task = ({ task, onEdit, onDelete, onTaskComplete }) => {
  return (
    <li
      className={`border rounded p-4 bg-gray-100 flex justify-between items-center ${
        task.isCompleted ? "bg-red-100" : ""
      }`}
    >
      <div onClick={() => onTaskComplete(task.id)} className="cursor-pointer">
        <h2
          className={`font-bold ${
            task.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h2>
        {task.description && (
          <p
            className={`${
              task.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {task.description}
          </p>
        )}
      </div>
      <div className="space-x-2">
        {!task.isCompleted && (
          <button onClick={() => onEdit(task)} className="text-yellow-500">
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
        )}
        <button onClick={() => onDelete(task.id)} className="text-red-500">
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
  );
};

export default Task;
