import React, { useEffect, useState } from "react";
import { useProducts } from "../Context/FormDataContext";
import './FormData.css';

const FormData = () => {
  const { products, updateProducts } = useProducts();
  const [formData, setFormData] = useState({
    clothName: "",
    clothId: "",
    price: "",
    quantity: "",
    description: "",
    color: "red",
    termsAndConditions: false,
    manufactureDate: "",
    size: "M",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // creating new object using inputs values 
    const newformData = {
      clothName: e.target.clothName.value,
      clothId: e.target.clothId.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      description: e.target.description.value,
      color: e.target.color.value,
      termsAndConditions: e.target.termsAndConditions.checked,
      manufactureDate: e.target.manufactureDate.value,
      size: e.target.size.value,
    };

    // Form inputs Validation
    let isVaildValue = true;
    for (const key in newformData) {
      const element = newformData[key];
      if (isVaildValue) {
        if (key === "color" || key === "size") {
          continue;
        } else if (key === "termsAndConditions" && element === false) {
          isVaildValue = false;
          alert("Please accept the terms and conditions");
        } else if (key === "manufactureDate" && element === "") {
          isVaildValue = false;
          alert("Please fill all the date fields");
        } else if (typeof element === "string" && element.trim() === "") {
          isVaildValue = false;
          alert("Please fill all the fields");
        }
      }
    }
    // checking quantity and price is ok or not 
    const {quantity,price,clothId} = newformData;
    if ( quantity > 200 || quantity < 0) {
      isVaildValue = false;
      alert("Quantity should be less than 200 but upper than 0");
    }else if ( price < 0 ) {
      isVaildValue = false;
      alert("Price should be greater than 0");
    }else if ( clothId < 0 ) {
      isVaildValue = false;
      alert("Cloth Id should be greater than 0");      
    }

    // checking cloth id is already exist or not
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if (element.clothId === newformData.clothId) {
        isVaildValue = false;
        alert('This cloth id already exist');
        break;
      }
    }

    //now if isvaildValue still true then add new data in products
    if (isVaildValue) {
      setFormData(newformData);
      updateProducts(prev => [...prev,formData])
    }
  };

  // saving in local-storage after form submit
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clothName">Cloth Name</label>
          <input
            required
            type="text"
            name="clothName"
            id="clothName"
            value={formData.clothName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="clothId">Cloth Id</label>
          <input
            required
            type="number"
            name="clothId"
            id="clothId"
            value={formData.clothId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            required
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            required
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <i>max 200</i>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            required
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <select
            name="color"
            id="color"
            value={formData.color}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>
          <label htmlFor="termsAndConditions">
            Terms and Conditions
            <input
              required
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="manufactureDate">Manufacture Date</label>
          <input
            required
            type="date"
            name="manufactureDate"
            id="manufactureDate"
            value={formData.manufactureDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <div>
            <label htmlFor="sizeM">
              <input
                required
                type="radio"
                name="size"
                id="sizeM"
                value="M"
                checked={formData.size === "M"}
                onChange={handleChange}
              />
              M
            </label>
            <label htmlFor="sizeL">
              <input
                required
                type="radio"
                name="size"
                id="sizeL"
                value="L"
                checked={formData.size === "L"}
                onChange={handleChange}
              />
              L
            </label>
            <label htmlFor="sizeXL">
              <input
                required
                type="radio"
                name="size"
                id="sizeXL"
                value="XL"
                checked={formData.size === "XL"}
                onChange={handleChange}
              />
              XL
            </label>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
