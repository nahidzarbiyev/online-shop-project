import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";

const TableAntd = () => {
  const product = useSelector((state) => state.product);
  console.log(product.products);
const [toggle, setToggle] = useState(false)
const handleModalDetails = (obj)=>{
 <p className="text-white"> {obj.name}</p>
console.log(obj.name);
  setToggle(!toggle)
}
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "category",
      render: (obj, el) => <p >{obj?.category?.name}</p>

    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "color",
      dataIndex: "color",
      key: "color",
    },
    {
        title: "size",
        dataIndex: "size",
        key: "size",
      },
      {
        title: "description",
        dataIndex: "description",
        key: "description",
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
