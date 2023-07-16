import { Link } from 'react-router-dom'
import RegisterNav from './registerNav'
const Login = () => {
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
                <p className='p-start'>Get Into DIGI</p>
            </div>
          <div className='minimo'>
            <form className='pt-5 mb-3 register-form h-75'>
              <button className='google-btn mb-5 p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
              <div className='each-reg'>
                <label className="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
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
