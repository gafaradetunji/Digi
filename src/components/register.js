import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RegisterNav from './registerNav'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate()
  const [ values, setValues ] = useState({
    location: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
  })
  const [ formError, setFormError ] = useState({})

  const handleChange = e => {
    setValues(() => ({...values, [e.target.name]: e.target.value}))
  }

  const validateForm = () => {
    const error = {}

    const emailValidation = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    const numberValidation = /^[0-9]+/

    if (values.location === '') {
      error.location = 'Location is required!'
    }
    if (values.email === '') {
      error.email = 'Email is required!'
    }
    else if( !emailValidation.test(values.email)){
      error.email = 'Email is invalid!'
    }
    if (values.number === '') {
      error.number = 'Number is required!'
    }
    else if( !numberValidation.test(values.number)){
      error.number = 'Expecting Numbers only'
    }
    else if(values.number.length !== 11){
      error.number = 'Must be 11 Digits here'
    }
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(values.password)) {
      error.password = 'Password must not contain Whitespaces.'
    }
    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!isContainsUppercase.test(values.password)) {
      error.password = "Password must have at least one Uppercase Character.";
    }
    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!isContainsLowercase.test(values.password)) {
      error.password = "Password must have at least one Lowercase Character.";
    }
    const isContainsNumber = /^(?=.*[0-9])/;
    if (!isContainsNumber.test(values.password)) {
      error.password = "Password must contain at least one Digit.";
    }
    const isContainsSymbol = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
    if (!isContainsSymbol.test(values.password)) {
      error.password = "Password must contain at least one Special Symbol.";
    }
    if (values.password !== values.confirmPassword) {
      error.confirmPassword = 'Password does not match'
    }
    setFormError({...error})

    return Object.keys(error).length < 1
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Values', values)
    const isvalid = validateForm()
    try{
      const response = await axios.post('https://digi.mjobi.com/customer/signup/', 
      {
        email: values.email,
        password: values.password //qwertyuiop1234$A
      })
      if (response.status === 202) {
        console.log('Login successful');
        console.log('Message:', response.data.message);
        console.log('Token:', response.data.token);

        isvalid && navigate('/login')
        console.log(isvalid)
      } else {
        console.error('Login Failed:', response.status);
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
    isvalid && navigate('/verify-mail')
    console.log(isvalid)
  }

    return(
        <main className='h-100'>
          <RegisterNav />
          <nav className='navbar navbar-expand-lg register-desk'>
            <div className='register container-fluid'>
                <p className='finance'>
                  <Link to={`/`} className='navbar-brand a-register'>
                      <span className='dig'>Digi</span>
                      <img src={require('../images/logo2.jpg')} alt='' className='img-register'/>
                  </Link>
                </p>
                <Link to='#top' className='navbar-list'>Be a manufacutrer</Link>
                <Link to='#top' className='navbar-list'>Contact Us</Link>
            </div>
          </nav>
            <div className='get-started text-center'>
                <p className='p-start'>Let’s Get Started</p>
                <button className='google-btn p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
            </div>
            <form className='pt-5 mb-3 register-form' onSubmit={handleSubmit}>
              <div className='each-reg'>
                <label className="form-label">What is your location</label>
                <p className='error'>{formError.location}</p>
                <input type='text' placeholder='Choose your location' name='location' className='form-control reg-input' value={values.location} onChange={handleChange}/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Email Address</label>
                <p className='error'>{formError.email}</p>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='email' className='form-control reg-input' value={values.email} onChange={handleChange}/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Phone number</label>
                <p className='error'>{formError.number}</p>
                <input type='number' placeholder='Type In Your Phone Number' name='number' className='form-control reg-input' value={values.number} onChange={handleChange}/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Create a passowrd</label>
                <p className='error'>{formError.password}</p>
                <input type='text' placeholder='Type In Your Desired Password' name='password' className='form-control reg-input' value={values.password} onChange={handleChange}/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Repeat passowrd</label>
                <p className='error'>{formError.confirmPassword}</p>
                <input type='text' placeholder='Repeat Password Typed' name='confirmPassword' className='form-control reg-input' value={values.confirmPassword} onChange={handleChange}/>
              </div>
              <div className='reg-condition'>
                <input type='checkbox' className='checkbox'/><span>Agree to <a href='#top' className='terms'>terms and condition</a></span>
              </div>
              <button className='form-control join'>Join Now</button>
            </form>
            <p className='text-center reg-p'>Already have an account <Link to='/login' className='reg-log'>login here</Link></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Register
