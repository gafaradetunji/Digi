const Login = () => {
    return(
        <main className='h-100'>
          <nav className='navbar navbar-expand-lg'>
            <div className='register container-fluid'>
                <p className='finance'>
                  <a href={`/`} className='navbar-brand'>
                      <span className='dig'>Digi</span>
                      <img src={require('../images/logo2.jpg')} alt='' className=''/>
                  </a>
                </p>
                <a href='#top' className=''>Be a manufacutrer</a>
                <a href='#top' className=''>Contact Us</a>
            </div>
          </nav>
            <div className='get-started text-center'>
                <p className='p-start'>Get Into DIGI</p>
                <button className='reg-btn p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
            </div>
            <form className='pt-3 mb-3 reg-form container'>
              <div className='mb-2'>
                <label class="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Email Address/UID</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
                <a href='/forgotPass' className='forgot-pass'>Forget Password?</a>
              <button className='form-control join'>Log In</button>
            </form>
            <p className='text-center'>Don’t have an account yet?  <a href='/register' className='reg-log'>Sign Up here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Login
