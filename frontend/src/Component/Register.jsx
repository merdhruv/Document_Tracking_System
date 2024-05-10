import './register.css';
import { useState } from "react";
import { validateEmail } from "./utils";
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
const ContactErrMsg = ()=>{
  return(
    <p className='FieldError'>Contact shouldhave 10 digits</p>
  )
}

export default function Register() {
  const [userid, setUserId] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("role");
  const [dateOfJoining, setDateOfJoining] = useState(new Date().toISOString().substr(0, 10));

  const getIsFormValid = () => {
    return (
      userid &&
      fullname &&
      validateEmail(email) &&
      password.length >= 8 &&
      role !== "role" &&
      username &&
      contact
    );
  };

  const clearForm = () => {
    setUserId("");
    setFullName("");
    setUsername("");
    setContact("");
    setEmail("");
    setPassword("");
    setRole("role");
    setDateOfJoining(new Date().toISOString().substr(0, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = 'http://localhost:5000/api/user/adduser';

    axios.post(url, {
      userid,
      fullname,
      username,
      contact,
      email,
      password,
      role,
      dateOfJoining
    })
    .then(({ data }) => {
      console.log(data);
      alert("Account created!");
      clearForm();
    })
    .catch(err => {
      console.error(err);
      alert("Error creating account. Please try again.");
    });
  };

  return (
    <div className="RegistrationApp">
      <form onSubmit={handleSubmit} className="registrationForm">
      <Button type="primary" danger ghost icon = {<DeleteOutlined />} onClick={()=>{
          sessionStorage.clear();
          window.location.href = '/';
          
        }}
        style={{"marginRight": "500px"}}
        >
         close
        </Button>
        
        <h2>New User</h2>
        <div className="formRow">
          <div className="Field">
            <label>User ID <sup>*</sup></label>
            <input
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID"
            />
          </div>
          <div className="Field">
            <label>Full name <sup>*</sup></label>
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
            />
          </div>
        </div>
        <div className="formRow">
          <div className="Field">
            <label>Username <sup>*</sup></label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="Field">
            <label>Contact <sup>*</sup></label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
              type="number"
            />
            {contact.length > 0 && contact.length !== 10  && < ContactErrMsg />}
          </div>
        </div>
        <div className="formRow">
          <div className="Field">
            <label>Email address <sup>*</sup></label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>Password <sup>*</sup></label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {password.length > 0 && password.length < 8 && <PasswordErrorMessage />}
          </div>
        </div>
        <div className="formRow">
          <div className="Field">
            <label>Role <sup>*</sup></label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="Field">
            <label>Date of joining <sup>*</sup></label>
            <input
              value={dateOfJoining}
              type="date"
              onChange={(e) => setDateOfJoining(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Create account
        </button>
      </form>
    </div>
  );
}