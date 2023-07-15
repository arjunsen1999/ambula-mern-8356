import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
