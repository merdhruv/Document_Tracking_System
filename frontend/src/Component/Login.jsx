import React, { useState } from "react";
import "./index.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark} from '@fortawesome/free-solid-svg-icons';
import Modal from "react-modal";

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
        <button  className="button" id="form-open" onClick={() => setModalIsOpen(false)}>
        <FontAwesomeIcon icon={faRectangleXmark} />
        </button>
        <h2>Login</h2>
        <div> 

        <form className="form login_form">
          <div>

            Username
            <input
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              />
        
          </div>
          <div>

          
            Password:
            <input
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              />
          
          </div>
          <button type="submit">Login</button>
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
        <div class="footer">
          <div class="container-custom">
            <div class="footer-content-wrap">
              <div class="footer-left-block">
                <div class="sitema-cols">
                  <div
                    id="w-node-a2c4573c-6bf0-d5dc-5a6a-14744d65b766-f94ff522"
                    class="sitemap-block"
                    >
                    <div class="sitemap-txt-heading">Business Solutions</div>
                    <div class="link-wrapper">
                      <a
                        href="/business-solutions/platform"
                        class="sitemap-txt"
                        >
                        Platform
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a
                        href="/business-solutions/services"
                        class="sitemap-txt"
                        >
                        Services
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-f1afe11b-c692-51e1-9f70-427d0760c303-f94ff522"
                    class="sitemap-block"
                  >
                    <div class="sitemap-txt-heading">Science</div>
                    <div class="link-wrapper">
                      <a href="/science/our-approach" class="sitemap-txt">
                        Our approach
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a href="/science/data-science" class="sitemap-txt">
                        Data science
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-_44e9c862-1861-6abf-d07c-874d78d5367b-f94ff522"
                    class="sitemap-block"
                  >
                    <div class="sitemap-txt-heading">Resources</div>
                    <div class="link-wrapper">
                      <a href="/resources/blog" class="sitemap-txt">
                        Blog
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a href="/resources/whs-regulations" class="sitemap-txt">
                        WHS regulations
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a href="/resources/faqs" class="sitemap-txt">
                        FAQs
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-_345ee3e1-e4db-9961-0d2b-28baa14be699-f94ff522"
                    class="sitemap-block"
                    >
                    <div class="sitemap-txt-heading">Company</div>
                    <div class="link-wrapper">
                      <a href="/about" class="sitemap-txt">
                        About
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a href="/pricing" class="sitemap-txt">
                        Pricing
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                    <div class="link-wrapper">
                      <a
                        href="/contact"
                        aria-current="page"
                        class="sitemap-txt w--current"
                      >
                        Contact
                      </a>
                      <div class="underline-hover hide-tablet-down"></div>
                    </div>
                  </div>
                </div>
                <div class="footer-acknowledgement">
                  <img
                    src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423aa8c94136e5f1a736a1f_logo-colour.svg"
                    loading="lazy"
                    alt="InCheq logo"
                    height="20"
                    class="footer-logo"
                    />
                  <div class="body-small">
                    We acknowledge the Traditional Owners of the land where we
                    work and live, the Gadigal people of the Eora Nation and pay
                    our respects to Elders past, present, and emerging. We
                    celebrate the stories, culture and traditions of Aboriginal
                    and Torres Strait Islander Elders of all communities who
                    also work and live on this land.
                  </div>
                </div>
              </div>
              <div class="footer-right-block">
                <div class="footer-newsletter">
                  <h4 class="h4">
                    <span class="text-span-2">Join our newsletter </span>to stay
                    up to date
                  </h4>
                  <div class="footer-form w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      action="https://incheq.us13.list-manage.com/subscribe/post?u=bfab47d28bf59ca4e7f1485a6&amp;amp;id=eb64972505&amp;amp;f_id=002297e2f0"
                      method="post"
                      class="form-input"
                      data-wf-page-id="644778a14084c932eebff15b"
                      data-wf-element-id="db47293f-5e27-36f3-7436-b85697a8b0b1"
                      >
                      <input
                        class="form-field w-input"
                        maxlength="256"
                        name="EMAIL"
                        data-name="EMAIL"
                        placeholder="Enter your email"
                        type="email"
                        id="EMAIL-2"
                        required=""
                        />
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        class="button w-button"
                        value="Subscribe"
                        />
                    </form>
                    <div class="form-success-message w-form-done">
                      <div class="body-small align-left">
                        Thank you! You are now subscribed to our newsletter.
                      </div>
                    </div>
                    <div class="body-small w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                        Please try again.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-social">
                  <div class="footer-icons-wrap">
                    <a
                      href="https://www.facebook.com/incheq.co"
                      target="_blank"
                      class="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac703f4433e644d297d_icon-social-facebook.svg"
                        loading="lazy"
                        alt="facebook icon"
                        class="social-icon"
                      />
                      <div class="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://twitter.com/incheq_aus"
                      target="_blank"
                      class="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac73d90a44d405c1067_icon-social-twitter.svg"
                        loading="lazy"
                        alt="twitter icon"
                        class="social-icon"
                        />
                      <div class="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://www.instagram.com/incheq.co/"
                      target="_blank"
                      class="social-icon-block w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac78d8367ec0922c640_icon-social-instagram.svg"
                        loading="lazy"
                        alt="t"
                        class="social-icon"
                      />
                      <div class="bg-btn-animate is-social"></div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/incheq-co/"
                      target="_blank"
                      class="social-icon-block w-inline-block"
                      >
                      <img
                        src="https://assets-global.website-files.com/6411205aa4059e3917a059f4/6423cac7889b6aa4dfc8bf31_icon-social-linkedin.svg"
                        loading="lazy"
                        alt="linkedin icon"
                        class="social-icon"
                        />
                      <div class="bg-btn-animate is-social"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="copyright-left">
                <div class="link-wrapper">
                  <a
                    href="/terms-conditions"
                    target="_blank"
                    class="body-small"
                  >
                    Terms and Conditions
                  </a>
                  <div class="underline-hover hide-tablet-down"></div>
                </div>
                <div class="link-wrapper">
                  <a href="/privacy-policy" target="_blank" class="body-small">
                    Privacy Policy
                  </a>
                  <div class="underline-hover hide-tablet-down"></div>
                </div>
              </div>
              <div class="copyright-right">
                <div class="body-xs">
                  © 2023 InCheq. All Rights Reserved
                  <a
                    href="https://www.monotonomo.com/"
                    target="_blank"
                    class="by-link"
                    ></a>
                </div>
                <div class="body-xs">
                  <a
                    href="https://www.monotonomo.com/"
                    target="_blank"
                    class="by-link"
                  >
                    Website by Monotonomo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cursor">
          <div
            data-w-id="9f54bfc6-d3fa-a651-f09d-f4c94a566b55"
            class="cursor-dot"
          >
            <div class="cursor-dot-small"></div>
          </div>
          <div class="w-embed">
            <style></style>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default App;
