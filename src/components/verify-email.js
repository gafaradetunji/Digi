import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
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
                <p className='p-start'>Verify Email</p>
                <p className='forgot-text'>An OTP has been sent to your mail, input the OTP below</p>
            </div>
            <form className='mb-3 register-form pt-5'>
              <div className='each-reg'>
                <input type='number' placeholder='Input OTP recieved' name='location' className='form-control reg-input'/>
              </div>
              <p className='reg-p'>Did not get OTP after 10 minute  <a href='#top' className='reg-log'>RESEND</a></p>
              <button onClick={() => {navigate('/login')}} className='form-control join forgot-btn'>Continue</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <a href='/register' className='reg-log'>Sign Up here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default VerifyEmail
