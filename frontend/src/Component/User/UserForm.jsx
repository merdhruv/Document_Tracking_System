import React from 'react';
import "./home.css";
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
  return (
    <div className='user-form'>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Doc Code">
          <Input />
        </Form.Item>

        <Form.Item label="Sender">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Recipient">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Category">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Prioritization">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date of Letter">
          <DatePicker />
        </Form.Item>
        
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
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
        </Form.Item>
        <Form.Item  >
          <Flex wrap="wrap" gap="small">
            
            <Button type="primary" icon={<SendOutlined />}>
              Send
            </Button>
            
          </Flex>
        </Form.Item>
        
      </Form>
    </div>
  );
};
