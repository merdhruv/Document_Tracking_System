import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import "./home.css";

const documents = [{
  code : '1',
  sender : "admin",
  details : 'file send for re-submission',
  dateOfLetter : '21-12-2023',
  status : 'pending',
},
{
  code : '2',
  sender : "admin",
  details : 'for re-submission',
  dateOfLetter : '23-12-2023',
  status : 'pending',
},
{
  code : '3',
  sender : "admin",
  details : 'verified',
  dateOfLetter : '10-12-2023',
  status : 'ended',
},
{
  code : '4',
  sender : "admin",
  details : 'file send for re-submission',
  dateOfLetter : '10-01-2024',
  status : 'pending',
},
]

export default function UserHome() {
const [documentsList, setDocumentsList] = useState(documents);

const navigate = useNavigate();
const handleCompose = ()=>{
  navigate('/user/compose');
}
  return (
    <div>
        <div className="black-box">
         <div className="blue-box">
            <div className="leaves">
              <h4>Incoming Documents</h4>
              <h4>0</h4>
            </div>
          </div>
          <div className="yellow-box">
            <div className="leaves">
              <h4>Pending Documents</h4>
              <h4>0</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Received Documents</h4>
              <h4>0</h4>  
            </div>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Ended Documents</h4>
              <h4>0</h4>  
            </div>
          </div>
       </div>
       <div>
        <button type="button" className="btn btn-secondary" onClick={handleCompose}>
          <FontAwesomeIcon icon={faPlus} style = {{"margin-right":"10px"}} />
          Compose
        </button>
       </div>
      
      <div className='table-container'>
        <table className="table table-bordered caption-top">
          <caption>List of Documents</caption>
            <thead className='table-dark'>
              <tr>
                <th scope="col">Doc Code</th>
                <th scope="col">Sender</th>
                <th scope="col">Details</th>
                <th scope="col">Date of Letter </th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {documentsList.map((doc) => (
            <tr key={doc.code}>
              <th scope="row">{doc.code}</th>
              <td>{doc.sender}</td>
              <td>{doc.details}</td>
              <td>{doc.dateOfLetter}</td>
              <td>{doc.status}</td>
              <td> <Button type="primary" icon={<SearchOutlined />}>
                 view
                </Button>
              </td>
            </tr>
          ))}
            </tbody>
          </table>
      </div>
      
    </div>
  )
}
