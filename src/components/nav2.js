import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Location } from '../images/location.svg'
import { ReactComponent as Search } from '../images/search.svg'
import { ReactComponent as Drop } from '../images/Vector.svg'
import { ReactComponent as Ios } from '../images/ios.svg'
import { ReactComponent as Android } from '../images/android.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'
import { Outlet } from 'react-router-dom'
const Nav2 = () => {
    return(
        <main>
            <div className='top-nav container-fluid pt-4 d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center justify-content-between logo'><Logo /><h1>Digi</h1></div>
              <form className='search d-flex align-items-center flex-row'>
                <Search className='search-icon'/> 
                <input type='text' className='' placeholder='Search Digistore'/>
                <div className='icon-div d-flex align-items-center justify-content-center'>
                  <Location />
                  <p className='text-center anywhere'>Anywhere</p>
                  <Drop />
                 </div>
              </form>
                <div className='ul-div d-flex align-items-center justify-content-between'>
                    <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                        <li className='nav-item'><a className='nav-link active' aria-current="true" href={`home`}>Home</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>X-Services</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='auth-user'>
                    <a href='#' className='d-flex align-items-center justify-content-between'>
                        <img src={require('../images/auth-user.jpg')} alt='user...' />
                        <p>OluwaSender</p>
                        <img src={require('../images/log-drop.jpg')} alt='...' />
                    </a>
                </div>
            </div>
            <Outlet />
            <footer className='footer row p-5'>
                <div className='footer-logo col-sm-6'>
                    <Logo />
                    <p>Download Digi Mobile App</p>
                    <div className='footer-mobile ios d-flex align-items-center justify-content-center'>
                        <Ios />
                        <h4>iOS</h4>
                    </div>
                    <div className='footer-mobile android d-flex align-items-center justify-content-center'>
                        <Android />
                        <h4>Android</h4>
                    </div>
                </div>
                <div className='about-footer col-sm-2'>
                    <p><a href='#'>About Digi</a></p>
                    <p><a href='#'>Manufacturers</a></p>
                    <p><a href='#'>Careers</a></p>
                </div>
                <div className='footer-legal col-sm-2'>
                    <p><a href=''>Legal</a></p>
                    <p><a href=''>Privacy policy</a></p>
                    <p><a href=''>Terms of use</a></p>
                    <p><a href=''>Report Abuse</a></p>
                    <p><a href=''>Avoid scams & fraud</a></p>
                    <p><a href=''>System status</a></p>
                </div>
                <div className='socials col-sm-2'>
                    <p><a href=''>Social Media</a></p>
                    <p><a href=''><Facebook /></a></p>
                    <p><a href=''><Instagram /></a></p>
                    <p><a href=''><Twitter /></a></p>
                    <p><a href=''><Linkedin /></a></p>
                </div>
            </footer>
            <div className='copy text-center'>
                <p>© copyright 2023 Digi</p>
            </div>
        </main>
    )
}
export default Nav2
