import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import { SearchOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import Modal from "react-modal";
import "./home.css";
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



export default function UserHome() {
const [modalIsOpen, setModalIsOpen] = useState(false);
const [documentsList, setDocumentsList] = useState([]);
const [pdfsrc, setPdfsrc]=useState('');

const fetchData = ()=>{
  axios.get("http://localhost:5000/api/file")
  .then((documents)=>{
    setDocumentsList(documents.data.response);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
}

const handleRefresh = ()=>{
  fetchData();
}

useEffect(()=>{
  fetchData();
},[])

const handleDelete = (doc)=>{
  
    axios.post("http://localhost:5000/api/file/delete", {Doc_code:doc._id})
    .then(res=>{
      console.log(res.data.message);
      alert("file deleted")
      handleRefresh();
    })
    .catch((err)=>{
    console.log('error', err)
  })
}

const navigate = useNavigate();

const doclist = ()=>{

  
  return Object.values(documentsList).map((doc) => {

    return <tr key={doc._id}>
      <th>{doc.Doc_code}</th>
      <td>{doc.sender}</td>
      <td>{doc.description}</td>
      <td>{doc.category}</td>
      <td>{doc.priortization}</td>
      <td > 
      
        <Button type="primary" ghost icon = {<SearchOutlined />} style={{"marginRight":"10px"}} onClick={()=>{handleView(doc)}}>
         view
        </Button>
        <Button type="primary" danger ghost icon = {<DeleteOutlined />} onClick={()=>{handleDelete(doc)}}>
         Delete
        </Button>
      </td>
    </tr>
    })
}

const handleCompose = ()=>{
  navigate('/compose');
}
const handleView = (doc) => {
  navigate(`/PdfViewer/${doc.filename}`);
};

  return (
    <div>
        <div className="black-box">
         <div className="blue-box">
            <div className="leaves">
              <h4>Incoming Documents</h4>
              <h4>{documentsList.length}</h4>
            </div>
          </div>
          <div className="yellow-box">
            <div className="leaves">
              <h4>Pending Documents</h4>
              <h4>2</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Received Documents</h4>
              <h4>2</h4>  
            </div>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Ended Documents</h4>
              <h4>1</h4>  
            </div>
          </div>
       </div>
       <div>
        <button type="button" className="btn btn-secondary" onClick={handleCompose}>
          <FontAwesomeIcon icon={faPlus} style = {{"marginRight":"10px"}} />
          Compose
        </button>
       </div>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <button className= "cancel-button" id="form-open" onClick={() => setModalIsOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <iframe src={pdfsrc} width="100%" height="500px" />
        
      </Modal>
      
      <div className='table-container'>
        <table className="table table-bordered caption-top">
          <caption>List of Documents</caption>
            <thead className='table-dark'>
              <tr>
                <th scope="col">Doc Code</th>
                <th scope="col">Sender</th>
                <th scope="col">Details</th>
                <th scope="col">Category </th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(documentsList)} */}
              {doclist()}
            </tbody>
          </table>
      </div>
      
    </div>
  )
}
