import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);
    //fetch is core module that is used to integrate api in language javascript
    //paramters in fetch are 1) the url 2) other parameters like body method header etcc
    let result = await fetch("http://localhost:5001/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div className="Register">
      <h1>Register</h1>

      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      ></input>

      <input
        className="inputbox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <input
        className="inputbox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter the Password"
      />

      <button onClick={collectData} className="button" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
