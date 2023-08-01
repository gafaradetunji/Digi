import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RegisterNav from './registerNav'
import RegisterMobileNav from './registerMobileNav'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()
  const [ values, setValues ] = useState({
    email: '',
    password: '',
  })
  const [ formError, setFormError ] = useState({})

  const handleChange = e => {
    setValues(() => ({...values, [e.target.name]: e.target.value}))
  }

  function validateForm() {
    const error = {};
    const emailValidation = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsSymbol = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
    const isContainsNumber = /^(?=.*[0-9])/;
    
    if (values.email === '') {
      error.email = 'Email is required!';
    } else if (!emailValidation.test(values.email)) {
      error.email = 'Email is invalid!';
    }
    
    if (values.password === '') {
      error.password = 'Password is required';
    } else {
      if (!isContainsUppercase.test(values.password)) {
        error.password = 'Password must have at least one Uppercase Character.';
      }
      if (!isContainsSymbol.test(values.password)) {
        error.password = 'Password must contain at least one Special Symbol.';
      }
      if (!isContainsNumber.test(values.password)) {
        error.password = 'Password must contain at least one Digit.';
      }
    }
    
    setFormError({ ...error });
    return Object.keys(error).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Values', values)
    const isvalid = validateForm()
    const data = new FormData();
    const url = 'https://digi.mjobi.com/customer/login/'
    data.append('email', values.email)
    data.append('password', values.password)
    
    try{
      const response = await axios.post(url, data)
      console.log(response)
      const authToken = response.data.token;
      localStorage.setItem('authToken', authToken)
      console.log('Login successful');
      isvalid && navigate('/')
      console.log('Message:', response);
      console.log('Token:', response.data.token);
    } catch (error) {
        console.error('Login Failed:', error);
    }
  };
  
    return(
        <main className='h-[800px] relative'>
          <RegisterNav />
          <RegisterMobileNav />
            <div className='get-started text-center'>
                <p className='p-start'>Get Into DIGI</p>
            </div>
          <div className='minimo mb-[100px]'>
            <form className='pt-5 mb-3 register-form h-75' onSubmit={handleSubmit}>
              <button className='google-btn mb-5 p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
              <div className='each-reg'>
                <label className="form-label">Email Address/UID</label>
                <p className='error'>{formError.email}</p>
                <input type='text' placeholder='Type In Your Email Address or user ID' value={values.email} onChange={handleChange} name='email' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Passowrd</label>
                <p className='error'>{formError.password}</p>
                <input type='password' placeholder='Enter your password' value={values.password} onChange={handleChange} name='password' className='form-control reg-input'/>
              </div>
                <Link to='/forgotPass' className='forgot-pass'>Forget Password?</Link>
              <button className='form-control join'>Log In</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <Link to='/register' className='reg-log'>Sign Up here</Link></p>
          </div>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Login
