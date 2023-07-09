import { Link, useNavigate } from 'react-router-dom'

const ForgotOTP = () => {
  const navigate = useNavigate()
    return(
        <main className='h-100'>
          <nav className='navbar navbar-expand-lg'>
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
                <p className='forgot-text'>An OTP has been sent to your mail, input the OTP below</p>
            </div>
            <form className='mb-3 register-form pt-5'>
              <div className='each-reg'>
                <label class="form-label">Email Address/UID</label>
                <input type='number' placeholder='Input OTP recieved' name='location' className='form-control reg-input'/>
              </div>
              <p className='reg-p'>Did not get OTP after 10 minute  <Link to='#top' className='reg-log'>RESEND</Link></p>
              <button onClick={() => {navigate('/newpass')}} className='form-control join forgot-btn'>Continue</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <Link to='/register' className='reg-log'>Sign Up here</Link></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default ForgotOTP
