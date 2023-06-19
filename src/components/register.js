import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
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
                <p className='p-start'>Let’s Get Started</p>
                <button className='reg-btn p-2'>Sign up with google<img src={require('../images/google.jpg')} alt='' /></button>
            </div>
            <form className='pt-5 mb-3 register-form container'>
              <div className='mb-2'>
                <label class="form-label">What is your location</label>
                <input type='text' placeholder='Choose your location' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Email Address</label>
                <input type='text' placeholder='Type In Your Email Address or user ID' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Phone number</label>
                <input type='number' placeholder='Type In Your Phone Number' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Create a passowrd</label>
                <input type='text' placeholder='Type In Your Desired Password' name='location' className='form-control reg-input'/>
              </div>
              <div className='mb-2'>
                <label class="form-label">Repeat passowrd</label>
                <input type='text' placeholder='Repeat Password Typed' name='location' className='form-control reg-input'/>
              </div>
              <div className='m-2'>
                <input type='checkbox' className='checkbox'/><span>Agree to <a href='#top' className='terms'>terms and condition</a></span>
              </div>
              <button onClick={() => navigate('/login')} className='form-control join'>Join Now</button>
            </form>
            <p className='text-center'>Already have an account <a href='/login' className='reg-log'>login here</a></p>
            <footer className='reg-footer w-100 text-center'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Register
