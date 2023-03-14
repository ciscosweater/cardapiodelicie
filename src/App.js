import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
