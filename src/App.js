// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EventList from "./components/EventList";
import Details from "./components/Details";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./components/AuthContext"; // Import AuthProvider

function App() {
  return (
    <AuthProvider> {/* Wrap your Router with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event/:id" element={<Details />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
