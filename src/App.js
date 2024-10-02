import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from "./Home";

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
