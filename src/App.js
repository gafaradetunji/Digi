import NavBar from './components/navbar';
import Nav2 from './components/nav2';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import ForgotPass from './components/forgot-pass';
import Electrical from './components/electrical';
import ForgotOTP from './components/forgot-otp';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import VerifyEmail from './components/verify-email';
import './scss/app.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import NewPassword from './components/newPassword';
import ProductPage from './components/productDetails'
import RegisterManufacturer from './components/manufacturer/register_manufacturer';
import Company from './components/manufacturer/company';
import Additional from './components/manufacturer/additonal_detail';
import ManufacutrerProduct from './components/manufacturer/manufacture_product';
import EditManufacturerProduct from './components/manufacturer/manufacturer_edit';
import ShippingPrice from './components/manufacturer/shipping_price';
import Policies from './components/manufacturer/policies';
import LoginManufacturer from './components/manufacturer/login_manufacturer';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/' element={<Nav2 />}>
          <Route path="electrical" element={<Electrical />} />
          <Route path="chemical" element={<Electrical />} />
          <Route path="mechanical" element={<Electrical />} />
          <Route path="farm" element={<Electrical />} />
          <Route path="/manufacturerProduct" element={<ManufacutrerProduct />} />
          <Route path="/editmanufacturer" element={<EditManufacturerProduct />} />
          <Route path="/shipping" element={<ShippingPrice />} />
          <Route path="/policies" element={<Policies />} />
          <Route path=':category'>
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/registerman" element={<RegisterManufacturer />} />
        <Route path="/loginman" element={<LoginManufacturer />} />
        <Route path="/company" element={<Company />} />
        <Route path="/addition" element={<Additional />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/forgototp" element={<ForgotOTP />} />
        <Route path="/verify-mail" element={<VerifyEmail />} />
        <Route path="/newpass" element={<NewPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
