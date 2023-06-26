import { useNavigate } from 'react-router-dom'

const ForgotPass = () => {
    const navigate = useNavigate()
    return(
        <main className='h-100'>
          <nav className='navbar navbar-expand-lg'>
            <div className='register container-fluid'>
                <p className='finance'>
                  <a href={`/`} className='navbar-brand a-register'>
                      <span className='dig'>Digi</span>
                      <img src={require('../images/logo2.jpg')} alt='' className='img-register'/>
                  </a>
                </p>
                <a href='#top' className='navbar-list'>Be a manufacutrer</a>
                <a href='#top' className='navbar-list'>Contact Us</a>
            </div>
          </nav>
            <div className='get-started text-center'>
                <p className='p-start'>Forgot Password</p>
                <p className='forgot-text'>Put in your registered Email below .</p>
            </div>
            <form className='pt-5 mb-3 register-form'>
              <div className='each-reg'>
                <label class="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
              <button onClick={() => {navigate('/forgototp')}} className='form-control join forgot-btn'>Continue</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <a href='/register' className='reg-log'>Sign Up here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default ForgotPass
