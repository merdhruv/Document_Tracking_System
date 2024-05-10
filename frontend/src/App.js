import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserNavbar from './Component/User/UserNavbar';
import UserHome from './Component/User/UserHome';
import AdminNavbar from './Component/Admin/AdminNavbar';
import AdminOutgoing from './Component/Admin/AdminOutgoing';
import UserManagement from './Component/Admin/UserManagement';
import Outgoing from './Component/User/Outgoing';
import Compose from './Component/User/Compose';
import Login from './Component/Login';
import Register from './Component/Register';
import PdfViewer from './Component/PdfViewer';
import UpdateUser from './Component/Admin/UpdateUser';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const navigate = useNavigate();

  const token = getToken()

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  
  return (
        <div className="App">
          <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/register'element={<Register/>} />
            <Route path = "/PdfViewer/:filename" element = {<PdfViewer/>} />
            <Route path="/user" element={
              <>
              <UserNavbar setToken = {setToken} token = {token}/>
              <UserHome/>
              </>
            } />
            <Route path = "/admin" element = {
              <>
              <AdminNavbar/>
              <UserHome/>
              </>
            }/>
            <Route path = "/user/outgoing" element={
              <>
              <UserNavbar/>
              <Outgoing/>
              </>
            }/>
            <Route path = "/user/compose" element={
              <>
              <UserNavbar/>
              <Compose/>
              </>
            } />
            <Route path = "/admin/usermanage" element={
              <>
              <AdminNavbar/>
              <UserManagement/>
              </>
            }/>
          <Route path = "/admin/outgoing" element={
              <>
              <AdminNavbar/>
              <AdminOutgoing/>
              </>
            }/>
            <Route path = "/admin/update" element={
              <>
              <AdminNavbar/>
              <UpdateUser/>
              </>
            }/>
          </Routes>
          

        </div>
  );
}

export default App;
