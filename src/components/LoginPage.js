import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this is the same as in SignUpPage
import styles from "./LoginPage.module.css"; // Import CSS Module
import LoginImage from "./Images/Msh.jpg";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To navigate programmatically

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); // Mark user as logged in
      alert("Login successful!");
      navigate("/image-generator"); // Redirect on success
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.imageContainer}>
        <img src={LoginImage} alt="Left side" />
      </div>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <p>Good to see you! Please login to your account.</p>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className={styles.signupText}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
