import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./screens/Registration";
import ProtectedRoute from "./Protectedroute";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/login" element={<Login/>}></Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute child={<Dashboard/>}>
              <Route path="/" element={<Dashboard/>} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
