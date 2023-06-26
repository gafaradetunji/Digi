const NewPassword = () => {
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
                <p className='p-start'>Set New Password</p>
                <p className='forgot-text'>Create a new password at least 8 characters long with letters, special characters and numbers</p>
            </div>
            <form className='pt-5 mb-3 register-form'>
              <div className='each-reg'>
                <label class="form-label">New Password</label>
                <input type='text' placeholder='Type In New Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label class="form-label">Confirm Password</label>
                <input type='text' placeholder='Re-Type Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='reg-condition'>
                <input type='checkbox' className='checkbox'/><span>Log me out of other devices</span>
              </div>
              <button className='form-control join new-btn'>Log In</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <a href='/register' className='reg-log'>Sign Up here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default NewPassword
