import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";
import AdminProducts from "./pages/admin/Products";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import UserOrders from "./pages/user/Orders";
import UserProfile from "./pages/user/Profile";
import Shop from "./pages/Shop";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import notFound from "../src/images/404-book.png"
import Search from './pages/Search';
import ProductView from "./pages/ProductView";

// 404 page
const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
    <img src={notFound} alt="Not Found" style={{ width: "400px" }} />
    </div>
  )
};



export default function App() {

  return (
    <BrowserRouter>      
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:slug" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   


         {/* user private route */}
        <Route path="/dashboard" element={<PrivateRoute/>} >
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/profile" element={<UserProfile/>} /> 
          <Route path="user/orders" element={<UserOrders/>} /> 
        </Route>

          {/* Admin private routes */}
        <Route path="/dashboard" element={<AdminRoute/>} >
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/category" element={<AdminCategory/>} />
          <Route path="admin/product" element={<AdminProduct/>} />
          <Route path="admin/products" element={<AdminProducts/>} />
          <Route path="admin/product/update/:slug" element={<AdminProductUpdate/>} />
        </Route>

        <Route path="*" element={<PageNotFound />} replace />

      </Routes>
    </BrowserRouter>
    
  );
}
 


