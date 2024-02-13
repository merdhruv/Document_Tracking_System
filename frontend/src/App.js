import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserNavbar from './Component/User/UserNavbar';
import UserHome from './Component/User/UserHome';
import AdminNavbar from './Component/Admin/AdminNavbar';
import AdminOutgoing from './Component/Admin/AdminOutgoing';
import AdminHome from './Component/Admin/AdminHome';
import UserManagement from './Component/Admin/UserManagement';
import Outgoing from './Component/User/Outgoing';
import UserForm from './Component/User/UserForm';
import Login from './Component/Login';
import Register from './Component/Register';
import PdfViewer from './Component/PdfViewer';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='register'element={<Register/>} />
            <Route path='pdf' element = {<PdfViewer/>} />
            <Route path="/" element={<Login/>}/>
            <Route path="user" element={
              <>
              <UserNavbar/>
              <UserHome/>
              </>
            } />
            <Route path = "admin" element = {
              <>
              <AdminNavbar/>
              <AdminHome/>
              </>
            }/>
            <Route path = "user/outgoing" element={
              <>
              <UserNavbar/>
              <Outgoing/>
              </>
            }/>
            <Route path = "user/compose" element={
              <>
              <UserNavbar/>
              <UserForm/>
              </>
            } />
            <Route path = "admin/usermanage" element={
              <>
              <AdminNavbar/>
              <UserManagement/>
              </>
            }/>
          <Route path = "admin/outgoing" element={
              <>
              <AdminNavbar/>
              <AdminOutgoing/>
              </>
            }/>
          </Routes>

        </div>
    </BrowserRouter>
  );
}

export default App;
