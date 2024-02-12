import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function AdminOutgoing() {
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
              <tr>
                <th scope="row">1</th>
                <td>User</td>
                <td>Description</td>
                <td>21/12/2023</td>
                <td>Pending</td>
                <td> <Button type="primary" icon={<SearchOutlined />}>
                 view
                </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>User</td>
                <td></td>
                <td>13/12/2023</td>
                <td>Ended</td>
                <td> <Button type="primary" icon={<SearchOutlined />}>
                 view
                </Button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}
