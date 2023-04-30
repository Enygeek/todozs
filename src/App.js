import './App.css';
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from "./Components/Home";
import UsersManagement from "./Components/UsersManagement";

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
