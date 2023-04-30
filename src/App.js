import './assets/css/App.css';
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import UsersManagement from "./Components/Pages/UsersManagement";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/UsersManagement" element={<UsersManagement/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
