import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Components/Home/Home";
import Products from "./Components/components/Products/Products";
import Numbers from "./Components/components/Numbers";
import Restaurant from "./Components/components/Products/Restaurant/Restaurant";
import Dilhush from "./Components/components/Products/Restaurant/Dilxush";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/mahsulotlar" element={<Products/>}/>
            <Route path="/restoranlar" element={<Restaurant/>}/>
            <Route path="/dilxush" element={<Dilhush/>}/>
            <Route path="/raqamlar" element={<Numbers/>}/>

          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
