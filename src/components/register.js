import { Link, useNavigate } from 'react-router-dom'
import RegisterNav from './registerNav'
const Register = () => {
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
                <p className='p-start'>Let’s Get Started</p>
                <button className='google-btn p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
            </div>
            <form className='pt-5 mb-3 register-form'>
              <div className='each-reg'>
                <label className="form-label">What is your location</label>
                <input type='text' placeholder='Choose your location' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Email Address</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Phone number</label>
                <input type='number' placeholder='Type In Your Phone Number' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Create a passowrd</label>
                <input type='text' placeholder='Type In Your Desired Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Repeat passowrd</label>
                <input type='text' placeholder='Repeat Password Typed' name='location' className='form-control reg-input'/>
              </div>
              <div className='reg-condition'>
                <input type='checkbox' className='checkbox'/><span>Agree to <a href='#top' className='terms'>terms and condition</a></span>
              </div>
              <button onClick={() => navigate('/verify-mail')} className='form-control join'>Join Now</button>
            </form>
            <p className='text-center reg-p'>Already have an account <Link to='/login' className='reg-log'>login here</Link></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Register
