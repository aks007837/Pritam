import React from "react";
import { Layout } from "../components";
import { useState } from "react";
import "./css/login.css";
import { login } from "../assets";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); // Correct the spelling of 'username'
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted: ");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login-admin",
        { username, password }, // Correct the spelling of 'username'
        { headers: { "Content-Type": "application/json" } }
      );
      alert(`${res.data.message}`);
      setUsername("");
      setPassword("");
      console.log(res);
      localStorage.setItem("auth", JSON.stringify(res.data));

      // Check if login was successful before navigating
      if (res.data.success) {
        const timeoutId = setTimeout(() => {
          navigate("/loggedin-admin/admin-panel");
        }, 2000);
      }
    } catch (error) {
      console.log(`Error in passing value`, error);
    }
  };

  return (
    <Layout>
      <div className="containers">
        <div className="outer">
          <div className="forms">
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:{" "}
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                />
              </label>
              <label>
                Password:{" "}
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
              </label>
              <label>
                Don't have an Account
                <Link to="/register-admin">
                  <label>Register Here</label>
                </Link>
              </label>
              <label>
                <button type="submit">Submit</button>
              </label>
            </form>
          </div>
        </div>
        <div className="images">
          <img src={login} alt="Login Here" />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
