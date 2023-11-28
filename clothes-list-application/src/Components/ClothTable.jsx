// ClothTable.jsx

import React from 'react';
import ClothRow from './ClothRow';
import {useProducts} from '../Context/FormDataContext';
const ClothTable = () => {
    const {products} = useProducts();
  return (
    <div>
      <h1>Cloth Table</h1>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ClothRow />
        </tbody>
      </table>
    </div>
  );
};

export default ClothTable;
