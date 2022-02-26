import React from "react";
import "./App.css";
import { RobotsList } from "./components/robots-list";
import { Routes, Route } from "react-router-dom";
import { RobotForm } from "./components/robot-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/robots" element={<RobotsList />} />
          <Route path="/robotform" element={<RobotForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
