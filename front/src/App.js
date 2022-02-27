import React from "react";
import "./App.css";
import { RobotsList } from "./components/robots-list";
import { Routes, Route } from "react-router-dom";
import { RobotForm } from "./components/robot-form";
import { RobotDetails } from "./components/robot-details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/robots" element={<RobotsList />} />
          <Route path="/robots/update/:id" element={<RobotForm />} />
          <Route path="/robotform" element={<RobotForm />} />
          <Route path="/robots/:id" element={<RobotDetails />} />
          <Route path="*" element={<RobotsList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
