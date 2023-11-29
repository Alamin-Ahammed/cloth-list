// ClothTable.jsx

import React, { useEffect } from "react";
import ClothRow from "./ClothRow";
import { useProducts } from "../Context/FormDataContext";
import "./ClothTable.css";
const ClothTable = () => {
  const { products , updateProducts } = useProducts();
  const handleRemovAll = () => {
    alert("Are you sure you want to remove all products?");
    updateProducts([]);
    localStorage.setItem("products", JSON.stringify([]));
  }
  return (
    <div className="ClothTable-container">
      <div className="ClothTable-header">
        <h1>Cloth Table</h1>
        <button onClick={handleRemovAll} className="Remove-all-button">Remove All</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cloth Name</th>
            <th>Cloth ID</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Color</th>
            <th>Size</th>
            <th>Manufacture Date </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((element) => (
            <ClothRow key={element.clothId} {...element} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClothTable;
