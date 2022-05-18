import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class from "./components/Class";
import Employee from "./components/Employee";
import Post from "./components/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/class" element={<Class />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/post" element={<Post />}></Route>
    </Routes>
  </BrowserRouter>
);
