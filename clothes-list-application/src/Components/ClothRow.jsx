import React from "react";

const ClothRow = ({ clothName, clothId, price, quantity, description, color, manufactureDate, size }) => {
  return (
    <tr>
      <td>{clothName}</td>
      <td>{clothId}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>{color}</td>
      <td>{manufactureDate}</td>
      <td>{size}</td>
      <td>{}</td>
    </tr>
  );
};

export default ClothRow;
