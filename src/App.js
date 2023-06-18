import NavBar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import ForgotPass from './components/forgot-pass';
import Electrical from './components/electrical';
import ForgotOTP from './components/forgot-otp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import NewPassword from './components/newPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/electrical" element={<Electrical />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/forgototp" element={<ForgotOTP />} />
        <Route path="/newpass" element={<NewPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
