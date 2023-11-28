// FormDataContext
/**
 * this store the values which is submitted by the user in the form and also it is updated when the user submits the products get updated(CRUD)
 */

import { createContext, useContext , useState} from "react";

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProducts = (newData) => {
    setProducts(prev => [...prev, newData]);
  };
  return (
    <FormDataContext.Provider value={{ products, updateProducts }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useProducts = () => {
    return useContext(FormDataContext);
}

export {FormDataProvider, useProducts};