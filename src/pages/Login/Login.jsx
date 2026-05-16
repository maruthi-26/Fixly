import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Login.css";

// LoginPage — Login form (UI only for Step 1; auth wired in Step 5)
function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLoginSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    if (userEmail === "" || userPassword === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    const userDetails = { email: userEmail, password: userPassword };
    const url = 'https://login-and-registration-58by.onrender.com/api/v1/user/login';

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Assuming the token is in data.token or data.data.token
        const token = data.token || (data.data && data.data.token);
        if (token) {
          // Use the auth context to set login (this updates state globally)
          login(token);
          // Context updates state synchronously, navigate immediately
          navigate("/home");
        }
      } else {
        setErrorMessage(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleEmailTyping(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordTyping(event) {
    setUserPassword(event.target.value);
  }

  return (
    <div className="login-page">
      <div className="login-hero" />
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">👋</div>
          <h1>Welcome to Fixly!</h1>
          <p>Log in to book verified professionals in minutes — zero booking fees during launch</p>
        </div>

        <form onSubmit={handleLoginSubmit}>
          {errorMessage && <p className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{errorMessage}</p>}
          <div className="login-field">
            <label>Email Address</label>
            <input
              type="email"
              value={userEmail}
              onChange={handleEmailTyping}
              placeholder="you@example.com"
            />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              value={userPassword}
              onChange={handlePasswordTyping}
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary-lg" 
            style={{ width: "100%" }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login to Fixly"}
          </button>

          <p className="login-footer-text">
            Don't have an account? <Link className="signup-link" to="/register">Register</Link>
          </p>
        </form>

        
      </div>
    </div>
  );
}

export default LoginPage;
