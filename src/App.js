import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import TaskDetail from "./TaskDetail";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<TodoList tasks={tasks} setTasks={setTasks} />}
          />{" "}
          {/* Route for the task list page */}
          <Route
            path="/task/:id"
            element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
          />{" "}
          {/* Route for the task detail page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
