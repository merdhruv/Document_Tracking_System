import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./admin.css";
import { DownOutlined } from '@ant-design/icons';
import { Select, Spin,Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faList,faUser,faUserPen,faUserXmark,faUserLock,faUserMinus, faXmark} from '@fortawesome/free-solid-svg-icons';
// import debounce from 'lodash/debounce';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Register from '../Register';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
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

export default function UserManagement() {

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [userslist, setUsers] = useState([]);

  const fetchData = () => {
  axios.get("http://localhost:5000/api/user")
    .then(users => {
      setUsers(users.data.response);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};
const handleRefresh = () => {
  fetchData();
};

useEffect(() => {
  fetchData(); // Fetch data when component mounts
}, []);
  const navigate = useNavigate()

  const handleUpdate = ()=>{
      navigate("/admin/update")
  }

  const handleDelete = (userid)=>{
    console.log(userid);
    axios.post("http://localhost:5000/api/user/delete",{userid})
    .then(res=>{
      handleRefresh();
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  
  const [value, setValue] = useState([]);
  return (
    <div>

        <div className='Listheader'>

            <h2>User List</h2>
            <span>

              

          <button type="button" className="btn btn-secondary" onClick={()=>{setModalIsOpen(true)}} style={{"marginLeft":"10px"}}>
            <FontAwesomeIcon icon={faPlus} style = {{"marginRight":"10px"}} />
            Add New User
          </button>
            </span>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={customStyles}
            >
              <button className= "cancel-button" id="form-open" onClick={() =>{ 
                setModalIsOpen(false);
                handleRefresh();
                }}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
                <Register/>
              
              
            </Modal>


        </div>
      <div className='table-container'>
        <table className="table table-bordered caption-top">
            <thead className='table-dark'>
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Full Name</th>
                <th scope="col">Username</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             {
             Object.values(userslist).map((user)=>(
              <tr key={user._id}>
                <td scope='row'>{user.userid}</td>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.status}</td>
                <td>
                <Button  onClick={()=>{handleUpdate()}}>
                  <FontAwesomeIcon icon={faUserPen} />
                  
                </Button>
                <Button onClick={()=>{handleDelete(user._id)}} >
                  <FontAwesomeIcon icon={faUserMinus} />
                  
                </Button>
                  {/* <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                      <FontAwesomeIcon icon={faList} />
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown> */}
                </td>
              </tr>
             ))}
            </tbody>
            
          </table>
      </div>
    </div>
  )
}
