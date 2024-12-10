import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDoContainer from "./components/ToDoContainer";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex space-x-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Home</Link>
          <Link to="/todo" className="bg-green-500 text-white px-4 py-2 rounded">To-Do</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDoContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
