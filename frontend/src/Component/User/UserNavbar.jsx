// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, NavDropdown, useNavigate } from 'react-router-dom';

// function UserNavbar() {
//   const navigate = useNavigate()
//   const onLogout =()=>{
//     navigate('/');
//   }
//   return (
//     <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand " to="/user">Document Tracking System</Link>
        
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

//             <li className="nav-item">
//               <Link className="nav-link active" to="/user">Incoming</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/user/outgoing">Outgoing</Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">My Account</a>
//             </li>
//             {/* <li className="nav-item">
//               <NavDropdown title="My Account" id="my-account-dropdown" className="nav-link">
//                 <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
//               </NavDropdown>
//             </li> */}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default UserNavbar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import "./home.css"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div className="d-flex align-items-center" ref={ref} onClick={onClick}>
    <div className="icon-background">
      <FontAwesomeIcon icon={faCircleUser} />
    </div>
  </div>
));

function UserNavbar() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/user">
          Document Tracking System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">
                <Link className="dropdown-item" to="/user" exact activeClassName="active">
                  Incoming
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <Link className="dropdown-item" to="/user/outgoing" activeClassName="active">
                  Outgoing
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                <Link className="dropdown-item" to="/user/my-account" activeClassName="active">
                  My Account
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4"><Link className="dropdown-item" to="/" exact activeClassName="active">
                  Sign Out
                </Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;