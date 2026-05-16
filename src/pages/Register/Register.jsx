import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Login/Login.css";

// RegisterPage — Registration form (UI only; auth wired in Step 5)
function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    if (userName === "" || userEmail === "" || userPassword === "") {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    const userDetails = { username: userName, email: userEmail, password: userPassword };
    const url = 'https://login-and-registration-58by.onrender.com/api/v1/user/register';

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
        navigate("/login");
      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🎉</div>
          <h1>Join the Fixly Family</h1>
          <p>Sign up in 30 seconds — get your first booking free as an early member!</p>
        </div>

        <form onSubmit={handleRegisterSubmit}>
          {errorMessage && <p className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{errorMessage}</p>}
          <div className="login-field">
            <label>Full Name</label>
            <input type="text" value={userName} onChange={function (e) { setUserName(e.target.value); }} placeholder="John Doe" />
          </div>
          <div className="login-field">
            <label>Email Address</label>
            <input type="email" value={userEmail} onChange={function (e) { setUserEmail(e.target.value); }} placeholder="you@example.com" />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input type="password" value={userPassword} onChange={function (e) { setUserPassword(e.target.value); }} placeholder="Create a strong password" />
          </div>

          <button 
            type="submit" 
            className="btn-primary-lg" 
            style={{ width: "100%" }}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="login-footer-text">
            Already have an account? <Link className="signup-link" to="/login">Login</Link>
          </p>
        </form>


      </div>
    </div>
  );
}

export default RegisterPage;
