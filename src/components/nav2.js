import { ReactComponent as Location } from '../images/location.svg'
import { ReactComponent as Drop } from '../images/Vector.svg'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
const Nav2 = () => {
    return(
        <main>
            <div className='top-nav container-fluid pt-4 d-flex align-items-center justify-content-between mobile-nav2'>
              <div className='d-flex align-items-center justify-content-between logo'><img src={require('../images/logo2.jpg')} alt='' /><h1>Digi</h1></div>
              <form className='search d-flex align-items-center flex-row'>
                <img src={require('../images/search.jpg')} alt='' />
                <input type='text' className='' placeholder='Search Digistore'/>
                <div className='icon-div d-flex align-items-center justify-content-center'>
                  <Location />
                  <p className='text-center anywhere'>Anywhere</p>
                  <Drop />
                 </div>
              </form>
                <div className='ul-div d-flex align-items-center justify-content-between'>
                    <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                        <li className='nav-item'><a className='nav-link active' aria-current="true" href={`/`}>Home</a></li>
                        <li className='nav-item'><a className='nav-link' href='#top'>X-Services</a></li>
                        <li className='nav-item'><a className='nav-link' href='#top'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='auth-user'>
                    <a href='#top' className='d-flex align-items-center justify-content-between'>
                        <img src={require('../images/auth-user.jpg')} alt='user...' />
                        <p>OluwaSender</p>
                        <img src={require('../images/log-drop.jpg')} alt='...' />
                    </a>
                </div>
            </div>
            <Outlet />
            <Footer />        
            </main>
    )
}
export default Nav2
