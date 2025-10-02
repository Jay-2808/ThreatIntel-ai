import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import PhishingSimulation from "./pages/PhishingSimulation";
import SecurityTraining from "./pages/SecurityTraining";
import Documentation from "./pages/Documentation";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/docs" element={<Documentation />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="phishing" element={<PhishingSimulation />} />
        <Route path="training" element={<SecurityTraining />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
