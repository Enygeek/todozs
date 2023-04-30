import './assets/css/App.css';
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import UsersManagement from "./Components/Pages/UsersManagement";
import TagsManagement from "./Components/Pages/TagsManagement";
import TicketsManagement from "./Components/Pages/TicketsManagement";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/UsersManagement" element={<UsersManagement/>}/>
              <Route path="/TagsManagement" element={<TagsManagement/>}/>
              <Route path="/TicketsManagement" element={<TicketsManagement/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
