import React, { useEffect, useState } from "react";
import "./index.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

  },
};

Modal.setAppElement("#root");


const App = () => {
  // const [showForm, setShowForm] = useState(false);

  // const handleFormToggle = () => {
  //   setShowForm(!showForm);
  // };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [islogged, setIslogged] = useState(false);

  useEffect(()=>{
    if(islogged === true){
      navigate('/user')
    }
  },[islogged])

  const navigate = useNavigate();

  const handleLogin = ()=>{
    axios.post("http://localhost:5000/api/admin/userlogin", {username,password})
    .then(result=>{
      if(result.data.message === 'Success'){
        setIslogged(true);
      }
    }).catch((err)=>{
      console.log(err);
    })

  };
  

  return (
    <>
    {/* Header */}
    <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            Document Tracker
          </a>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Product
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
          <button className="button" id="form-open"  onClick={() => setModalIsOpen(true)}>
            Login
          </button>
        </nav>
      </header>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="container modal-container">
          <div className="row modal-row">
            <div className="offset-4 col-3">
              <h2>Login</h2>
            </div>
            <div className="offset-2 col-3">
              <button className= "cancel-button" id="form-open" onClick={() => setModalIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
               </button>
            </div>
          </div>
        
            <form className="form login_form" >
              <div className="row modal-row"> 
                Email
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <div className="row modal-row">

                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="row modal-row">
                <button type="submit" onClick={()=>{handleLogin()}}>Login</button>
              </div>
              <div className="row modal-row">
                New User? <Link to = "/register" style={{"width":"20%"}}>Register</Link>
              </div>
            </form>
          </div>
      </Modal>

      {/* Home section */}
      {/* <section className="home"> */}
        {/* <div
          className="form_container"
          style={{ display: showForm ? "block" : "none" }}
        > */}
          {/* Login Form */}
          {/* <div className="form login_form">
            <form action="#" method="post">
              <h2>Login</h2>
              <div className="input_box">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <div className="option_field">
                <span className="checkbox">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">Remember me</label>
                </span>
                <a href="#" className="forgot_pw">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="button">
                Login Now
              </button>
              <div className="login_signup">
                Don't have an account?{" "}
                <a href="#" id="signup">
                  Signup
                </a>
              </div>
            </form>
          </div> */}

          {/* Signup Form */}
          {/* <div className="form signup_form">
            <form action="#" method="post">
              <h2>Signup</h2>
              <div className="input_box">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input type="password" placeholder="Create password" required />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <button type="submit" className="button">
                Signup Now
              </button>
              <div className="login_signup">
                Already have an account?{" "}
                <a href="#" id="login">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div> */}

        {/* Details Container */}
        <div className="details_container">
          <h2>Details Container</h2>
          <p>
            The Document Tracking System (DTS) app is designed to streamline and
            enhance the management of documents within an organization. It
            offers a centralized platform for tracking, organizing, and
            accessing various types of documents, improving efficiency,
            accountability, and compliance.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="responsive_cards">
          <div className="card">
            <h3>Card 1</h3>
            <p>Content for card 1.</p>
          </div>
          <div className="card">
            <h3>Card 2</h3>
            <p>Content for card 2.</p>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>Content for card 3.</p>
          </div>
        </div>
      {/* </section> */}

      {/* Footer */}
      <div className="footer">
        {/* Footer content */}
        <div className="footer">
          <div className="container-custom">
            <div className="footer-content-wrap">
              <div className="footer-left-block">
                  
                <div className="footer-acknowledgement">
                  <img
                    src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423aa8c94136e5f1a736a1f_logo-colour.svg"
                    loading="lazy"
                    alt="InCheq logo"
                    height="20"
                    className="footer-logo"
                    />
                  <div className="body-small">
                    We acknowledge the Traditional Owners of the land where we
                    work and live, the Gadigal people of the Eora Nation and pay
                    our respects to Elders past, present, and emerging. We
                    celebrate the stories, culture and traditions of Aboriginal
                    and Torres Strait Islander Elders of all communities who
                    also work and live on this land.
                  </div>
                </div>
              </div>
              <div className="footer-right-block">
                <div className="footer-newsletter">
      
                </div>
                <div className="footer-social">
                  <div className="footer-icons-wrap">
                    <a
                      href="https://www.facebook.com/incheq.co"
                      target="_blank"
                      className="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac703f4433e644d297d_icon-social-facebook.svg"
                        loading="lazy"
                        alt="facebook icon"
                        className="social-icon"
                      />
                      <div className="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://twitter.com/incheq_aus"
                      target="_blank"
                      className="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac73d90a44d405c1067_icon-social-twitter.svg"
                        loading="lazy"
                        alt="twitter icon"
                        className="social-icon"
                        />
                      <div className="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://www.instagram.com/incheq.co/"
                      target="_blank"
                      className="social-icon-block w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac78d8367ec0922c640_icon-social-instagram.svg"
                        loading="lazy"
                        alt="t"
                        className="social-icon"
                      />
                      <div className="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/incheq-co/"
                      target="_blank"
                      className="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac7889b6aa4dfc8bf31_icon-social-linkedin.svg"
                        loading="lazy"
                        alt="linkedin icon"
                        className="social-icon"
                        />
                      <div className="bg-btn-animate is-social"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="copyright-left">
                <div className="link-wrapper">
                  <a
                    href="/terms-conditions"
                    target="_blank"
                    className="body-small"
                  >
                    Terms and Conditions
                  </a>
                  <div className="underline-hover hide-tablet-down"></div>
                </div>
                <div className="link-wrapper">
                  <a href="/privacy-policy" target="_blank" className="body-small">
                    Privacy Policy
                  </a>
                  <div className="underline-hover hide-tablet-down"></div>
                </div>
              </div>
              <div className="copyright-right">
                <div className="body-xs">
                  © 2023 InCheq. All Rights Reserved
                  <a
                    href="https://www.monotonomo.com/"
                    target="_blank"
                    className="by-link"
                    ></a>
                </div>
                <div className="body-xs">
                  <a
                    href="https://www.monotonomo.com/"
                    target="_blank"
                    className="by-link"
                  >
                    Website by Monotonomo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor">
          <div
            data-w-id="9f54bfc6-d3fa-a651-f09d-f4c94a566b55"
            className="cursor-dot"
          >
            <div className="cursor-dot-small"></div>
          </div>
          <div className="w-embed">
            <style></style>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default App;
