/*
 * ============================================
 *  AuthContext.jsx — Global Auth State
 * ============================================
 *
 *  WHY THIS FILE:
 *  The problem with just checking localStorage is that React doesn't know
 *  when the token has been saved. So when Login sets the token and navigates,
 *  React might not re-render PrivateRoute properly.
 *
 *  SOLUTION: Use React Context to manage auth state.
 *  When we call login() → it updates the context → triggers re-render → PrivateRoute sees new state
 *
 *  HOW TO USE:
 *  1. Wrap your app with <AuthProvider> in main.jsx
 *  2. Use useAuth() hook in any component to get { isLoggedIn, login, logout }
 */

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if token exists on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  // login() - saves token and updates state
  function login(token) {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  }

  // logout() - removes token and updates state
  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  const value = { isLoggedIn, isLoading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth hook - use this in any component to access auth state
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
