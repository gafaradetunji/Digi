import { Link, useNavigate } from 'react-router-dom'
import RegisterNav from './registerNav'

const ForgotPass = () => {
    const navigate = useNavigate()
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
                <p className='p-start'>Forgot Password</p>
            </div>
            <div className='minimo'>
            <form className='pt-5 mb-3 register-form'>
              <p className='forgot-text text-center'>Put in your registered Email below .</p>
              <div className='each-reg'>
                <label className="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
              <button onClick={() => {navigate('/forgototp')}} className='form-control join forgot-btn'>Continue</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <Link to='/register' className='reg-log'>Sign Up here</Link></p>
            </div>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default ForgotPass
