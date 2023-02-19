import React from "react";

const Size = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <table className=" w-96 border border-dark">
        <thead className=" text-center" >
          <th>US - Erkek</th>
          <th>US - Kadın</th>
          <th>UK</th>
          <th>CM/JP</th>
          <th>EU</th>
        </thead>
        <tbody>
          <tr>
            {" "}
            <td>3.5</td>
            <td>5</td>
            <td>3</td>
            <td>22.5</td>
            <td>35.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Size;
