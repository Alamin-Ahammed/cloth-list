import "./App.css";
import { FormDataProvider } from "./Context/FormDataContext";
import FormData from "./FormData/FormData";
import ClothTable from "./Components/ClothTable";

function App() {
  return (
    <div className="App-container">
      <FormDataProvider>
        <FormData />
        <ClothTable />
      </FormDataProvider>
    </div>
  );
}

export default App;
