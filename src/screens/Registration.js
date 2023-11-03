import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../App.css";
import axios from "axios";
import Loader from "react-js-loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = () => toast("Successfully Registered");

  // useEffect(() => {
  //   const fetch = async () => {
  //     const token = await localStorage.getItem("token");
  //     console.log(token);
  //   };
  //   fetch();
  // });

  const handleRegistration = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://quauntum-it-backend.onrender.com/register", {
        name,
        password,
        email,
        dob,
      });
      setLoading(false);
      // console.log(response.data.token);
      const token = response.data.token;
      localStorage.setItem("token", token);
      notify();
    } catch (error) {
      console.error("Registration failed", error);
      alert("Already in use Email ");
      setLoading(false);

      // Handle registration error
    }
  };
  const navigate = useNavigate();
  const goto =()=>{
    navigate('/login')
  }

  return (
    <div
      className="box"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight,
      }}
    >
      <ToastContainer />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
        className="container"
      >
        <div
          style={{
            height: "50px",
            width: "190px",
            borderRadius: "2px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00f5e1",
            fontSize: "24px",
            marginTop: "-20px",
          }}
        >
          SIGN UP
        </div>
        <img
          src={require("../assets/wave.png")}
          style={{ height: "140px", width: "100%", opacity: 0.2 }}
        />
        <img
          src={require("../assets/user.png")}
          style={{
            height: "80px",
            width: "80px",
            marginTop: "-90px",
            opacity: 0.7,
          }}
        />
        <input
          type="text"
          placeholder="Name"
          className="inputbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="inputbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="inputbox"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            console.log(dob);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-10px",
            width: "220px",
          }}
        >
          <p style={{ color: "#00f5e1", fontSize: "12px" }}>Remember me </p>
          <p style={{ color: "#00f5e1", fontSize: "12px" }}>Forgot Passowrd</p>
        </div>
        {loading ? (
          <div className={"item"}>
            <Loader type="spinner-cub" size={50} />
          </div>
        ) : (
          <div className="button" onClick={handleRegistration}>
            Register
          </div>
        )}
        <p style={{color:"#00f5e1",cursor:"pointer",fontSize:"14.5px",marginBottom:'20px'}} onClick={goto}>Already have an account Login !</p>
      </div>
    </div>
  );
}

export default Registration;
