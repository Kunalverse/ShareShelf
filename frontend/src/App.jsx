import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./Pages/About";
import AddBook from "./Pages/AddBook";
import Home from "./Pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./Pages/DashBoard";

function App() {
  const [authState, setAuthState] = useState("loggedOut");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const username = decodedToken.user.username;
      const email = decodedToken.user.email;
      setUser({
        username,
        email,
      });
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const handleAuthenticated = (token) => {
    localStorage.setItem("token", token);
    setAuthState("loggedIn");
  };

  return (
    <>
      <Router>
        <Header
          onSignOut={handleSignOut}
          isAuthenticated={isAuthenticated}
          user={user}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-book"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={<SignIn onAuthenticated={handleAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignUp onAuthenticated={handleAuthenticated} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
