import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../screens/Login.css';

export default function Login() {
    const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("https://pediprime-backend.onrender.com/api/loginuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)  // Simplified body payload
            });

            const json = await response.json();
            console.log("Response JSON:", json);

            if (!json.success) {
                alert(json.errors || "Enter valid credentials");
            } else {
                localStorage.setItem("authToken", json.authToken);
                console.log("Auth Token:", localStorage.getItem("authToken"));
                alert("Login successful!");
                const { from } = location.state || { from: { pathname: "/" } };
                navigate(from);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again.");
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div className='login-background'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Users Login</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Users Name" 
                            name="username"
                            value={credentials.username}
                            onChange={onChange}
                            required 
                        />
                        <i className='bx bxs-user'></i>
                    </div>

                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            required 
                        />
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                            required 
                        />
                        <i className='bx bxs-lock'></i>
                    </div>

                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? 
                            <Link to="/createuser"> Register</Link>
                        </p>
                    </div>
                    <div className="register-link">
                        <p>Are you a doctor? 
                            <Link to="/logindoctor"> Login doctor's profile</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
