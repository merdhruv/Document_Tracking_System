import {React, useEffect, useState} from 'react';
import "./home.css";
import axios from 'axios';
// import PdfViewer from '../PdfViewer';
import { PlusOutlined, SendOutlined  } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
  Flex
} from 'antd';
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export default function UserForm ()  {

  const [docCode, setDocCode] = useState('');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [category, setCategory] = useState('');
  const [prioritize, setPrioritize] = useState('');
  const [description, setDescription] = useState('');

  const [avatar, setAvatar] = useState('');

  const[form] = Form.useForm();

  const handleSend  = (event)=>{
    event.preventDefault();
    if(avatar){

      const formData = new FormData();
      formData.append('Doc_code', docCode);
      formData.append('sender', sender);
      formData.append('recipient', recipient);
      formData.append('category', category);
      formData.append('priortization', prioritize);
      formData.append('description', description);
      formData.append('avatar', avatar);
      
      axios.post("http://localhost:5000/api/file/addfile",formData, {headers:{
        'Content-Type': 'multipart/form-data',
      }})
      .then(file=>{
        console.log(file.data);
      })
      
    }

    // alert("File has been send");
    form.resetFields();
  } 

  return (
    <div className='user-form'>
      <Form
        form = {form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1200,
        }}
      >
        <Form.Item label="Doc Code">
          <Input 
          value = {docCode}
          onChange={(e)=>{setDocCode(e.target.value)}}
           />
        </Form.Item>

        <Form.Item label="Sender">
        <Input 
          value = {sender}
          onChange={(e)=>{setSender(e.target.value)}}
           />
        </Form.Item>

        <Form.Item label="Recipient">
        <Input 
          value = {recipient}
          onChange={(e)=>{setRecipient(e.target.value)}}
           />
        </Form.Item>

        <Form.Item label="Category">
        <Input 
          value = {category}
          onChange={(e)=>{setCategory(e.target.value)}}
           />
        </Form.Item>
        
        <Form.Item label="Prioritization">
        <Input 
          value = {prioritize}
          onChange={(e)=>{setPrioritize(e.target.value)}}
           />
        </Form.Item>

        
        <Form.Item label="Description">
          <TextArea
          value = {description}
          onChange={(e)=>{setDescription(e.target.value)}}
           rows={4} />
        </Form.Item>
        
        <Form.Item label="Upload" name="avatar" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload listType="picture-card" 
          onChange={(info) => {
            if (info.file.status === 'done') {
              setAvatar(info.file.response.url);
            } else if (info.file.status === 'removed') {
              setAvatar(null);
            }
          }}
          >
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
          {/* <PdfViewer/> */}
        </Form.Item>
        <Form.Item  >
          <Flex wrap="wrap" gap="small">
            
            <Button type="primary" icon={<SendOutlined />} onClick={handleSend}>
              Send
            </Button>
            
          </Flex>
        </Form.Item>
        
      </Form>
    </div>
  );
};
