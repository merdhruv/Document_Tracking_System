import React,{useEffect,useState} from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';

export default function AdminOutgoing() {
  const [documentList, setDocumentsList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/file")
    .then((res)=>{
      setDocumentsList(res.data.response);
    })
  },[])
  return (
    <div>
      <div className='table-container'>
        <table className="table table-bordered caption-top">
          <caption>List of Documents</caption>
            <thead className='table-dark'>
              <tr>
                <th scope="col">Doc Code</th>
                <th scope="col">Recipient</th>
                <th scope="col">Details</th>
                <th scope="col">Date of Letter </th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
                Object.values(documentList).map((doc)=>{
                  return<tr key = {doc._id}>
                    <td>{doc.Doc_code}</td>
                    <td>{doc.recipient}</td>
                    <td>{doc.description}</td>
                    <td>{doc.category}</td>
                    <td> {doc.status} </td>
                    <td> <Button type="primary" icon={<SearchOutlined />}>
                      view
                      </Button>
                    </td>
                    
                  </tr>
                })

              }
            </tbody>
          </table>
      </div>
    </div>
  )
}
