import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/ui/SIdebar";
import Header from "./components/ui/Header";
import Inventory from "./components/pages/Inventory";
import ProtectedLayout from "./components/ui/ProtectedLayout";

function App() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Protected Layout */}
          <Route
            element={
              <ProtectedRoute>
                <ProtectedLayout
                  navbarToggle={navbarToggle}
                  setNavbarToggle={setNavbarToggle}
                />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory/:id" element={<Inventory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
