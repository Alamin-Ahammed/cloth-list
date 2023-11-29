import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useProducts } from "../Context/FormDataContext";

const ClothRow = ({ clothId, clothName, price, quantity, description, color, manufactureDate, size }) => {
  const { products, updateProducts } = useProducts();

  const handleClick = (e) => {
    e.stopPropagation();
    const filteredProducts = products.filter((element) => element.clothId !== clothId);
    updateProducts(filteredProducts);
  };

  return (
    <tr>
      <td>{clothName || ""}</td>
      <td>{clothId || ""}</td>
      <td>{price || ""}</td>
      <td>{quantity || ""}</td>
      <td>{description || ""}</td>
      <td>{color || ""}</td>
      <td>{size || ""}</td>
      <td>{manufactureDate || ""}</td>
      <td>
        <MdDelete onClick={handleClick} />
      </td>
    </tr>
  );
};

export default ClothRow;
