import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from "./SignUpPage.module.css";
import MashroomImage from "./Images/Mashroom.jpg"; // Ensure this path is correct

const SignUpPage = () => {

    const navigate = useNavigate(); // To navigate on login page

    const handleSignUp = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful!");
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <div className={styles.loginpage}>
            <div className={styles.loginform}>
                <h1>Hi there!</h1>
                <p>Welcome to Our App, so happy to see you!</p>

                <form onSubmit={handleSignUp}>
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Enter your username" required />

                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" required />

                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password" required />

                    <div className={styles.terms}>
                        <input type="checkbox" required />
                        <span>I agree to the Terms of Use and Privacy Policy</span>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>

                <p className={styles.loginlink}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>

            <div className={styles.loginimage}>
                <img src={MashroomImage} alt="Astronaut with balloons" />
            </div>
        </div>
    );
};

export default SignUpPage;
