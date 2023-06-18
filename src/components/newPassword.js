const NewPassword = () => {
    return(
        <main className='h-100'>
          <nav className='navbar navbar-expand-lg'>
            <div className='register container-fluid'>
                <p className='finance'>
                  <a href='#top' className='navbar-brand'>
                      <span className='dig'>Digi</span>
                      <img src={require('../images/logo2.jpg')} alt='' className=''/>
                  </a>
                </p>
                <a href='#top' className=''>Be a manufacutrer</a>
                <a href='#top' className=''>Contact Us</a>
            </div>
          </nav>
            <div className='get-started text-center'>
                <p className='p-start'>Set New Password</p>
                <p>Create a new password at least 8 characters long with letters, special characters and numbers</p>
            </div>
            <form className='pt-4 mb-3 reg-form container'>
              <div className='mb-2'>
                <label class="form-label">New Password</label>
                <input type='text' placeholder='Type In New Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Confirm Password</label>
                <input type='text' placeholder='Re-Type Password' name='location' className='form-control reg-input'/>
              </div>
              <input type='checkbox' className='checkbox'/><span>Log me out of other devices</span>
              <button className='form-control join'>Log In</button>
            </form>
            <p className='text-center'>Don’t have an account yet?  <a href='/register' className='reg-log'>Sign Up here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default NewPassword
