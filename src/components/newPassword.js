import { Link } from 'react-router-dom'
import RegisterNav from './registerNav'
import RegisterMobileNav from './registerMobileNav'
const NewPassword = () => {
    return(
        <main className='h-100'>
          <RegisterNav />
          <RegisterMobileNav />
            <div className='get-started text-center'>
                <p className='p-start'>Set New Password</p>
            </div>
            <div className='minimo'>
            <form className='pt-5 mb-3 register-form'>
              <p className='forgot-text text-center'>Create a new password at least 8 characters long with letters, special characters and numbers</p>
              <div className='each-reg'>
                <label className="form-label">New Password</label>
                <input type='text' placeholder='Type In New Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Confirm Password</label>
                <input type='text' placeholder='Re-Type Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='reg-condition'>
                <input type='checkbox' className='checkbox'/><span>Log me out of other devices</span>
              </div>
              <button className='form-control join new-btn'>Log In</button>
            </form>
            <p className='text-center reg-p'>Don’t have an account yet?  <Link to='/register' className='reg-log'>Sign Up here</Link></p>
            </div>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default NewPassword
