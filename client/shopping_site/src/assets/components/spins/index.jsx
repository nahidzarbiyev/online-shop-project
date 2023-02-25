import React from 'react'
import { Space, Spin } from 'antd';
const Spinns = () => {
  return (
  <div className='w-[100%] h-[100vh] flex justify-center items-center'> 
      <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
  </div>
  )
}

export default Spinns