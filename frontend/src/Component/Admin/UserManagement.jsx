import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./admin.css";
import { DownOutlined } from '@ant-design/icons';
import { Select, Spin,Dropdown, Space } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faList,faUser,faUserPen,faUserXmark,faUserLock,faUserMinus} from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash/debounce';
import axios from 'axios';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
  console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    );
}

export default function UserManagement() {

  const [userslist, setUsers] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/user")
    .then(users=>{
      setUsers(users.data.response);
      console.log(users.data.response);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  },[])
  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          <FontAwesomeIcon icon={faUser} />
          View Profile
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          
          <FontAwesomeIcon icon={faUserLock} />
          Change password
        </a>
      ),
      key: '1',
    },
    // {
    //   type: 'divider',
    // },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          <FontAwesomeIcon icon={faUserXmark} />
          Deactivate
        </a>
      ),
      key: '2',
      disabled: false,
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          <FontAwesomeIcon icon={faUserPen} />
          Update
        </a>
      ),
      key: '3',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          <FontAwesomeIcon icon={faUserMinus} />
          Remove
        </a>
      ),
      key: '4',
    },
  ];
  const [value, setValue] = useState([]);
  return (
    <div>

        <div className='Listheader'>

            <h2>User List</h2>
            <span>

              <DebounceSelect
              mode="multiple"
              value={value}
              placeholder="Select users"
              fetchOptions={fetchUserList}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              style={{
                width: '75%',
              }}
              />

          <button type="button" className="btn btn-secondary" style={{"marginLeft":"10px"}}>
            <FontAwesomeIcon icon={faPlus} style = {{"marginRight":"10px"}} />
            Add New User
          </button>
            </span>


        </div>
      <div className='table-container'>
        <table className="table table-bordered caption-top">
            <thead className='table-dark'>
              <tr>
                <th scope="col">SNo.</th>
                <th scope="col">Full Name</th>
                <th scope="col">Username</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(userslist)}
             {
             Object.values(userslist).map((user,index)=>(
              <tr key={index}>
                <td scope='row'>{user.userid}</td>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.status}</td>
                <td>
                <Dropdown
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
                  </Dropdown>
                </td>
              </tr>
             ))}
            </tbody>
            
          </table>
      </div>
    </div>
  )
}
