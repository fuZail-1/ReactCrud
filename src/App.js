import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import EditStudent from "./Components/EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editstudent/:id" element={<EditStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
