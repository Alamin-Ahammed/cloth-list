import "./App.css";
import { FormDataProvider } from "./Context/FormDataContext";
import FormData from "./FormData/FormData";

function App() {
  return (
    <>
      <FormDataProvider>
        <FormData />
      </FormDataProvider>
    </>
  );
}

export default App;
