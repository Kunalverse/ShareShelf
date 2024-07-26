import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [authState, setAuthState] = useState("loggedOut");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setAuthState("loggedIn");
    }
  }, []);

  const handleSignIn = () => setAuthState("signIn");
  const handleSignUp = () => setAuthState("signUp");
  const handleSignOut = () => {
    setAuthState("loggedOut");
    setIsAuthenticated(false);
    localStorage.removeItem("token"); 
  };

  const handleAuthenticated = (token) => {
    localStorage.setItem("token", token); 
    setIsAuthenticated(true);
    setAuthState("loggedIn");
  };

  return (
    <>
      <Header
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onSignOut={handleSignOut}
        isAuthenticated={isAuthenticated}
      />
      {authState === "loggedOut" && (
        <>
          <Welcome />
          <Content />
          <Footer />
        </>
      )}
      {authState === "signIn" && (
        <SignIn
          onClose={() => setAuthState("loggedOut")}
          onAuthenticated={handleAuthenticated}
        />
      )}
      {authState === "signUp" && (
        <SignUp
          onClose={() => setAuthState("loggedOut")}
          onAuthenticated={handleAuthenticated}
        />
      )}
      {authState === "loggedIn" && (
        <>
          <Welcome />
          <Content />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
