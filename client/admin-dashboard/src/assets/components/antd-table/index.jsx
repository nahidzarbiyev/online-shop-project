import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef } from 'react';
import Highlighter from 'react-highlight-words';
const TableAntd = () => {
  const product = useSelector((state) => state.product);
  console.log(product.products);
const [toggle, setToggle] = useState(false)
const handleModalDetails = (obj)=>{
 <p className="text-white"> {obj.name}</p>
console.log(obj.name);
  setToggle(!toggle)
}





const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef(null);
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};
const handleReset = (clearFilters) => {
  clearFilters();
  setSearchText('');
};
const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div
      style={{
        padding: 8,
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined
      style={{
        color: filtered ? '#1890ff' : undefined,
      }}
    />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});






  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps('name'),
      width: "18%"
    },
    {
      title: "price",
      dataIndex: "price",
      ...getColumnSearchProps('price'),
      key: "price",
      
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 2,
      },
    },
    {
      title: "category",
      render: (obj, el) => <p >{obj?.category?.name}</p>,

      sorter: {
        compare: (a, b) => a.category - b.category,
        multiple: 2,
      },
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",

    },
    {
      title: "color",
      dataIndex: "color",
      width: "12%",

      key: "color",
      ...getColumnSearchProps('color'),


    },
    {
        title: "size",
        dataIndex: "size",
        key: "size",
      width: "18%",


      },
      {
        title: "description",
        dataIndex: "description",
        key: "description",
      width: "30%",

      ...getColumnSearchProps('description')

      },
      {
        title: 'details',
        render: (obj, el) => <button onClick={()=>handleModalDetails(obj)}>details</button>
      },
  ];

  return (
    <div className="relative">
      <Table dataSource={product.products} columns={columns} rowKey={product.products._id} />
     <div>
       <div
      className={
        toggle
          ? "w-96 min-h-[400px] bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center absolute top-[20%] left-[42%] z-30  py-5"
          : "scale-0 transition-all w-96 min-h-[400px] z-30 bg-dark flex  duration-300 invisible flex-col justify-center items-center absolute top-[20%] left-[42%]"
      }
      ><CiCircleRemove
      className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
    </div>
     </div>
    </div>
  );
};

export default TableAntd;
