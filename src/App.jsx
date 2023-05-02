import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import UsersCase from "./pages/UsersCase";
import Pricing from "./pages/Pricing";
import Community from "./pages/Community";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="community" element={<Community />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="usecase" element={<UsersCase />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
