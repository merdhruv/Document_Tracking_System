import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function UserNavbar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <Link class="navbar-brand " to="/user">Document Tracking System</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li class="nav-item">
              <Link className="nav-link active" to="/user">Incoming</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/user/outgoing">Outgoing</Link>
            </li>
            
            
            <li class="nav-item">
              <a class="nav-link" href="#">My Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
